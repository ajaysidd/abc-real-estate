
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

metadataBase: new URL("https://www.hayanan.com")
export const metadata: Metadata = {
  metadataBase: new URL("https://hayanan.vercel.app"), // change later if you buy a domain

  title: {
    default: "HAYANAN Real Estate",
    template: "%s | HAYANAN Real Estate",
  },

  description:
    "Premium Real Estate Projects, Farm Lands, Villas and Residential Plots by HAYANAN.",

  keywords: [
    "Real Estate",
    "Plots",
    "Farm Lands",
    "Villas",
    "Apartments",
    "HAYANAN",
  ],

  authors: [
    {
      name: "HAYANAN",
    },
  ],

  openGraph: {
    title: "HAYANAN Real Estate",
    description:
      "Premium Real Estate Projects and Properties.",

    url: "https://hayanan.vercel.app",

    siteName: "HAYANAN Real Estate",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HAYANAN Real Estate",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HAYANAN Real Estate",
    description:
      "Premium Real Estate Projects and Properties.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

