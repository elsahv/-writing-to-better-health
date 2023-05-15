
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Writing to Better Health',
  description: 'A blog about nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-gray-600">
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        
    </html>
  )
} 