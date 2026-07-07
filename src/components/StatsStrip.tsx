const stats = [
  { value: '500+', label: 'Early Members' },
  { value: '₦0', label: 'Hidden Fees' },
  { value: '100%', label: 'Community Owned' },
]

export default function StatsStrip() {
  return (
    <section className="w-full bg-teal-700 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-extrabold text-white">{s.value}</p>
            <p className="text-teal-200 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
