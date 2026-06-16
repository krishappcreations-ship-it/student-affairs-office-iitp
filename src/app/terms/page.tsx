import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the Student Affairs Office demo website built for DeployIITP.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold text-primary-deep">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-muted">
        Demo notice: this is a student project (DeployIITP) and uses dummy data.
      </p>

      <div className="mt-8 space-y-5 text-ink/90">
        <p>
          This site is provided for demonstration purposes as part of the
          DeployIITP event. Content — including team members, contact details and
          emergency numbers marked as placeholders — is illustrative dummy data
          and must not be relied upon.
        </p>
        <h2 className="font-serif text-xl font-semibold">No warranty</h2>
        <p>
          The site is provided “as is”, without warranties of any kind. Links to
          external IIT Patna pages are provided for convenience.
        </p>
        <h2 className="font-serif text-xl font-semibold">Acceptable use</h2>
        <p>
          Do not misuse the contact form (spam, abuse, or unlawful content).
          Submissions may be rate-limited.
        </p>
      </div>
    </article>
  );
}
