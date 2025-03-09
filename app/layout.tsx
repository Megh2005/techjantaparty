import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tech Janta Party",
  description: "A forward-thinking team of innovators solving real-world challenges",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dx1netxd5/image/upload/v1741494918/DALL_E_2025-03-09_09.01.56_-_A_vibrant_colorful_circular-shaped_logo_for_Tech_Janta_Party_._The_design_should_be_modern_and_sleek_reflecting_innovation_and_technology._It_shoul-modified_wxquhn.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dx1netxd5/image/upload/v1741494918/DALL_E_2025-03-09_09.01.56_-_A_vibrant_colorful_circular-shaped_logo_for_Tech_Janta_Party_._The_design_should_be_modern_and_sleek_reflecting_innovation_and_technology._It_shoul-modified_wxquhn.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

