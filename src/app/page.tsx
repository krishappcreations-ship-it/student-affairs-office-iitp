import Link from "next/link";
import Image from "next/image";
import { site, about } from "@/lib/content";
import { About } from "@/components/sections/about";
import { VisionMission } from "@/components/sections/vision-mission";
import { Responsibilities } from "@/components/sections/responsibilities";
import { Welfare } from "@/components/sections/welfare";
import { CampusLife } from "@/components/sections/campus-life";
import { Initiatives } from "@/components/sections/initiatives";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-primary-deep text-white">
        {/* Layered atmosphere: deep-blue base + radial glow + faint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 80% at 85% 10%, rgba(240,128,32,0.22), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(15,92,153,0.55), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {site.parentInstitute.value}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Student Affairs Office
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/85">
              {site.tagline.value}
            </p>
            <p className="mt-2 text-sm text-white/65">{site.motto.value}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources"
                className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#ffa24d]"
              >
                Find Support &amp; Resources
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact the Office
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-lg">
            <Image
              src="/iitp/section/live-events.jpeg"
              alt="Students at an IIT Patna campus event"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/15">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-white/10 px-4 sm:px-6 md:grid-cols-4 md:divide-x">
            {about.stats.slice(0, 4).map((s) => (
              <div key={s.label} className="px-2 py-5 text-center md:py-6">
                <dd className="font-serif text-lg font-semibold leading-tight text-accent sm:text-xl md:text-2xl">
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs text-white/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <About />
      <VisionMission />
      <Responsibilities />
      <Welfare />
      <CampusLife />
      <Initiatives />
    </>
  );
}
