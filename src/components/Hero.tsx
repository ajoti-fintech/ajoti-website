import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/Hero Page IMG.png'

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add('visible')
      setTimeout(() => rightRef.current?.classList.add('visible'), 150)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-600">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div ref={leftRef} className="fade-in-up flex-1 max-w-lg">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Community-First Finance
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            One Platform. <br />
            Many Paths to <br />
            <span className="text-emerald-300">Financial Freedom.</span>
          </h1>

          <p className="mt-5 text-white/70 text-sm leading-relaxed max-w-sm">
            Run savings circles, manage contributions, and organize payouts with ease.
            Ajoti helps communities save together, stay accountable, and reach their financial goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://user.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-teal-900 text-sm font-bold px-6 py-3 rounded-lg transition-colors shadow-lg"
            >
              Start a Circle →
            </a>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 text-sm font-semibold px-6 py-3 rounded-lg transition-colors backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

        </div>

        {/* Right: phone mockup */}
        <div ref={rightRef} className="fade-in-up flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-3xl scale-75 pointer-events-none" />
          <img
            src={heroImg}
            alt="Ajoti app screenshots"
            className="relative w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
