"use client";
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa"
import { Button } from "./ui/button";
import { Mail, Send } from "lucide-react";
import { Input } from "./ui/input";

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success(`Subscribed With Email: ${email}`)
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 10000)
    }
  }
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-neon-pink">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-black text-neon-pink mb-2">TECH JANTA PARTY</h2>
            <p className="text-gray-300 max-w-md">Building innovative solutions for real-world challenges.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-neon-yellow mb-4">Subscribe to Updates</h3>
            {isSubscribed ? (
              <div className="bg-gray-800 p-4 border-2 border-neon-green">
                <p className="text-neon-green font-bold">Thanks for subscribing!</p>
                <p className="text-gray-300">We&apos;ll keep you updated with our latest news.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-gray-300">Stay in the loop with our latest projects and events.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-gray-800 border-2 border-white text-white pl-10 rounded-none h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-neon-yellow hover:bg-neon-yellow/90 h-11 text-black font-bold rounded-none transform hover:translate-y-[-2px] hover:translate-x-[2px] transition-transform border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                  >
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
          <div className="flex space-x-6">
            <a
              href="https://youtube.com/@techjantaparty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full border-2 border-white hover:bg-neon-pink hover:text-black transition-colors duration-300"
            >
              <FaYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://instagram.com/techjantaparty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full border-2 border-white hover:bg-neon-green hover:text-black transition-colors duration-300"
            >
              <FaInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/skillable_tjp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full border-2 border-white hover:bg-[#1DA1F2] hover:text-black transition-colors duration-300"
            >
              <FaTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/techjantaparty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full border-2 border-white hover:bg-neon-yellow hover:text-black transition-colors duration-300"
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Tech Janta Party. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

