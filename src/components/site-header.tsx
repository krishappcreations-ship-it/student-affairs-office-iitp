"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.logo.institute}
            alt="IIT Patna logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-serif text-sm font-semibold text-primary-deep sm:text-base">
              Student Affairs Office
            </span>
            <span className="hidden text-xs text-muted sm:block">
              {site.parentInstitute.value}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {site.nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-surface-alt hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line bg-card lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {site.nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-ink/90 hover:bg-surface-alt hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
