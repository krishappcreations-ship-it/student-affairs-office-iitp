import Link from "next/link";
import { site, resources, emergency } from "@/lib/content";

export function SiteFooter() {
  const quickLinks = site.nav.items;
  const officeLinks =
    resources.groups.find((g) => g.name === "Residential & Daily Life")?.items ??
    [];

  return (
    <footer className="mt-16 bg-primary-deep text-white/90">
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-accent via-accent/50 to-primary"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="font-serif text-lg font-semibold text-white">
              Student Affairs Office
            </p>
            <p className="mt-1 text-sm text-white/70">
              {site.parentInstitute.value}
            </p>
            <p className="mt-3 text-sm text-white/70">{site.motto.value}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Quick Links
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {officeLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 hover:text-accent"
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Emergency contacts */}
          <section aria-labelledby="footer-emergency">
            <h2
              id="footer-emergency"
              className="text-sm font-semibold uppercase tracking-wide text-accent-light"
            >
              {emergency.heading}
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {emergency.contacts.map((c) => (
                <li key={c.label} className="flex justify-between gap-3">
                  <span className="text-white/75">{c.label}</span>
                  <a
                    href={`tel:${c.value.replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-white hover:text-accent"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-white/70">
              Numbers marked as placeholders are dummy data for this project.
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Student Affairs Office, IIT Patna.
            Demo site — contains dummy data (DeployIITP).
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
