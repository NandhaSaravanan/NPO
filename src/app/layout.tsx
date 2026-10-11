import type { Metadata, Viewport } from "next";
import { Gabarito, Public_Sans } from "next/font/google";
import { site } from "@content/site";
import { siteUrl } from "@/lib/site-url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Gabarito({ subsets: ["latin"], variable: "--font-gabarito", display: "swap" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: `${site.name}: ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#e8ece7", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  url: siteUrl,
  description: site.description,
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  areaServed: { "@type": "AdministrativeArea", name: site.region },
  address: { "@type": "PostalAddress", addressLocality: site.locality, addressRegion: site.state, addressCountry: "US" },
  ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-ui focus:bg-pine focus:px-4 focus:py-3 focus:font-semibold focus:text-paper"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
