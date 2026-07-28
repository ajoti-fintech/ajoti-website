import { useInView } from '../hooks/useInView'

function UtahLogo() {
  return (
    <svg viewBox="0 0 220 70" className="h-12 w-auto" aria-label="The University of Utah">
      {/* Left U — slightly offset behind */}
      <g fill="#CC0000">
        <rect x="4"  y="4"  width="12" height="42" />
        <rect x="28" y="4"  width="12" height="42" />
        <rect x="4"  y="40" width="36" height="12" rx="6" />
      </g>
      {/* Right U — in front, shifted */}
      <g fill="#CC0000">
        <rect x="20" y="4"  width="12" height="42" />
        <rect x="44" y="4"  width="12" height="42" />
        <rect x="20" y="40" width="36" height="12" rx="6" />
      </g>
      {/* Text block */}
      <text x="72" y="18"  fill="#1a1a1a" fontSize="8"  fontFamily="Georgia, serif" fontWeight="700" letterSpacing="1">THE</text>
      <text x="72" y="33"  fill="#1a1a1a" fontSize="11" fontFamily="Georgia, serif" fontWeight="700" letterSpacing="0.5">UNIVERSITY</text>
      <text x="72" y="46"  fill="#1a1a1a" fontSize="8"  fontFamily="Georgia, serif" fontStyle="italic">of</text>
      <text x="72" y="62"  fill="#1a1a1a" fontSize="16" fontFamily="Georgia, serif" fontWeight="700" letterSpacing="1">UTAH</text>
    </svg>
  )
}

function IDALogo() {
  return (
    <svg viewBox="0 0 210 70" className="h-12 w-auto" aria-label="Ibadan Digital Academy">
      {/* Hexagon — flat-top orientation */}
      <polygon
        points="18,4 46,4 60,28 46,52 18,52 4,28"
        fill="#1a7cd4"
      />
      {/* Shadow layer inside hex for depth */}
      <polygon
        points="22,4 46,4 60,28 46,52 22,52 30,28"
        fill="#1565b8"
        opacity="0.4"
      />
      {/* "ida" text inside hex */}
      <text x="32" y="35" fill="white" fontSize="16" fontWeight="800" fontFamily="Arial Rounded MT Bold, Arial, sans-serif" textAnchor="middle" letterSpacing="-0.5">ida</text>
      {/* Circle accent on the "a" */}
      <circle cx="43" cy="26" r="4" fill="none" stroke="white" strokeWidth="1.5" />
      {/* Vertical divider */}
      <line x1="72" y1="10" x2="72" y2="52" stroke="#ccc" strokeWidth="1.2" />
      {/* Academy name */}
      <text x="82" y="24" fill="#333" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="600">Ibadan</text>
      <text x="82" y="38" fill="#333" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="600">Digital</text>
      <text x="82" y="52" fill="#333" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="600">Academy</text>
    </svg>
  )
}

function SuprefaxLogo() {
  return (
    <svg viewBox="0 0 150 44" className="h-10 w-auto" aria-label="Suprefax">
      <circle cx="10" cy="22" r="7" fill="#0D9488" />
      <circle cx="32" cy="10" r="5" fill="#14B8A6" />
      <circle cx="32" cy="34" r="5" fill="#14B8A6" />
      <line x1="15" y1="18" x2="28" y2="12" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="26" x2="28" y2="32" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
      <text x="44" y="28" fill="#1a1a1a" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">suprefax</text>
    </svg>
  )
}

const supporters = [
  { name: 'University of Utah', location: 'Utah, USA',         logo: <UtahLogo /> },
  { name: 'Ibadan Digital Academy', location: 'Ibadan, Nigeria', logo: <IDALogo /> },
  { name: 'Suprefax',           location: '',                  logo: <SuprefaxLogo /> },
]

export default function SupportersSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-teal-950 to-teal-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="inline-block text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Our Supporters
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Backed by People Who Believe in Community
          </h2>
          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
            Organisations that share our mission of empowering African communities through structured savings.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {supporters.map((s, i) => (
            <div
              key={s.name}
              className={`fade-in-up delay-${i + 1} ${inView ? 'visible' : ''} bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center gap-4 hover:bg-white/10 hover:scale-105 transition-all duration-300`}
            >
              <div className="bg-white rounded-xl px-5 py-4 flex items-center justify-center min-h-[72px]">
                {s.logo}
              </div>
              <div>
                <p className="text-white font-bold text-base">{s.name}</p>
                {s.location && (
                  <p className="text-white/40 text-xs mt-0.5">{s.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
