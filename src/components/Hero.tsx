import heroImg from '../assets/Hero Page IMG.png'

export default function Hero() {
  return (
    <section className="w-full px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
      {/* Left content */}
      <div className="flex-1 max-w-md">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-600 leading-tight">
          One Platform. <br />
          Many Paths to <br />
          Financial Freedom.
        </h1>
        <p className="mt-5 text-gray-500 text-sm leading-relaxed">
          Run savings circles, manage contributions, and organize payouts with ease.
          <br className="hidden md:block" />
          Ajoti helps communities save together, stay accountable, and reach their financial goals.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://user.ajoti.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors">
            Start a Circle
          </a>
          <button className="inline-flex items-center gap-2 border border-teal-700 text-teal-700 hover:bg-teal-50 text-sm font-semibold px-6 py-3 rounded-md transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: phone mockup */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroImg}
          alt="Ajoti app screenshots"
          className="w-full max-w-sm md:max-w-md object-contain drop-shadow-xl"
        />
      </div>
    </section>
  )
}
