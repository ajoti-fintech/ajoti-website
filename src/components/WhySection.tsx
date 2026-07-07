import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted & Fully Licensed',
    description: 'Operating with full regulatory compliance and the highest ethical standards.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Zero Hidden Fees',
    description: 'What you see is what you get. No surprise charges, ever.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Full Transparency',
    description: 'Every contribution and payout is visible to all circle members in real time.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Community First',
    description: 'Built around the African tradition of communal saving — now digital and scalable.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Flexible Payouts',
    description: 'Set your own contribution schedule and payout rotation that fits your group.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Trust Score System',
    description: 'Build your financial reputation with every circle you complete successfully.',
  },
]

export default function WhySection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — sticky headline block */}
          <div ref={ref} className={`fade-in-left ${inView ? 'visible' : ''} lg:w-5/12 lg:sticky lg:top-28`}>
            <span className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-6 h-px bg-teal-500" />
              Why Ajoti
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Saving together<br />
              <span className="text-teal-600">is better,</span><br />
              smarter.
            </h2>

            <p className="mt-5 text-gray-500 text-base leading-relaxed max-w-sm">
              Ajoti was built on the principle that communities have always known how to grow wealth together — we just gave it a digital home.
            </p>

            {/* Trust signal */}
            <div className="mt-8 p-5 bg-teal-50 border border-teal-100 rounded-2xl">
              <p className="text-teal-800 text-sm font-semibold leading-snug">
                "Designed for African communities, trusted by families across 3 countries."
              </p>
              <p className="mt-2 text-teal-600 text-xs font-medium">— The Ajoti Team</p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://user.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md"
              >
                Join the Community →
              </a>
              <a
                href="https://user.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-teal-200 text-teal-700 hover:bg-teal-50 text-sm font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Create an Account
              </a>
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`fade-in-up delay-${Math.min(i + 1, 3)} ${inView ? 'visible' : ''} group flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md hover:bg-teal-50/40 transition-all duration-300`}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
