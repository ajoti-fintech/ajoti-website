const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trusted & Fully Licensed',
    description:
      'We operates with full compliance across all relevant regulatory bodies, ensuring our services meet the highest legal ethical standards',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Integrity at the Core',
    description:
      "At Ajoti, we uphold integrity in every aspect of our operations; from internal practices to client relationship. We believe in doing what's right, not just what's easy.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation & Accountability',
    description:
      'We strive to lead with innovation while maintaining responsible development practices.',
  },
]

export default function WhySection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">Why Ajoti?</h2>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* App store buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          {/* Google Play */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.4 1.4 247.2-247v-5.8L47 0zm425.6 218.1L380.4 170 320 230.6l60.4 60.4 72.2-41.9c20.5-11.9 20.5-31.3.8-31.0zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 814 1000" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 270.1-317.3 70.6 0 129.2 46.4 173.4 46.4 42.7 0 109.2-49 192.5-49 31.3 0 113.1 2.9 175.8 70.6zm-171.2-53.2c-40.2-47.3-97.5-78.5-159.8-78.5-66.1 0-128.1 43.5-168.6 43.5-41.8 0-103.2-47-168.1-47C148.9 205.7 0 313.5 0 511.8c0 114.3 44.9 236.9 104.2 315.4 50.9 67.1 97.7 120.8 166.5 120.8 68.3 0 98.6-44 170.8-44 71.7 0 102.7 44 172 44 69 0 117.7-56.8 165.2-121.6C826.9 757.4 814 698.4 814 694.1zM568.2 98.6c28.1-33.9 48.1-81.3 48.1-128.7 0-6.4-.6-12.9-1.9-18.1-45.5 1.9-99.4 30.4-131.1 68.3-25.5 30.4-49 77.2-49 125.2 0 7.1 1.3 14.2 1.9 16.5 2.6.6 6.5 1.3 10.3 1.3 40.8 0 90.9-27.2 121.7-64.5z" />
            </svg>
            <div className="text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
