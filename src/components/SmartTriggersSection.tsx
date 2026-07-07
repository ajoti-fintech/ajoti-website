import bellImg from '../assets/BELL.png'

export default function SmartTriggersSection() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-y border-teal-100">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        {/* Bell icon */}
        <div className="shrink-0 relative">
          <div className="absolute inset-0 bg-teal-200/50 rounded-full blur-2xl scale-150 pointer-events-none" />
          <img src={bellImg} alt="Smart Triggers Bell" className="relative w-36 h-36 object-contain animate-float" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <span className="text-teal-600 text-xs font-semibold uppercase tracking-widest">Never Miss a Beat</span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 leading-snug">
            Smart Triggers,<br />
            Smart Earnings
          </h2>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-sm">
            Get timely alerts on contribution deadlines, payout schedules, and savings opportunities — tailored to your financial habits so you always stay ahead.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://user.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              Enable Smart Alerts →
            </a>
            <a
              href="https://user.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-teal-300 text-teal-700 hover:bg-teal-50 text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
