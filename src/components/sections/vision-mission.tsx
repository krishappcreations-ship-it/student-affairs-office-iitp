import { visionMission } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function VisionMission() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="scroll-mt-20 border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading
          id="vision-heading"
          eyebrow="Our purpose"
          title="Vision & Mission"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div className="rounded-2xl border border-line bg-primary-deep p-8 text-white">
            <h3 className="font-serif text-xl font-semibold text-white">
              Vision
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-white/90">
              {visionMission.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-line bg-card p-8">
            <h3 className="font-serif text-xl font-semibold text-primary-deep">
              Mission
            </h3>
            <ul className="mt-3 space-y-2.5">
              {visionMission.mission.map((m, i) => (
                <li key={i} className="flex gap-3 text-ink/90">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visionMission.values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-line bg-surface-alt p-5"
            >
              <h4 className="font-serif text-lg font-semibold text-primary">
                {v.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
