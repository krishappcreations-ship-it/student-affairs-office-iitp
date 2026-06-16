import { welfare } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Welfare() {
  return (
    <section
      id="welfare"
      aria-labelledby="welfare-heading"
      className="scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="welfare-heading"
          eyebrow="Support that matters"
          title={welfare.heading}
          intro={welfare.intro.value}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {welfare.programs.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-primary-deep">
                {p.title}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    p.link.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                >
                  Learn more
                  <span aria-hidden="true">
                    {p.link.startsWith("http") ? "↗" : "→"}
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
