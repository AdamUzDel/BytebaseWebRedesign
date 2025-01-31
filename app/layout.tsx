import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BytebaseTech - Leading Web Design & Development in Uganda',
  description: 'ByteBase Technologies specializes in custom software development, web applications, and digital solutions. Transform your business with our innovative tech solutions in Uganda.',
  keywords: [
    "ByteBase",
    "ByteBase Technologies",
    "software development Uganda",
    "BytebaseTech",
    "Web Design Uganda",
    "Web Development Uganda",
    "Digital Solutions Uganda",
    "BytebaseTechnologies",
  ],
  openGraph: {
    title: 'BytebaseTech - Leading Web Design & Development in Uganda',
    description: "Innovative web design and development solutions by BytebaseTech, Uganda's premier digital agency.",
    url: 'https://bytebasetech.com',
    siteName: 'ByteBase Technologies',
    images: [
      {
        url: '"https://bytebasetech.com/bytebase-technologies-logo.png',
        width: 1200,
        height: 630,
        alt: 'BytebaseTech - Web Design and Development',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BytebaseTech - Leading Web Design & Development in Uganda",
    description: "Innovative web design and development solutions by BytebaseTech, Uganda's premier digital agency.",
    images: ['"https://bytebasetech.com/bytebase-technologies-logo.png'],
  },
  alternates: {
    canonical: "https://bytebasetech.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

