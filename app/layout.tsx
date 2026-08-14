import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Michael Cretu | Composer & Solo Double Bassist, Manchester",
    template: "%s | Michael Cretu",
  },
  description: site.description,
  keywords: [
    "Michael Cretu",
    "double bass",
    "composer",
    "Manchester",
    "solo double bassist",
    "Manchester International Roots Orchestra",
    "Michael Cretu Trio",
    "The Byzantium Connection",
  ],
  openGraph: {
    title: "Michael Cretu | Composer & Solo Double Bassist, Manchester",
    description: site.description,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Cretu | Composer & Solo Double Bassist, Manchester",
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">
        <div className="grain" aria-hidden />
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
