import { contactSchema } from "@/lib/contact-schema";

/**
 * Contact form endpoint.
 * Security: server-side validation (zod), input sanitisation, honeypot,
 * in-memory rate limiting, and no secrets in client code. Email delivery is
 * optional and only attempted when RESEND_API_KEY is configured; otherwise the
 * submission is accepted as a no-op (demo).
 */

// ── Rate limiting (per-IP, in-memory) ───────────────────────────
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

/** Strip control characters (keep tab \x09 and newline \x0A) and trim. */
function clean(value: string): string {
  return value.replace(/[\x00-\x08\x0B-\x1F\x7F]/g, "").trim();
}

function getIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request): Promise<Response> {
  const ip = getIp(req);
  if (rateLimited(ip)) {
    return json(
      { success: false, error: "Too many requests. Please try again later." },
      429,
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ success: false, error: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return json(
      { success: false, error: "Please check the form and try again." },
      400,
    );
  }

  const data = parsed.data;

  // Honeypot tripped → pretend success, drop silently.
  if (data.website && data.website.length > 0) {
    return json({ success: true }, 200);
  }

  const safe = {
    name: clean(data.name),
    email: clean(data.email),
    organization: clean(data.organization ?? ""),
    subject: clean(data.subject),
    message: clean(data.message),
  };

  // Optional email delivery (no secret committed; only used if configured).
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: "SAO Website <onboarding@resend.dev>",
          to: [to],
          reply_to: safe.email,
          subject: `[SAO Contact] ${safe.subject}`,
          text: `From: ${safe.name} <${safe.email}>\nOrg: ${safe.organization}\n\n${safe.message}`,
        }),
      });
      if (!res.ok) {
        return json(
          { success: false, error: "Could not send right now. Try later." },
          502,
        );
      }
    } catch {
      return json(
        { success: false, error: "Could not send right now. Try later." },
        502,
      );
    }
  }
  // No provider configured → accept as demo no-op.

  return json({ success: true }, 200);
}
