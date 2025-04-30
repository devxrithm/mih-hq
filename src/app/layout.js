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
  title: "Mind Installers Hackathon MIH 3.0",
  description: "The Mind Installers Hackathon is back with its 3rd edition, bringing together some of the brightest tech minds from all over the country for an exciting competition!",
  authors: [{ name: 'Ujjwal Katiyar aka Devrithm' }],
  keywords: ['MIH 3.0', 'Mind Installers Hackathon 3.0', 'IIMT', 'mih 3.0', 'mih', 'mind installers hackathon', 'hackathon', 'unstop'],
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
