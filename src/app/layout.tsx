import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sao-iitp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Student Affairs Office — IIT Patna",
    template: "%s · Student Affairs Office, IIT Patna",
  },
  description:
    "The Student Affairs Office of IIT Patna — a single, easy front door to student support: hostels, welfare, wellness, campus life, resources and contacts.",
  openGraph: {
    title: "Student Affairs Office — IIT Patna",
    description:
      "A single, easy front door to student support at IIT Patna — hostels, welfare, wellness, campus life, resources and contacts.",
    siteName: "Student Affairs Office, IIT Patna",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Affairs Office — IIT Patna",
    description:
      "A single, easy front door to student support at IIT Patna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <a href="#content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
