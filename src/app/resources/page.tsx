import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Resources & Support",
  description:
    "Quick links to the IIT Patna services students use most — hostels, gymkhana, library, career & counselling, safety cells and downloads.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Find what you need"
        title={resources.heading}
        intro={resources.intro.value}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {resources.groups.map((group) => (
          <section
            key={group.name}
            aria-labelledby={`res-${group.name}`}
            className="rounded-2xl border border-line bg-card p-6"
          >
            <h2
              id={`res-${group.name}`}
              className="font-serif text-lg font-semibold text-primary-deep"
            >
              {group.name}
            </h2>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => {
                const external = item.href.startsWith("http");
                return (
                  <li key={item.href + item.label}>
                    {external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink/85 hover:text-primary"
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-muted">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-ink/85 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted">
        External links open the official IIT Patna pages. Items under
        “Downloads” are placeholders for this project.
      </p>
    </div>
  );
}
