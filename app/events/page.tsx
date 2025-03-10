import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  isVirtual: boolean
  isUpcoming: boolean
  color: string
  shadowColor: string
  registrationOpen: boolean
  link: string
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      title: "Chess-a-thon",
      description:
        "Join us for an exciting virtual chess tournament! Test your skills against other tech enthusiasts and win amazing prizes. All skill levels are welcome.",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM IST",
      location: "Virtual Event",
      isVirtual: true,
      isUpcoming: true,
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
      registrationOpen: true,
      link: "https://lu.ma/km3mlr2f"
    },
    {
      id: 2,
      title: "Binary Hackathon",
      description:
        "An in-person hackathon where you can build and showcase your projects. Network with other developers, learn new skills, and win exciting prizes.",
      date: "March 29, 2025",
      time: "9:00 AM  IST",
      location: "Kalyani Govt. Engineering College, Kalyani, West Bengal",
      isVirtual: false,
      isUpcoming: true,
      color: "neon-pink",
      link: "https://www.hackquest.io/hackathons/BINARY?utm=zig_shadow",
      shadowColor: "rgba(255,105,180,0.8)",
      registrationOpen: true,
    },
    {
      id: 3,
      title: "Hack Tropica Hackathon",
      description:
        "An in-person hackathon where you can build and showcase your projects. Network with other developers, learn new skills, and win exciting prizes.",
      date: "April 04, 2025",
      time: "10:00 AM  IST",
      location: "Asansol Engineering College, Asansol, West Bengal",
      isVirtual: false,
      isUpcoming: true,
      color: "neon-green",
      link: "https://hacktropicatech.devfolio.co/",
      shadowColor: "[#00ffaa]",
      registrationOpen: true,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-yellow">EVENTS</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          Join us at our upcoming events to learn, connect, and collaborate with like-minded tech enthusiasts.
        </p>

        <div className="space-y-12 mb-16">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-gray-900 p-8 border-4 border-${event.color} shadow-[8px_8px_0px_0px_${event.shadowColor}]`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-4">
                    <span className={`inline-block px-4 py-1 text-black font-bold bg-${event.color} mr-4`}>
                      {event.isUpcoming ? "Upcoming" : "Past Event"}
                    </span>
                    {event.isVirtual && (
                      <span className="inline-block px-4 py-1 bg-gray-700 text-white font-bold">Virtual</span>
                    )}
                  </div>

                  <h2 className={`text-3xl font-bold mb-4 text-${event.color}`}>{event.title}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{event.description}</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <Calendar className={`w-5 h-5 text-${event.color} mr-3`} />
                      <span className="text-gray-300">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className={`w-5 h-5 text-${event.color} mr-3`} />
                      <span className="text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className={`w-5 h-5 text-${event.color} mr-3`} />
                      <span className="text-gray-300">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  {event.registrationOpen ? (
                    <Link target="_blank" href={event.link}>
                      <Button
                      className={`bg-${event.color} hover:bg-${event.color}/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)] w-full`}
                      >
                      Register Now
                      </Button>
                    </Link>
                  ) : (
                    <div className="text-center">
                      <p className="text-gray-300 mb-4">Registration opening soon</p>
                      <Button
                        className="bg-gray-700 text-white font-bold text-lg py-6 px-8 rounded-none border-4 border-white w-full cursor-not-allowed opacity-70"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-green">WANT TO STAY UPDATED?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Subscribe to our newsletter to receive updates about our upcoming events and activities.
          </p>
          <Link href="#footer">
            <Button className="bg-neon-green hover:bg-neon-green/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

