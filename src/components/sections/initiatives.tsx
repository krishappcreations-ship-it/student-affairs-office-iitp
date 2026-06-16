import { initiatives } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-heading"
      className="scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="initiatives-heading"
          eyebrow="Programs we run"
          title={initiatives.heading}
          intro={initiatives.intro}
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.items.map((item) => (
            <li
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {item.year}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-primary-deep">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
