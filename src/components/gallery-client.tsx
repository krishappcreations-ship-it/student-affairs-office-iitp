"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface GalleryView {
  src: string;
  caption: string;
  category: string;
}

interface GalleryClientProps {
  categories: { name: string; items: { src: string; caption: string }[] }[];
}

export function GalleryClient({ categories }: GalleryClientProps) {
  // Flatten for prev/next navigation across the whole gallery.
  const flat: GalleryView[] = categories.flatMap((c) =>
    c.items.map((it) => ({ ...it, category: c.name })),
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % flat.length)),
    [flat.length],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + flat.length) % flat.length,
      ),
    [flat.length],
  );

  const open = (index: number) => {
    lastFocused.current = document.activeElement as HTMLElement;
    setOpenIndex(index);
  };

  // Keyboard + focus management while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button",
        );
        if (!focusables || focusables.length === 0) return;
        const list = Array.from(focusables);
        const first = list[0];
        const lastEl = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    // Focus the dialog's close button on open.
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      window.clearTimeout(t);
      lastFocused.current?.focus();
    };
  }, [openIndex, close, next, prev]);

  return (
    <>
      {categories.map((c, ci) => {
        // Pure base offset into the flat list (no render-time mutation).
        const base = categories
          .slice(0, ci)
          .reduce((sum, prev) => sum + prev.items.length, 0);
        return (
        <section key={c.name} aria-labelledby={`cat-${c.name}`} className="mt-10">
          <h2
            id={`cat-${c.name}`}
            className="font-serif text-xl font-semibold text-primary-deep"
          >
            {c.name}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {c.items.map((it, ii) => {
              const idx = base + ii;
              return (
                <li key={it.src}>
                  <button
                    type="button"
                    onClick={() => open(idx)}
                    className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-line"
                    aria-label={`View image: ${it.caption}`}
                  >
                    <Image
                      src={it.src}
                      alt={it.caption}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        );
      })}

      {openIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${flat[openIndex].caption}`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-4 sm:p-8"
        >
          <div className="flex items-center justify-between text-white">
            <p className="text-sm text-white/70">
              {openIndex + 1} of {flat.length} · {flat[openIndex].category}
            </p>
            <button
              type="button"
              onClick={close}
              className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-accent"
            >
              Close ✕
            </button>
          </div>

          <figure className="relative flex flex-1 flex-col items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src={flat[openIndex].src}
                alt={flat[openIndex].caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {flat[openIndex].caption}
            </figcaption>
          </figure>

          <div className="mt-2 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              aria-label="Previous image"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              aria-label="Next image"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
