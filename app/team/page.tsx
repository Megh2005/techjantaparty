import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  color: string
  shadowColor: string
  avatar?: string
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Subham Mani",
      role: "Web Development Lead",
      bio: "Passionate about creating intuitive user experiences and pushing the boundaries of web technologies.",
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
      avatar: "https://res.cloudinary.com/djyk287ep/image/upload/c_crop,ar_1:1/v1731437000/IMG_20241027_201713_aifgoh.jpg"
    },
    {
      id: 2,
      name: "Sayambar Roy Chowdhury",
      role: "AI Solutions Architect",
      bio: "Expert in machine learning algorithms and artificial intelligence applications for real-world problems.",
      color: "neon-green",
      shadowColor: "rgba(0,255,170,0.8)",
      avatar: "https://res.cloudinary.com/djyk287ep/image/upload/v1731438036/161194965_g0ryoz.jpg"
    },
    {
      id: 3,
      name: "Ronit Bose",
      role: "Web3 & Blockchain Developer",
      bio: "Pioneering decentralized solutions and blockchain technologies for the next generation of the internet.",
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
      avatar: "https://res.cloudinary.com/djyk287ep/image/upload/v1731483900/WhatsApp_Image_2024-11-13_at_13.11.42_24400ab9_xqheys.jpg"
    },
    {
      id: 4,
      name: "Megh Deb",
      role: "Team Lead",
      bio: "Leading the charge in building innovative solutions that drive positive change in the world.",
      color: "neon-yellow",
      shadowColor: "rgba(255,255,0,0.8)",
      avatar: "https://res.cloudinary.com/dx1netxd5/image/upload/v1741498747/DSC09534_toai7v.jpg"
    },
    {
      id: 5,
      name: "Subrata Das",
      role: "Design Lead",
      bio: "Bringing ideas to life through creative design and visual storytelling that captivates audiences.",
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
      avatar: "https://res.cloudinary.com/dx1netxd5/image/upload/v1741545958/WhatsApp_Image_2025-03-10_at_00.15.25_b44d673d_m4ijj7.jpg"
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-green">OUR TEAM</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          Meet the innovative minds behind Tech Janta Party. Our small but mighty team brings diverse expertise and a
          shared passion for solving real-world problems through technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-gray-900 p-8 border-4 border-${member.color} shadow-[8px_8px_0px_0px_${member.shadowColor}]`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div
                    className={`w-full aspect-square bg-${member.color} relative overflow-hidden border-4 border-white`}
                    >
                    <Image
                      src={member.avatar || "https://res.cloudinary.com/dx1netxd5/image/upload/v1741498747/DSC09534_toai7v.jpg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className={`text-2xl font-bold mb-2 text-${member.color}`}>{member.name}</h2>
                  <p className="text-xl font-semibold mb-4 text-white">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-pink">WANT TO JOIN OUR TEAM?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            We are re always on the lookout for talented individuals who share our vision and passion.
          </p>
          <a
            href="/contact"
            className="inline-block bg-neon-pink hover:bg-neon-pink/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  )
}

