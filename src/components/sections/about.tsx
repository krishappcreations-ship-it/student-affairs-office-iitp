import { about } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-line bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="about-heading"
          eyebrow="Who we are"
          title={about.heading}
          intro={about.lead.value}
        />

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="space-y-4 text-ink/90 md:col-span-2">
            {about.body.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p.value}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-line bg-surface-alt p-4"
              >
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="mt-1 font-serif text-xl font-semibold text-primary">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
