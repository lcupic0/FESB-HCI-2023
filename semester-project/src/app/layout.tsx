import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Semestar Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul className='flex justify-center gap-10 bg-gray-100 p-4'>
            <li>
              <Link href="/">Početna</Link>
            </li>
            <li>
              <Link href="/vina">Vina</Link>
            </li>
            <li>
              <Link href="/gastronomija">Gastronomija</Link>
            </li>
            <li>
              <Link href="/obavijesti">Obavijesti</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link href="/panel">Admin Panel</Link>
            </li>
          </ul>
        </nav>  
        {children}
      </body>
    </html>
  )
}
