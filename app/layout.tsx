import "@/styles/global.css";
import type { Metadata } from 'next'
import metajson from '../data/meta.json'
import Header from "@/components/UI/Website/Header"
import Footer from "@/components/UI/Website/Footer"
import { Lato } from "next/font/google";
import { Noto_Sans_SC } from "next/font/google";
import { Fira_Sans } from "next/font/google";

export const metadata: Metadata = metajson;

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  adjustFontFallback: false,
});

const noto_sans_sc = Noto_Sans_SC({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-notosans",
  preload: false,
});

const fira = Fira_Sans({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${lato.variable} ${noto_sans_sc.variable} ${fira.variable}`}>
      <body>
        <Header />
        <main className="min-h-[80vh] bg-gray-100 text-black-readable">
          <div className="mx-auto max-w-4xl px-2">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
