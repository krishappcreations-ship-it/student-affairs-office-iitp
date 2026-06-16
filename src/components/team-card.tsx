import Image from "next/image";
import type { TeamMember } from "@/lib/content";

const HONORIFICS = new Set(["prof.", "dr.", "mr.", "ms.", "mrs.", "student"]);

function initials(name: string): string {
  const words = name
    .split(/\s+/)
    .filter((w) => w && !HONORIFICS.has(w.toLowerCase()));
  const letters = words
    .map((w) => w.replace(/[^A-Za-z]/g, "").charAt(0))
    .filter(Boolean);
  return (letters[0] ?? "?") + (letters[1] ?? "");
}

const TINTS = [
  "bg-primary/10 text-primary",
  "bg-accent/20 text-accent-text",
  "bg-accent-green/10 text-accent-green",
  "bg-primary-deep/10 text-primary-deep",
];

export function TeamCard({ member }: { member: TeamMember }) {
  const hasPhoto = !member.photo.toLowerCase().includes("placeholder");
  const tint = TINTS[(member.order - 1) % TINTS.length];

  return (
    <article className="flex flex-col items-center rounded-2xl border border-line bg-card p-6 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-line bg-surface-alt">
        {hasPhoto ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className={`flex h-full w-full items-center justify-center font-serif text-2xl font-semibold ${tint}`}
          >
            {initials(member.name)}
          </span>
        )}
      </div>

      {/* Role leads (position-agnostic) */}
      <h3 className="mt-4 font-serif text-base font-semibold text-primary-deep">
        {member.role}
      </h3>
      <p className="mt-0.5 text-sm text-muted">{member.name}</p>
      {!hasPhoto && (
        <span className="mt-1 rounded-full bg-surface-alt px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
          Placeholder
        </span>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{member.blurb}</p>
      <a
        href={`mailto:${member.email}`}
        className="mt-3 text-sm font-medium text-primary hover:text-accent break-all"
      >
        {member.email}
      </a>
    </article>
  );
}
