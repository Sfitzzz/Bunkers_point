import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const condensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-condensed",
  display: "swap",
});

const hindi = Noto_Sans_Devanagari({
  weight: ["400", "700"],
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Bunkers Point — 24/7 Café & Hangout | Kolar Road, Bhopal",
  description:
    "The best hangout café in Kolar, Bhopal. Open 24 hours, 7 days a week. Artisan coffee, signature chai & snacks starting ₹1. Industrial bunker-themed ambiance. Dine-in, takeaway & late-night vibes.",
  keywords: [
    "bunkers point bhopal",
    "24 hour cafe bhopal",
    "cafe kolar road bhopal",
    "hangout cafe bhopal",
    "best cafe bhopal",
    "late night cafe bhopal",
    "coffee shop bhopal",
    "थे बंकर्स पॉइंट",
  ],
  openGraph: {
    title: "The Bunkers Point — 24/7 Café & Hangout | Kolar Road, Bhopal",
    description: "Open 24 hours. Industrial bunker vibes. Coffee, chai & snacks from ₹1. The best hangout café in Kolar, Bhopal.",
    type: "website",
    locale: "en_IN",
    siteName: "The Bunkers Point",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bunkers Point — 24/7 Café & Hangout",
    description: "Open 24 hours. Industrial bunker vibes. Coffee, chai & snacks from ₹1.",
  },
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#F5B700",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable} ${condensed.variable} ${hindi.variable}`}>
      <body className="bg-bunker-black text-bunker-light antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
