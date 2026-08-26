import { useInView } from '../hooks/useInView'

const questions = [
  '"Have I paid?"',
  '"Who\'s next?"',
  '"What\'s my balance?"',
]

const solutions = [
  'Contributions tracked automatically, no spreadsheets.',
  'Member records stay organised in one place.',
  'Everyone has access to the information they need.',
]

export default function PainSection() {
  const { ref, inView } = useInView()

  return (
    <section className="w-full bg-white overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

          {/* Left — The Problem */}
          <div className={`fade-in-left ${inView ? 'visible' : ''} bg-white p-10 md:p-12 flex flex-col justify-between`}>
            <div>
              <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
                Sound Familiar?
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                How Much Time Is Your<br />
                <span className="text-teal-600">Ajo Costing You?</span>
              </h2>

              <div className="mt-7 space-y-2.5 text-gray-600 text-base leading-relaxed">
                <p>Every week, you remind members to pay.</p>
                <p>You check bank alerts.</p>
                <p>You update spreadsheets.</p>
                <p>You answer the same questions, again and again.</p>
              </div>

              {/* Speech bubble questions */}
              <div className="mt-7 flex flex-wrap gap-2">
                {questions.map((q) => (
                  <span
                    key={q}
                    className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    {q}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-gray-500 text-sm leading-relaxed">
                None of this helps your group grow. It's simply the cost of managing everything manually.
              </p>
            </div>

            {/* Stat callout */}
            <div className="mt-8 bg-teal-700 rounded-2xl p-6 text-white">
              <p className="text-4xl font-extrabold">600+</p>
              <p className="text-teal-200 text-sm mt-1 leading-relaxed">
                contributions to track every year in a 50-member savings group — all depending on you.
              </p>
            </div>
          </div>

          {/* Right — The Imagine */}
          <div className={`fade-in-right ${inView ? 'visible' : ''} bg-teal-50 border-l border-teal-100 p-10 md:p-12 flex flex-col justify-between`}>
            <div>
              <span className="inline-block text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
                The Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Imagine Getting<br />
                <span className="text-teal-600">That Time Back.</span>
              </h2>

              <p className="mt-5 text-gray-600 text-base leading-relaxed">
                With Ajoti, the administration takes care of itself — so you can focus on what actually matters: your community.
              </p>

              <div className="mt-7 space-y-4">
                {solutions.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-white border border-teal-200 rounded-2xl">
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  Less administration. More transparency. More time to lead your community.
                </p>
                <p className="mt-1.5 text-teal-600 text-sm font-semibold">
                  Stop managing paperwork. Start growing with Ajoti.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://app.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
              >
                Start Your Free Trial →
              </a>
              <a
                href="https://app.ajoti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-teal-300 text-teal-700 hover:bg-teal-100 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
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
