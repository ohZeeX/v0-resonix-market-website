import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "⚡ RESONIX MARKET - Your Digital Advantage is Here",
  description:
    "Unlock the best deals for Robux, V-Bucks, and VP! Instant delivery, 100% secure, and over 2500+ happy customers. Trusted by the community.",
  generator: "v0.app",
  openGraph: {
    title: "⚡ RESONIX MARKET - Your Digital Advantage is Here",
    description: "Unlock the best deals for Robux, V-Bucks, and VP! Instant delivery, 100% secure, and over 2500+ happy customers. Trusted by the community.",
    type: "website",
    url: "https://resonix-market.netlify.app/", // مثال، يُفضل تحديثه لرابط موقعك
    images: [{
      url: "/resonix-og-image.jpg", // يجب وضع هذه الصورة في مجلد public
      width: 960,
      height: 540,
    }],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-slate-950 text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
