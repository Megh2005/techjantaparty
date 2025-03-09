import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl items-center justify-center font-black mb-6 text-neon-pink">TECH JANTA PARTY</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300">
            A forward-thinking and dynamic group of innovators united by a shared commitment to solving impactful
            real-world challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <Button className="bg-neon-green hover:bg-neon-green/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-neon-blue hover:bg-neon-blue/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 border-4 border-neon-pink shadow-[8px_8px_0px_0px_rgba(255,105,180,0.8)]">
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">Web Development</h3>
            <p className="text-gray-300">
              Crafting responsive, user-friendly websites and web applications using cutting-edge technologies.
            </p>
          </div>
          <div className="bg-gray-900 p-8 border-4 border-neon-green shadow-[8px_8px_0px_0px_rgba(0,255,170,0.8)]">
            <h3 className="text-2xl font-bold mb-4 text-neon-green">AI Solutions</h3>
            <p className="text-gray-300">
              Leveraging artificial intelligence and machine learning to solve complex problems and create innovative
              solutions.
            </p>
          </div>
          <div className="bg-gray-900 p-8 border-4 border-neon-blue shadow-[8px_8px_0px_0px_rgba(0,191,255,0.8)]">
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">Web3 & Blockchain</h3>
            <p className="text-gray-300">
              Building decentralized applications and blockchain solutions for the future of the internet.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-neon-green">BUILDING SOLUTIONS THAT MATTER</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Through dedication, creativity, and a relentless pursuit of excellence, we are focused on creating
            meaningful, lasting change in the world.
          </p>
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button className="bg-neon-yellow hover:bg-neon-yellow/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

