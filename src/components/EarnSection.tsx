const cards = [
  {
    title: 'Structured Savings Circles',
    description:
      'Create organized savings groups where members contribute regularly and receive payouts in a fair rotation.',
    link: 'Learn about savings circles',
  },
  {
    title: 'Transparent Contributions',
    description:
      'Track every contribution and payout clearly so every member stays informed and accountable.',
    link: 'Learn how contributions work',
  },
  {
    title: 'Flexible Payout System',
    description:
      'Set payout schedules that work for your group and manage them easily from one place.',
    link: 'Learn about payouts',
  },
]

export default function EarnSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">Tools for Community Finance</h2>
        <p className="mt-2 text-gray-500 text-sm">
          Ajoti makes it easier to organize savings groups, track contributions, and manage payouts with clarity and trust.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              <h3 className="text-teal-600 font-semibold text-base">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium hover:text-teal-800 transition-colors"
              >
                → {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
