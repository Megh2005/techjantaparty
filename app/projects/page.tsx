import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  category: string
  color: string
  shadowColor: string
  preview?: string
  link?: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    // {
    //   id: 1,
    //   title: "Med-o-Next",
    //   description:
    //     "An intelligent virtual assistant that helps patients manage their healthcare needs, schedule appointments, and receive personalized health recommendations.",
    //   category: "AI Solutions",
    //   color: "neon-green",
    //   shadowColor: "rgba(0,255,170,0.8)",
    //   preview: "https://res.cloudinary.com/dx1netxd5/image/upload/v1741501773/Screenshot_2025-03-09_115910_xkge7s.png",
    //   link: "https://med-o-next.vercel.app",
    // },
    {
      id: 2,
      title: "Skillable",
      description:
        "An edtech platform to upskill learners with industry-relevant courses, personalized learning paths, and hands-on projects.",
      category: "Web3 & Blockchain",
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
      preview:"https://res.cloudinary.com/dx1netxd5/image/upload/v1741502374/Screenshot_2025-03-09_120921_ed5viv.png",
      link: "https://skillable.vercel.app",
    },
    {
      id: 3,
      title: "Unmask",
      description:
        "Ask legal questions anonymously, connect with lawyers, analyze documents, and hire legal experts—all on a secure, blockchain-powered platform.",
      category: "Web Development",
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
      link: "https://unmask.live",
      preview: "https://res.cloudinary.com/dx1netxd5/image/upload/v1741502603/Screenshot_2025-03-09_121311_wenkqa.png"
    },
    {
      id: 4,
      title: "Gurudev Ecosystem",
      description:
        "An education ecosystem that enables students to learn, collaborate, and grow through a platform powered by blockchain based certification.",
      category: "Web3 & Blockchain",
      color: "neon-yellow",
      shadowColor: "rgba(255,255,0,0.8)",
      preview: "https://res.cloudinary.com/dx1netxd5/image/upload/v1741502869/Screenshot_2025-03-09_121722_nahkib.png",
      link: "https://gurudev-lovat.vercel.app",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-pink">OUR PROJECTS</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          Explore our innovative solutions that address real-world challenges and create meaningful impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-900 p-8 border-4 border-${project.color} shadow-[8px_8px_0px_0px_${project.shadowColor}]`}
            >
              <div className="mb-6 aspect-video relative object-cover overflow-hidden border-4 border-white">
                <Image
                  src={project.preview || "https://res.cloudinary.com/dx1netxd5/image/upload/v1741501773/Screenshot_2025-03-09_115910_xkge7s.png"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4">
                {/* <span className={`inline-block px-4 py-1 text-black font-bold bg-${project.color} mb-4`}>
                  {project.category}
                </span> */}
                <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>
              <Link target="_blank" href={project.link || "#"}>
                <Button
                  className={`bg-${project.color} hover:bg-${project.color}/90 text-black font-bold py-3 px-6 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]`}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-green">HAVE A PROJECT IN MIND?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            We are always excited to take on new challenges and create innovative solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-neon-green hover:bg-neon-green/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
              Let&apos;s Work Together
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

