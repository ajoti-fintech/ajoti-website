import img2 from '../assets/img 2.png'
import img3 from '../assets/img 3.png'

const features = [
  {
    label: 'Culturally Rooted Innovation',
    heading: (
      <>
        Community Driven Finance{' '}
        <br />for{' '}
        <span className="text-teal-600">Underserved</span> Africans
      </>
    ),
    description:
      'Ajoti brings financial access to those often left out of traditional banking. With our platform, communities can transact, save and grow together!',
    cta: 'Learn more',
    image: img2,
    imageAlt: 'Community members using Ajoti',
  },
  {
    label: 'Intuitively Designed Experience',
    heading: (
      <>
        Collective Power,
        <br /> Smarter Circles
      </>
    ),
    description:
      'By being a member of a rotating saving and credit circle, you can collectively save money with people of similar cooperative significance.',
    cta: 'Get started',
    image: img3,
    imageAlt: 'Ajoti app group savings screen',
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Text */}
            <div className="flex-1 max-w-sm">
              <p className="text-teal-500 text-xs font-medium mb-3">{f.label}</p>
              <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
                {f.heading}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {f.description}
              </p>
              <a href="https://user.ajoti.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors">
                {f.cta}
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={f.image}
                alt={f.imageAlt}
                className="w-full max-w-sm object-contain rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
