import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  openGraph: {
    title: 'MIH 3.O',
    description: 'The Mind Installers Hackathon is back with its 3rd edition, bringing together some of the brightest tech minds from all over the country for an exciting competition !',
    url: 'https://mihiimt.vercel.app/',
    siteName: 'Mind Installers Hackathon 3.0',
    authors: ['Ujjwal Katiyar aka @devrithm'],
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}

      </body>
    </html>
  );
}
