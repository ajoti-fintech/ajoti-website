const publications = [
  { name: 'The Sun', link: 'https://thesun.ng/ajoti-secures-university-of-utah-backing-partners-ibadan-digital-academy/' },
  { name: 'Tribune', link: 'https://tribuneonlineng.com/gcu-student-builds-ai-platform-to-empower-women-entrepreneurs/' },
  { name: 'Vanguard', link: 'https://www.vanguardngr.com/2026/01/ajoti-secures-university-of-utah-backing-partners-ibadan-digital-academy/' },
  { name: 'Business Day', link: 'https://businessday.ng/news/article/academy-fintech-firm-partner-to-support-inclusive-financial-innovation/' },
  { name: 'GCU', link: 'https://www.gcu.ac.uk/currentstudents/news/dba-student-osho-ademola-joel-is-developing-a-fintech-platform-to-support-women-entrepreneurs-across-the-globe' },
]

// Duplicate for seamless marquee loop
const marqueeItems = [...publications, ...publications, ...publications]

export default function PressSection() {
  return (
    <section className="w-full py-14 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        As Featured In
      </p>

      {/* Marquee */}
      <div className="relative flex">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {marqueeItems.map((pub, i) => (
            <a
              key={i}
              href={pub.link}
              target={pub.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-125 transition-transform" />
              <span className="text-lg font-bold text-gray-400 group-hover:text-teal-700 transition-colors tracking-tight">
                {pub.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
