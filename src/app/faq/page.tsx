import type { Metadata } from "next";
import { faq } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about student support, hostels, scholarships, counselling, clubs and grievances at IIT Patna.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Questions answered"
        title={faq.heading}
        intro="Short answers to what students ask most. Some details are placeholders for this project."
      />

      <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-card">
        {faq.items.map((item) => (
          <details key={item.q} className="group p-5 [&_summary]:list-none">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-primary-deep">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-accent-text transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
