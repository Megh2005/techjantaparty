"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-yellow">CONTACT US</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-neon-yellow">Get In Touch</h2>
            <p className="text-xl mb-12 text-gray-300">
              Have a question or want to work with us? Send us a message and we will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-8 h-8 text-neon-pink mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-neon-pink">Email</h3>
                  <p className="text-gray-300">info@techjantaparty.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-8 h-8 text-neon-green mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-neon-green">Phone</h3>
                  <p className="text-gray-300">+91 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-neon-blue mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-neon-blue">Location</h3>
                  <p className="text-gray-300">Tech Hub, Innovation Street, Digital City, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 border-4 border-neon-yellow shadow-[8px_8px_0px_0px_rgba(255,255,0,0.8)]">
            <h2 className="text-2xl font-bold mb-6 text-neon-yellow">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-2 border-white text-white rounded-none h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-2 border-white text-white rounded-none h-12"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-2 border-white text-white rounded-none h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-2 border-white text-white rounded-none min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="bg-neon-yellow hover:bg-neon-yellow/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] w-full"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

