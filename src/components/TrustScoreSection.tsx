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
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading + copy */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Build Your Financial Trust Score
          </h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            Ajoti introduces a trust score that reflects how consistently members contribute to
            their savings circles. By tracking participation, contribution history, and reliability,
            members can build a financial reputation within their communities.
          </p>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            A strong trust score helps members join more groups, access better opportunities, and
            build credibility in community finance.
          </p>
        </div>

        {/* Supporting points */}
        <div className="mt-12 flex flex-col gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4 items-start">
              <div className="mt-1 w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 text-base">{p.title}</h3>
                <p className="mt-1 text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
