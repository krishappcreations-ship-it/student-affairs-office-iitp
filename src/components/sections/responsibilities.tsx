import { responsibilities } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";

export function Responsibilities() {
  return (
    <section
      id="responsibilities"
      aria-labelledby="responsibilities-heading"
      className="scroll-mt-20 border-b border-line bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="responsibilities-heading"
          eyebrow="What we do"
          title={responsibilities.heading}
          intro={responsibilities.intro.value}
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilities.items.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-line bg-surface-alt p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-primary-deep">
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
