import { useInView } from '../hooks/useInView'

export default function VideoSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} text-center mb-10`}>
          <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-teal-500" />
            See It In Action
            <span className="w-6 h-px bg-teal-500" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Watch How Ajoti Works
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-md mx-auto">
            See how easy it is to set up your savings circle, invite members, and track contributions — all in one place.
          </p>
        </div>

        {/* Video embed */}
        <div className={`fade-in-up delay-1 ${inView ? 'visible' : ''} relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100`}
          style={{ paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/UEvuq1fPxjE?rel=0&modestbranding=1"
            title="How Ajoti Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA below video */}
        <div className={`fade-in-up delay-2 ${inView ? 'visible' : ''} mt-10 flex flex-col sm:flex-row items-center justify-center gap-4`}>
          <a
            href="https://app.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md"
          >
            Start Your Free Trial →
          </a>
          <a
            href="https://app.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-teal-200 text-teal-700 hover:bg-teal-50 text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Create Your Group
          </a>
        </div>
      </div>
    </section>
  )
}
