import type { Metadata } from "next";
import Link from "next/link";
import { contact, emergency } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Student Affairs Office, IIT Patna — address, email, phone, office hours, emergency contacts and a contact form.",
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.map.embedQuery,
)}&output=embed`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Get in touch"
        title={contact.heading}
        intro={contact.intro.value}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Left: details + emergency + map */}
        <div className="space-y-6">
          <section
            aria-labelledby="office-card"
            className="rounded-2xl border border-line bg-card p-6"
          >
            <h2
              id="office-card"
              className="font-serif text-lg font-semibold text-primary-deep"
            >
              {contact.office.value}
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-muted">
              {contact.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="w-16 text-muted">Email</dt>
                <dd>
                  <a
                    href={`mailto:${contact.email.value}`}
                    className="font-medium text-primary hover:text-accent"
                  >
                    {contact.email.value}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 text-muted">Phone</dt>
                <dd className="text-ink/85">{contact.phone.value}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 text-muted">Hours</dt>
                <dd className="text-ink/85">{contact.hours.value}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-muted">
              Office email, phone and hours are placeholders for this project.
            </p>
          </section>

          <section
            aria-labelledby="contact-emergency"
            className="rounded-2xl border border-danger/30 bg-card p-6"
          >
            <h2
              id="contact-emergency"
              className="font-serif text-lg font-semibold text-danger"
            >
              {emergency.heading}
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {emergency.contacts.map((c) => (
                <li key={c.label} className="flex justify-between gap-3">
                  <span className="text-muted">{c.label}</span>
                  <a
                    href={`tel:${c.value.replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-ink hover:text-primary"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="IIT Patna location map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full"
            />
          </div>
        </div>

        {/* Right: form */}
        <section aria-labelledby="contact-form-heading">
          <h2
            id="contact-form-heading"
            className="font-serif text-lg font-semibold text-primary-deep"
          >
            Send us a message
          </h2>
          <p className="mt-1 text-sm text-muted">
            Fields marked <span className="text-danger">*</span> are required.
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </div>

      {/* Cross-links */}
      <nav
        aria-label="Related pages"
        className="mt-12 flex flex-wrap gap-3 border-t border-line pt-6 text-sm"
      >
        <span className="text-muted">Looking for something else?</span>
        <Link href="/resources" className="font-medium text-primary hover:text-accent">
          Resources &amp; Support
        </Link>
        <Link href="/faq" className="font-medium text-primary hover:text-accent">
          FAQ
        </Link>
        <Link href="/#welfare" className="font-medium text-primary hover:text-accent">
          Student Welfare
        </Link>
      </nav>
    </div>
  );
}
