import type { Metadata } from 'next'
import {Montserrat} from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Ease Up',
  description: 'Connecting You with Skilled Handymen for All Your Home Improvement Needs',
}
const montserrat = Montserrat({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}