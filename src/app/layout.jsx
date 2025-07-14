import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://carvestudio-site.vercel.app"),
  title: "Carve Studio – Digital Creative Agency",
  description:
    "Carve Studio is a design-forward digital agency Creating African Renaissance Experiences. Our new website is coming soon. Reach us at carvestudio10@gmail.com or call +233 20 211 5651.",
  keywords: [
    "carve studio",
    "carvestudio",
    "creative agency",
    "web design Ghana",
    "digital studio Accra",
  ],
  authors: [{ name: "CarveStudio" }],
  openGraph: {
    title: "CarveStudio – Creative Agency",
    description:
      "We design stunning websites, graphics, brands and digital experiences. Coming soon.",
    url: "https://carvestudio-site.vercel.app/",
    siteName: "CarveStudio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carve Studio logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
