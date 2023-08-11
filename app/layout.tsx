import './globals.css'
import type { Metadata } from 'next'
import metajson from '../data/meta.json'

export const metadata: Metadata = metajson;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-[80vh] bg-gray-100 text-black-readable">
          <div className="mx-auto max-w-4xl px-2">{children}</div>
    </main>
  )
}
