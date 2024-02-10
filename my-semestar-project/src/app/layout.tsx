import type { Metadata } from 'next'
import clsx from "clsx";
import { 
  Inter,
  Montserrat,
  Josefin_Sans,
  Dancing_Script,
} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import {pages} from '@/config'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-montserrat", 
})

export const metadata: Metadata = {
  title: 'Vinario | HCI project',
  description: 'Semestar project for "Human Computer Interaction" course at FESB Split.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={montserrat.className}
    >
      <body>
        <Navigation pages={pages}/>
        {children}
        <Footer pages={pages}/>
      </body>
    </html>
  )
}
