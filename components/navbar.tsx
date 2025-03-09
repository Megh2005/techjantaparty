"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, Users, Mail, Briefcase, Wrench, MessageSquare, Calendar, Trophy } from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: <Home className="h-6 w-6" /> },
    { name: "About", href: "/about", icon: <Info className="h-6 w-6" /> },
    { name: "Team", href: "/team", icon: <Users className="h-6 w-6" /> },
    { name: "Projects", href: "/projects", icon: <Briefcase className="h-6 w-6" /> },
    { name: "Services", href: "/services", icon: <Wrench className="h-6 w-6" /> },
    { name: "Testimonials", href: "/testimonials", icon: <MessageSquare className="h-6 w-6" /> },
    { name: "Events", href: "/events", icon: <Calendar className="h-6 w-6" /> },
    { name: "Achievements", href: "/achievements", icon: <Trophy className="h-6 w-6" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="h-6 w-6" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "opacity-90 hover:opacity-100" : "opacity-100"
      }`}
    >
      <div className="bg-gray-900 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] rounded-full px-4 py-3">
        <ul className="flex items-center space-x-1 md:space-x-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center justify-center p-2 md:p-3 rounded-full transition-all duration-300 ${
                    isActive ? "bg-neon-pink text-black" : "text-white hover:bg-gray-800"
                  }`}
                >
                  {item.icon}
                  <span className="sr-only">{item.name}</span>
                </Link>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border-2 border-white">
                  {item.name}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

