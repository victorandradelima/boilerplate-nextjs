import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'

export const fontSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Boilerplate NextJS',
  description: 'Powered by @victorlima.developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
