import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    quote: "Ajoti helped my group stay accountable. We completed our first savings circle without a single missed contribution.",
    name: "Amaka O.",
    location: "Lagos, Nigeria",
    initial: "A",
  },
  {
    quote: "I've tried other apps but Ajoti is the first one that actually feels built for how we save in our community.",
    name: "Emeka T.",
    location: "Ibadan, Nigeria",
    initial: "E",
  },
  {
    quote: "The trust score feature is brilliant. My whole family joined because they could see who was reliable.",
    name: "Fatima B.",
    location: "Abuja, Nigeria",
    initial: "F",
  },
]

export default function TestimonialSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} text-center mb-12`}>
          <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest">Community Voices</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">What Our Members Say</h2>
          <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
            Real stories from people using Ajoti to save, grow, and build financial trust together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in-up delay-${i + 1} ${inView ? 'visible' : ''} bg-gray-50 border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md hover:border-teal-200 transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`fade-in-up delay-3 ${inView ? 'visible' : ''} mt-12 text-center`}>
          <a
            href="https://user.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md"
          >
            Join the Community →
          </a>
        </div>
      </div>
    </section>
  )
}
