import bellImg from '../assets/BELL.png'

export default function SmartTriggersSection() {
  return (
    <section className="w-full py-14 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        {/* Bell icon */}
        <div className="shrink-0">
          <img src={bellImg} alt="Smart Triggers Bell" className="w-28 h-28 object-contain" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Smart Triggers
            <br />
            Smart Earnings
          </h2>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-sm">
            Get timely alerts on high interest target and fixed savings
            opportunities with insights tailored to your financial habits.
          </p>
        </div>
      </div>
    </section>
  )
}
