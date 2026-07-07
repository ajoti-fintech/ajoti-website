import { useInView } from '../hooks/useInView'

// Place ida-logo.png in src/assets/ to activate the real IDA logo
// import idaLogo from '../assets/ida-logo.png'

function UtahLogo() {
  return (
    <svg viewBox="0 0 120 52" className="h-10 w-auto" aria-label="University of Utah">
      <rect width="120" height="52" rx="4" fill="#CC0000" />
      {/* Interlocking U shapes */}
      <g fill="white" transform="translate(8, 8)">
        <path d="M0 0 L0 20 Q0 30 10 30 Q20 30 20 20 L20 14 L14 14 L14 20 Q14 24 10 24 Q6 24 6 20 L6 0 Z" />
        <path d="M12 0 L12 6 L20 6 L20 0 Z" />
        <path d="M16 0 L16 20 Q16 30 26 30 Q36 30 36 20 L36 0 L30 0 L30 20 Q30 24 26 24 Q22 24 22 20 L22 0 Z" />
      </g>
      <text x="50" y="20" fill="white" fontSize="8" fontWeight="bold" fontFamily="serif">THE</text>
      <text x="44" y="30" fill="white" fontSize="9" fontWeight="bold" fontFamily="serif">UNIVERSITY</text>
      <text x="56" y="39" fill="white" fontSize="7" fontFamily="serif">of</text>
      <text x="48" y="48" fill="white" fontSize="10" fontWeight="bold" fontFamily="serif">UTAH</text>
    </svg>
  )
}

function SuprefaxLogo() {
  return (
    <svg viewBox="0 0 140 44" className="h-10 w-auto" aria-label="Suprefax">
      {/* Icon: abstract S-curve / connection nodes */}
      <circle cx="10" cy="22" r="7" fill="#0D9488" />
      <circle cx="32" cy="10" r="5" fill="#14B8A6" />
      <circle cx="32" cy="34" r="5" fill="#14B8A6" />
      <line x1="15" y1="18" x2="28" y2="12" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="26" x2="28" y2="32" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
      {/* Wordmark */}
      <text x="44" y="28" fill="#1a1a1a" fontSize="18" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">
        suprefax
      </text>
    </svg>
  )
}

const supporters = [
  {
    name: 'University of Utah',
    location: 'Utah, USA',
    logo: 'utah',
  },
  {
    name: 'Ibadan Digital Academy',
    location: 'Ibadan, Nigeria',
    logo: 'ida',
    initial: 'IDA',
    color: '#1a7cd4',
  },
  {
    name: 'Suprefax',
    location: '',
    logo: 'suprefax',
  },
]

export default function SupportersSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-teal-950 to-teal-800 relative overflow-hidden">
      {/* Decorative blobs */}
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
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center min-h-[60px]">
                {s.logo === 'utah' && <UtahLogo />}
                {s.logo === 'suprefax' && <SuprefaxLogo />}
                {s.logo === 'ida' && (
                  // Swap for: <img src={idaLogo} alt="IDA" className="h-10 object-contain" />
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-white text-sm font-extrabold shadow-lg"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.initial}
                  </div>
                )}
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
