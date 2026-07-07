const points = [
  {
    title: 'Consistency Tracking',
    description:
      'Your trust score grows as you contribute regularly and fulfill your commitments.',
  },
  {
    title: 'Transparent Reputation',
    description:
      'Group members can see reliability indicators that promote accountability and trust.',
  },
  {
    title: 'Better Opportunities',
    description:
      'Members with strong trust scores can access larger circles and more flexible payout options.',
  },
]

export default function TrustScoreSection() {
  return (
    <section className="w-full py-10 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Heading + copy */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Build Your Financial Trust Score
          </h2>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Ajoti tracks your contribution history and reliability to build a financial reputation
            within your community. A strong trust score unlocks bigger circles and better opportunities.
          </p>
        </div>

        {/* Supporting points */}
        <div className="md:w-1/2 flex flex-col gap-5">
          {points.map((p) => (
            <div key={p.title} className="flex gap-3 items-start">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{p.title}</h3>
                <p className="mt-0.5 text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
