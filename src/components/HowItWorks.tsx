import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Create a Circle',
    description:
      'Set up your savings group in minutes. Define the contribution amount, frequency, and payout order that works for your community.',
  },
  {
    number: '02',
    title: 'Invite Members',
    description:
      'Add trusted friends, family, or colleagues. Each member commits to the schedule and builds accountability from day one.',
  },
  {
    number: '03',
    title: 'Save & Collect',
    description:
      'Contributions are tracked transparently. When your turn comes, receive your payout and watch your trust score grow.',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''} text-center mb-14`}>
          <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">How Ajoti Works</h2>
          <p className="mt-3 text-gray-500 text-sm max-w-md mx-auto">
            From setup to payout — everything in three straightforward steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`fade-in-up delay-${i + 1} ${inView ? 'visible' : ''} relative z-10 flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-full bg-teal-700 flex items-center justify-center text-white text-xl font-extrabold mb-5 shadow-md">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
