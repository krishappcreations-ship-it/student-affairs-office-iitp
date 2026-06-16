import type { Metadata } from "next";
import { gallery } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Moments from life on the IIT Patna campus — festivals, sports, hostels, amenities and academics.",
};

export default function GalleryPage() {
  const categories = gallery.categories.map((c) => ({
    name: c.name,
    items: c.items.map((it) => ({ src: it.local, caption: it.caption })),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Campus moments"
        title={gallery.heading}
        intro={gallery.intro.value}
      />
      <GalleryClient categories={categories} />
    </div>
  );
}
