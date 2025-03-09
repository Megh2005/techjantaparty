import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Brain, Database, Smartphone, Globe, Atom } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  shadowColor: string
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
      icon: <Globe className="w-12 h-12" />,
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications designed to engage users and solve real-world problems.",
      icon: <Smartphone className="w-12 h-12" />,
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that leverage artificial intelligence and machine learning to automate processes and gain insights.",
      icon: <Brain className="w-12 h-12" />,
      color: "neon-green",
      shadowColor: "rgba(0,255,170,0.8)",
    },
    {
      id: 4,
      title: "Blockchain Development",
      description:
        "Decentralized applications and smart contracts built on blockchain technology for secure and transparent transactions.",
      icon: <Database className="w-12 h-12" />,
      color: "neon-yellow",
      shadowColor: "rgba(255,255,0,0.8)",
    },
    {
      id: 5,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address specific business challenges and improve operational efficiency.",
      icon: <Code className="w-12 h-12" />,
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
    },
    {
      id: 6,
      title: "Designing & Branding",
      description:
        "Creative design services that help businesses establish a strong brand identity and connect with their audience.",
      icon: <Atom className="w-12 h-12" />,
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-blue">OUR SERVICES</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          We offer a wide range of technology services to help businesses and organizations solve complex problems and
          achieve their goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-gray-900 p-8 border-4 border-${service.color} shadow-[8px_8px_0px_0px_${service.shadowColor}] hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform`}
            >
              <div className={`text-${service.color} mb-6`}>{service.icon}</div>
              <h2 className={`text-2xl font-bold mb-4 text-${service.color}`}>{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-10 border-4 border-neon-green shadow-[8px_8px_0px_0px_rgba(0,255,170,0.8)] mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neon-green">Our Approach</h2>
          <p className="text-xl text-gray-300 mb-8">
            We follow a collaborative and iterative approach to ensure that our solutions meet your specific needs and
            exceed your expectations. Our process includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="inline-block w-8 h-8 bg-neon-green mr-4 flex-shrink-0 mt-1"></span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Discovery</h3>
                <p className="text-gray-300">
                  We begin by understanding your business, goals, and challenges to identify the right solution.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-block w-8 h-8 bg-neon-green mr-4 flex-shrink-0 mt-1"></span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Pricing</h3>
                <p className="text-gray-300">
                  We provide transparent pricing and timelines to ensure that you know exactly what to expect.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-block w-8 h-8 bg-neon-green mr-4 flex-shrink-0 mt-1"></span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Development</h3>
                <p className="text-gray-300">
                  Our team of experts builds your solution using the latest technologies and best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-block w-8 h-8 bg-neon-green mr-4 flex-shrink-0 mt-1"></span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Testing & Deployment</h3>
                <p className="text-gray-300">
                  We rigorously test and deploy your solution, ensuring it meets the highest standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-yellow">READY TO GET STARTED?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Contact us today to discuss your project and how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="bg-neon-yellow hover:bg-neon-yellow/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

