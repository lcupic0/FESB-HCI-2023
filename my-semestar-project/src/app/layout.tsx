import type { Metadata } from 'next'
import clsx from "clsx";
import { 
  Inter,
  Montserrat,
} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import {pages} from '@/config'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Vinario | HCI project',
  description: 'Semestar project for "Human Computer Interaction" course at FESB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        inter.variable,
        montserrat.variable
      )}
    >
      <body className={montserrat.className}>
        <Navigation pages={pages}/>
        {children}
        <Footer pages={pages}/>
      </body>
    </html>
  )
}
