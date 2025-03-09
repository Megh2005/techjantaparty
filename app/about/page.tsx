export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-neon-blue">ABOUT US</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900 p-8 border-4 border-neon-pink shadow-[8px_8px_0px_0px_rgba(255,105,180,0.8)]">
            <h2 className="text-3xl font-bold mb-6 text-neon-pink">Our Mission</h2>
            <p className="text-xl text-gray-300">
              Team Tech Janta Party is driven by a deep sense of purpose. We work collaboratively to craft solutions
              that address pressing societal needs, empower individuals, and improve everyday life.
            </p>
          </div>

          <div className="bg-gray-900 p-8 border-4 border-neon-green shadow-[8px_8px_0px_0px_rgba(0,255,170,0.8)]">
            <h2 className="text-3xl font-bold mb-6 text-neon-green">Our Vision</h2>
            <p className="text-xl text-gray-300">
              Whether we are designing intuitive mobile apps, harnessing the potential of AI/ML, or pioneering in
              decentralized technologies, our vision is to create meaningful, lasting change in the world.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-10 border-4 border-neon-yellow shadow-[8px_8px_0px_0px_rgba(255,255,0,0.8)] mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neon-yellow">Our Expertise</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team has diverse expertise spans a wide array of cutting-edge technologies, including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-pink mr-3"></span>
              Web Development
            </li>
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-green mr-3"></span>
              Mobile Applications
            </li>
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-blue mr-3"></span>
              Artificial Intelligence
            </li>
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-yellow mr-3"></span>
              Machine Learning
            </li>
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-pink mr-3"></span>
              Web3 Technologies
            </li>
            <li className="flex items-center text-gray-300">
              <span className="inline-block w-4 h-4 bg-neon-green mr-3"></span>
              Blockchain Development
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-neon-blue">JOIN US ON OUR JOURNEY</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            We are always looking for like-minded individuals who share our passion for technology and making a
            difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-neon-blue hover:bg-neon-blue/90 text-black font-bold text-lg py-6 px-8 rounded-none transform hover:translate-y-[-4px] hover:translate-x-[4px] transition-transform border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
          >
            Get In Touch With Us
          </a>
        </div>
      </div>
    </main>
  )
}

