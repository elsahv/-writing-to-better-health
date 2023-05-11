import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
const today = new Date();

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
<header className="flex justify-center border border-gray-500 pt-[15px] pb-3 sticky top-0 w-full bg-white">
  <div className="flex flex-col">
          <Link href="/">
          <h1 className="text-3xl p-1">Writing to Better Health</h1>
          </Link>
           <nav className="flex justify-around mx-[55px]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
           </nav>
           </div>
        </header>
        <main>{children}</main>
        <footer className="flex justify-center p-3 border border-t-slate-700  ">
      Writing to Better Health | Copyright &copy; {today.getFullYear()}
    </footer>
        </body>
        
    </html>
  )
} 