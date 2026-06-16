import type { Metadata } from "next";
import { team } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "The people behind student support at IIT Patna — Dean of Students, wardens, counsellors and the Gymkhana.",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="People"
        title={team.heading}
        intro={team.intro.value}
      />

      <p className="mt-4 max-w-2xl rounded-lg border border-line bg-surface-alt px-4 py-3 text-sm text-muted">
        Names and photos shown are placeholders for this project. Roles reflect
        the actual student-affairs functions at IIT Patna.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member) => (
          <li key={member.role}>
            <TeamCard member={member} />
          </li>
        ))}
      </ul>
    </div>
  );
}
