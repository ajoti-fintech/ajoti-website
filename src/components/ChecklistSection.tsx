import { useInView } from '../hooks/useInView'

const items = [
  'Track contributions automatically.',
  'Know who has paid at a glance.',
  'Record payouts with confidence.',
  'Give members access to their own savings history.',
  'Keep every transaction securely organised.',
  'Reduce the time spent answering routine questions.',
]

export default function ChecklistSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left — headline block */}
        <div ref={ref} className={`fade-in-left ${inView ? 'visible' : ''} lg:w-5/12`}>
          <span className="inline-block text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-5">
            Built for the Way Nigerians Save
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Everything You Need.<br />
            <span className="text-emerald-300">Nothing You Don't.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-base leading-relaxed">
            You don't need to change your Ajo, convince your members to learn a new system, or abandon the traditions that have brought your community together.
          </p>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Ajoti simply gives you better tools to manage what you're already doing — whether you run an Ajo, Esusu, Adashe or cooperative society.
          </p>

          <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-white text-sm font-semibold leading-snug">Simple for your members.</p>
            <p className="text-white text-sm font-semibold mt-1">Powerful for administrators.</p>
            <p className="text-emerald-400 text-sm font-semibold mt-1">Built for the way Nigerians save.</p>
          </div>
        </div>

        {/* Right — checklist */}
        <div className={`fade-in-right ${inView ? 'visible' : ''} lg:w-7/12`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={item}
                className={`fade-in-up delay-${Math.min(i + 1, 3)} ${inView ? 'visible' : ''} flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-teal-500/30 transition-all duration-300`}
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Create Your Group →
            </a>
            <a
              href="https://app.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
