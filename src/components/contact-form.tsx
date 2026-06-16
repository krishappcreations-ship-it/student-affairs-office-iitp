"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";
type Values = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  website: string; // honeypot
};

const EMPTY: Values = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const update = (field: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[field];
      return next;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { success: boolean; error?: string };
      if (res.ok && data.success) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        setStatus("error");
        setServerError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-card p-6 text-center"
      >
        <p className="font-serif text-lg font-semibold text-accent-green">
          Message sent
        </p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 rounded-lg border border-line px-4 py-2 text-sm font-medium text-primary hover:bg-surface-alt"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field
        id="name"
        label="Name"
        required
        value={values.name}
        error={errors.name}
        onChange={(v) => update("name", v)}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        required
        value={values.email}
        error={errors.email}
        onChange={(v) => update("email", v)}
        autoComplete="email"
      />
      <Field
        id="organization"
        label="Organization / Institution"
        value={values.organization}
        error={errors.organization}
        onChange={(v) => update("organization", v)}
        autoComplete="organization"
      />
      <Field
        id="subject"
        label="Subject"
        required
        value={values.subject}
        error={errors.subject}
        onChange={(v) => update("subject", v)}
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-ink outline-none focus:border-primary"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from users + assistive tech */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-danger">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-deep disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-ink outline-none focus:border-primary"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
