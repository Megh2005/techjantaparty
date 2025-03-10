import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Janta Party - Innovating the Future",
  description:
    "Tech Janta Party is a forward-thinking team of innovators solving real-world challenges through cutting-edge technology and collaboration.",
  keywords:
    "Tech Janta Party, innovation, technology, startups, problem-solving, software development, AI, blockchain, Web3",
  openGraph: {
    title: "Tech Janta Party - Innovating the Future",
    description:
      "A forward-thinking team of innovators tackling real-world challenges with cutting-edge solutions.",
    type: "website",
    siteName: "Tech Janta Party",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Janta Party - Innovating the Future",
    description:
      "Join Tech Janta Party, a dynamic team focused on solving real-world problems using technology and innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tech Janta Party - Innovating the Future</title>
        <meta
          name="description"
          content="Tech Janta Party is a forward-thinking team of innovators solving real-world challenges through cutting-edge technology and collaboration."
        />
        <meta
          name="keywords"
          content="Tech Janta Party, innovation, technology, startups, problem-solving, software development, AI, blockchain, Web3"
        />
        <meta property="og:title" content="Tech Janta Party - Innovating the Future" />
        <meta
          property="og:description"
          content="A forward-thinking team of innovators tackling real-world challenges with cutting-edge solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tech Janta Party" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Janta Party - Innovating the Future" />
        <meta
          name="twitter:description"
          content="Join Tech Janta Party, a dynamic team focused on solving real-world problems using technology and innovation."
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dx1netxd5/image/upload/v1741494918/DALL_E_2025-03-09_09.01.56_-_A_vibrant_colorful_circular-shaped_logo_for_Tech_Janta_Party_._The_design_should_be_modern_and_sleek_reflecting_innovation_and_technology._It_shoul-modified_wxquhn.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dx1netxd5/image/upload/v1741494918/DALL_E_2025-03-09_09.01.56_-_A_vibrant_colorful_circular-shaped_logo_for_Tech_Janta_Party_._The_design_should_be_modern_and_sleek_reflecting_innovation_and_technology._It_shoul-modified_wxquhn.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tech Janta Party",
            url: "https://github.com/Megh2005/techjantaparty",
            description:
              "A forward-thinking team of innovators solving real-world challenges through technology and collaboration.",
            logo: "/logo.png",
            sameAs: [
              "https://github.com/Megh2005/techjantaparty"
            ],
          })}
        </script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
