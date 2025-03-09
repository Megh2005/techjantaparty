import type React from "react"
import { Trophy, Award, Star } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  year: string
  icon: React.ReactNode
  color: string
  shadowColor: string
}

export default function AchievementsPage() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Best AI Innovation Award",
      description:
        "Recognized for our groundbreaking AI-powered healthcare assistant that has improved patient care and outcomes.",
      year: "2024",
      icon: <Trophy className="w-12 h-12" />,
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
    },
    {
      id: 2,
      title: "Web3 Excellence Award",
      description:
        "Honored for our innovative blockchain solution that has revolutionized supply chain transparency and trust.",
      year: "2023",
      icon: <Award className="w-12 h-12" />,
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
    },
    {
      id: 3,
      title: "Top Tech Startup",
      description: "Named one of the top emerging tech startups making a significant impact in the industry.",
      year: "2023",
      icon: <Star className="w-12 h-12" />,
      color: "neon-green",
      shadowColor: "rgba(0,255,170,0.8)",
    },
    {
      id: 4,
      title: "Sustainability Tech Champion",
      description:
        "Awarded for our commitment to developing technology solutions that promote sustainability and environmental responsibility.",
      year: "2022",
      icon: <Trophy className="w-12 h-12" />,
      color: "neon-yellow",
      shadowColor: "rgba(255,255,0,0.8)",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-pink">ACHIEVEMENTS</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          We're proud of the recognition our work has received. Here are some of our notable achievements and awards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-gray-900 p-8 border-4 border-${achievement.color} shadow-[8px_8px_0px_0px_${achievement.shadowColor}]`}
            >
              <div className="flex items-start">
                <div className={`text-${achievement.color} mr-6`}>{achievement.icon}</div>
                <div>
                  <div className="flex items-center mb-4">
                    <span className={`inline-block px-4 py-1 text-black font-bold bg-${achievement.color} mr-4`}>
                      {achievement.year}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{achievement.title}</h2>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-10 border-4 border-neon-green shadow-[8px_8px_0px_0px_rgba(0,255,170,0.8)] mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neon-green">Our Impact</h2>
          <p className="text-xl text-gray-300 mb-8">
            Beyond awards and recognition, we measure our success by the real-world impact of our solutions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-neon-pink mb-4">10+</div>
              <p className="text-gray-300">Successful Projects Delivered</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-black text-neon-blue mb-4">5,000+</div>
              <p className="text-gray-300">Users Impacted</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-black text-neon-yellow mb-4">15+</div>
              <p className="text-gray-300">Industry Partners</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-blue">JOIN OUR SUCCESS STORY</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Partner with us to create award-winning solutions that make a real difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-neon-blue hover:bg-neon-blue/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
          >
            Work With Us
          </a>
        </div>
      </div>
    </main>
  )
}

