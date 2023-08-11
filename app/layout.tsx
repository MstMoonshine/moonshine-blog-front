import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import metajson from '../data/meta.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = metajson;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
