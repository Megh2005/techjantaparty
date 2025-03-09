import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  quote: string
  color: string
  shadowColor: string
}

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "CEO",
      company: "InnovateX",
      quote:
        "Tech Janta Party transformed our business with their innovative AI solution. Their team's expertise and dedication to our project exceeded our expectations.",
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
    },
    {
      id: 2,
      name: "Rahul Mehta",
      position: "CTO",
      company: "FutureTech",
      quote:
        "Working with Tech Janta Party on our blockchain project was a game-changer. Their technical knowledge and ability to simplify complex concepts made the process smooth and successful.",
      color: "neon-green",
      shadowColor: "rgba(0,255,170,0.8)",
    },
    {
      id: 3,
      name: "Ananya Patel",
      position: "Marketing Director",
      company: "GrowthHub",
      quote:
        "The web application developed by Tech Janta Party has significantly improved our user engagement and conversion rates. Their attention to detail and user experience expertise is unmatched.",
      color: "neon-blue",
      shadowColor: "rgba(0,191,255,0.8)",
    },
    {
      id: 4,
      name: "Vikram Singh",
      position: "Founder",
      company: "EcoSolutions",
      quote:
        "Tech Janta Party helped us bring our sustainability tracking platform to life. Their commitment to our mission and technical excellence made them the perfect partner.",
      color: "neon-yellow",
      shadowColor: "rgba(255,255,0,0.8)",
    },
    {
      id: 5,
      name: "Neha Gupta",
      position: "Product Manager",
      company: "HealthTech",
      quote:
        "The AI healthcare assistant developed by Tech Janta Party has revolutionized how we interact with patients. Their understanding of both technology and healthcare needs was impressive.",
      color: "neon-pink",
      shadowColor: "rgba(255,105,180,0.8)",
    },
    {
      id: 6,
      name: "Arjun Reddy",
      position: "COO",
      company: "SupplyChain Pro",
      quote:
        "Tech Janta Party's blockchain solution for our supply chain has increased transparency and trust with our customers. Their team was responsive, knowledgeable, and a pleasure to work with.",
      color: "neon-green",
      shadowColor: "rgba(0,255,170,0.8)",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-green">TESTIMONIALS</h1>

        <p className="text-xl max-w-3xl mb-16 text-gray-300">
          Don&apos;t just take our word for it. Here is what our clients have to say about working with Tech Janta Party.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-gray-900 p-8 border-4 border-${testimonial.color} shadow-[8px_8px_0px_0px_${testimonial.shadowColor}]`}
            >
              <Quote className={`w-12 h-12 text-${testimonial.color} mb-6`} />
              <p className="text-gray-300 mb-8 text-lg italic">{testimonial.quote}</p>
              <div>
                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                <p className={`text-${testimonial.color}`}>
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-neon-blue">READY TO JOIN OUR SUCCESS STORIES?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            Let&apos;s work together to bring your vision to life and create solutions that make a difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-neon-blue hover:bg-neon-blue/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </main>
  )
}

