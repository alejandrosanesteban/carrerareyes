import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carrera de Reyes - San Esteban de Pravia',
  description: 'Carrera popular celebrar el Día de Reyes (6 de enero) en San Esteban de Pravia, Muros de Nalón, Asturias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans bg-dark text-white antialiased">{children}</body>
    </html>
  )
}