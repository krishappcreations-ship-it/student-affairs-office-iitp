import Image from "next/image";
import { campusLife } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function CampusLife() {
  return (
    <section
      id="campus-life"
      aria-labelledby="campus-life-heading"
      className="scroll-mt-20 border-b border-line bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="campus-life-heading"
          eyebrow="Beyond the classroom"
          title={campusLife.heading}
          intro={campusLife.intro.value}
        />

        {/* Fests — bento: one feature + stacked supporting cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {campusLife.fests[0] && (
            <article className="overflow-hidden rounded-2xl border border-line bg-surface-alt md:col-span-2">
              <div className="relative aspect-[16/9]">
                <Image
                  src={campusLife.fests[0].image}
                  alt={`${campusLife.fests[0].name} — ${campusLife.fests[0].type}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-2xl font-semibold text-primary-deep">
                    {campusLife.fests[0].name}
                  </h3>
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-xs font-semibold text-accent-text">
                    {campusLife.fests[0].type}
                  </span>
                </div>
                <p className="mt-2 text-muted">{campusLife.fests[0].blurb}</p>
                {campusLife.fests[0].link && (
                  <a
                    href={campusLife.fests[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent-text"
                  >
                    Visit <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          )}

          <div className="grid gap-6">
            {campusLife.fests.slice(1).map((fest) => (
              <article
                key={fest.name}
                className="flex overflow-hidden rounded-2xl border border-line bg-surface-alt"
              >
                <div className="relative w-28 shrink-0 sm:w-32">
                  <Image
                    src={fest.image}
                    alt={`${fest.name} — ${fest.type}`}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-primary-deep">
                    {fest.name}
                  </h3>
                  <span className="text-xs font-semibold text-accent-text">
                    {fest.type}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {fest.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Clubs */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ClubGroup title="Technical Clubs" items={campusLife.clubs.technical} />
          <ClubGroup title="Cultural Clubs" items={campusLife.clubs.cultural} />
        </div>

        {/* Areas */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {campusLife.areas.map((area) => (
            <article
              key={area.title}
              className="group overflow-hidden rounded-2xl border border-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-card p-5">
                <h3 className="font-serif text-lg font-semibold text-primary-deep">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {area.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClubGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-line bg-surface-alt p-6">
      <h3 className="font-serif text-lg font-semibold text-primary-deep">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((c) => (
          <li
            key={c}
            className="rounded-full border border-line bg-card px-3 py-1 text-sm text-ink/85 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
