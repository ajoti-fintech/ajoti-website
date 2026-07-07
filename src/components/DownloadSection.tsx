import footer1 from '../assets/Footer 1.png'
import footer2 from '../assets/Footer 2.png'

export default function DownloadSection() {
  return (
    <section className="w-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-700 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-40 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 flex flex-col md:flex-row items-end gap-10">
        {/* Left: text + CTAs */}
        <div className="flex-1 pb-16">
          <span className="inline-block text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Ready to Save<br />
            <span className="text-emerald-300">Smarter Together?</span>
          </h2>
          <p className="mt-4 text-teal-100/80 text-sm leading-relaxed max-w-sm">
            Join the community of savers using Ajoti to run savings circles, reach goals, and build financial trust — all in one place.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://user.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-teal-900 text-sm font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Start Saving Now →
            </a>
            <a
              href="https://user.ajoti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 text-sm font-semibold px-7 py-3.5 rounded-xl transition-colors backdrop-blur-sm"
            >
              Create a Circle
            </a>
          </div>

          {/* Coming soon — app badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/60 px-4 py-2.5 rounded-xl cursor-not-allowed select-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.4 1.4 247.2-247v-5.8L47 0zm425.6 218.1L380.4 170 320 230.6l60.4 60.4 72.2-41.9c20.5-11.9 20.5-31.3.8-31.0zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="text-[9px] uppercase tracking-wide block">Coming Soon</span>
                <span className="text-xs font-semibold">Google Play</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/60 px-4 py-2.5 rounded-xl cursor-not-allowed select-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 270.1-317.3 70.6 0 129.2 46.4 173.4 46.4 42.7 0 109.2-49 192.5-49 31.3 0 113.1 2.9 175.8 70.6zm-171.2-53.2c-40.2-47.3-97.5-78.5-159.8-78.5-66.1 0-128.1 43.5-168.6 43.5-41.8 0-103.2-47-168.1-47C148.9 205.7 0 313.5 0 511.8c0 114.3 44.9 236.9 104.2 315.4 50.9 67.1 97.7 120.8 166.5 120.8 68.3 0 98.6-44 170.8-44 71.7 0 102.7 44 172 44 69 0 117.7-56.8 165.2-121.6C826.9 757.4 814 698.4 814 694.1zM568.2 98.6c28.1-33.9 48.1-81.3 48.1-128.7 0-6.4-.6-12.9-1.9-18.1-45.5 1.9-99.4 30.4-131.1 68.3-25.5 30.4-49 77.2-49 125.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.3 1.3 40.8 0 90.9-27.2 121.7-64.5z" />
              </svg>
              <div className="text-left leading-tight">
                <span className="text-[9px] uppercase tracking-wide block">Coming Soon</span>
                <span className="text-xs font-semibold">App Store</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: phone mockups */}
        <div className="flex items-end gap-4 justify-center">
          <img src={footer1} alt="Ajoti app screen 1" className="w-44 md:w-52 object-contain drop-shadow-2xl" />
          <img src={footer2} alt="Ajoti app screen 2" className="w-44 md:w-52 object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
