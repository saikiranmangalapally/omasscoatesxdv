import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ScrollToTop from "@/components/ui/ScrollToTop";
import StickyMobileBar from "@/components/ui/StickyMobileBar";
import { generateLocalBusinessSchema } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const semiCursive = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-semi-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OM Associates — Trusted CA & Business Compliance Partner in Hyderabad",
    template: "%s | OM Associates",
  },
  description:
    "OM Associates is Hyderabad's leading CA and business compliance firm with 15+ years of experience. Expert ROC filing, bookkeeping, TDS, trademark registration, and legal services for 1,000+ happy clients.",
  keywords: [
    "CA firm Hyderabad",
    "compliance services Hyderabad",
    "OM Associates",
    "chartered accountant Hyderabad",
    "ROC filing",
    "bookkeeping services",
    "TDS filing",
    "trademark registration Hyderabad",
    "company annual filing",
    "business compliance India",
  ],
  authors: [{ name: "OM Associates" }],
  creator: "OM Associates",
  metadataBase: new URL("https://omassociates.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OM Associates — Trusted CA & Business Compliance Partner in Hyderabad",
    description:
      "Expert CA services, ROC compliance & legal advisory for startups, SMEs & corporates — 15 years of trust, 1000+ happy clients.",
    url: "https://omassociates.in",
    siteName: "OM Associates",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OM Associates — CA & Compliance Experts in Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OM Associates — Trusted CA & Business Compliance Partner",
    description:
      "Expert CA services, ROC compliance & legal advisory in Hyderabad — 15 years of trust.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${semiCursive.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <StickyMobileBar />
      </body>
    </html>
  );
}
