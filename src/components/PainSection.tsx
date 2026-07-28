import { useInView } from '../hooks/useInView'

const questions = [
  '"Have I paid?"',
  '"Who\'s next?"',
  '"What\'s my balance?"',
]

const solutions = [
  'Contributions tracked automatically — no spreadsheets.',
  'Member records stay organised in one place.',
  'Everyone has access to the information they need.',
]

export default function PainSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* Part 1 — The Problem */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div ref={ref} className={`fade-in-up ${inView ? 'visible' : ''}`}>
          <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            How Much Time Is Your<br />
            <span className="text-teal-600">Ajo Costing You?</span>
          </h2>

          <div className="mt-8 space-y-3 text-gray-600 text-base leading-relaxed">
            <p>Every week, you remind members to pay.</p>
            <p>You check bank alerts.</p>
            <p>You update spreadsheets.</p>
            <p>You answer the same questions — again and again.</p>
          </div>

          {/* Speech bubble questions */}
          <div className="mt-8 flex flex-wrap gap-3">
            {questions.map((q) => (
              <span
                key={q}
                className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                {q}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-500 text-base leading-relaxed">
            None of this helps your group grow. It's simply the cost of managing everything manually.
          </p>

          {/* Stat callout */}
          <div className="mt-10 bg-teal-700 rounded-2xl p-7 text-white">
            <p className="text-4xl font-extrabold">600+</p>
            <p className="text-teal-200 text-sm mt-1 leading-relaxed">
              contributions to track every year in a 50-member savings group.<br />
              Hundreds of transactions, reminders and updates — all depending on you.
            </p>
          </div>
        </div>
      </div>

      {/* Part 2 — The Imagine */}
      <div className="bg-teal-50 border-y border-teal-100">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className={`fade-in-up ${inView ? 'visible' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Imagine Getting That Time Back.
            </h3>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              With Ajoti, the administration takes care of itself — so you can focus on what actually matters: your community.
            </p>

            <div className="mt-8 space-y-4">
              {solutions.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">{s}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white border border-teal-200 rounded-2xl">
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                Less administration. More transparency. More time to lead your community.
              </p>
              <p className="mt-2 text-teal-600 text-sm font-semibold">
                Stop managing paperwork. Start growing your savings group with Ajoti.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://user.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md"
              >
                Start Your Free Trial →
              </a>
              <a
                href="https://user.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-teal-300 text-teal-700 hover:bg-teal-100 text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors"
              >
                Create Your Group
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
