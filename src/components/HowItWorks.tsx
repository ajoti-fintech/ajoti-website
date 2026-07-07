import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '1',
    label: 'Step One',
    title: 'Create a Circle',
    description:
      'Set up your savings group in minutes. Define the contribution amount, payout frequency, and rotation order that works for your community.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    accent: 'from-teal-400 to-emerald-400',
    glow: 'bg-teal-400/20',
  },
  {
    number: '2',
    label: 'Step Two',
    title: 'Invite Members',
    description:
      'Add trusted friends, family, or colleagues. Each member commits to the schedule and accountability is built in from day one.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    accent: 'from-emerald-400 to-cyan-400',
    glow: 'bg-emerald-400/20',
  },
  {
    number: '3',
    label: 'Step Three',
    title: 'Save & Collect',
    description:
      'Contributions are tracked transparently. When your turn arrives, receive your full payout and watch your financial trust score grow.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: 'from-cyan-400 to-teal-300',
    glow: 'bg-cyan-400/20',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} text-center mb-20`}>
          <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-emerald-400" />
            Simple Process
            <span className="w-6 h-px bg-emerald-400" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            How Ajoti Works
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            From setup to payout — get your community saving together in three powerful steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Connecting dashes — desktop only */}
          <div className="hidden md:flex absolute top-12 left-[33%] right-[33%] items-center justify-center z-0 pointer-events-none">
            <div className="w-full h-px border-t-2 border-dashed border-teal-700" />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in-up delay-${i + 1} ${inView ? 'visible' : ''} relative z-10 group`}
            >
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-teal-500/40 transition-all duration-300 overflow-hidden h-full">
                {/* Big decorative number */}
                <span className="absolute -top-4 -right-2 text-[100px] font-extrabold text-white/[0.04] leading-none select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Glow blob */}
                <div className={`absolute top-0 left-0 w-32 h-32 ${step.glow} rounded-full blur-2xl pointer-events-none opacity-60`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Step label */}
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">
                  {step.label}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`fade-in-up delay-3 ${inView ? 'visible' : ''} mt-14 flex flex-col sm:flex-row items-center justify-center gap-4`}>
          <a
            href="https://user.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-slate-900 text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            Start Your Circle →
          </a>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            See FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}
