import phone from '../assets/phone_screen.png'
import card from '../assets/members.png'

type ProductSection = {
  eyebrow: string
  title: string
  description: string
  bg: string
  type: 'group' | 'default'
  image: string | null
  alt: string
}

const sections: ProductSection[] = [
  {
    eyebrow: 'SAVINGS AND PAYOUT',
    title: 'Group\nContribution',
    description:
      'Saving together just got smarter. Our ROSCA feature empowers communities to pool funds responsibly while maintaining full visibility and automated management. It’s old-school trust, upgraded for the digital age.',
    bg: 'bg-[#C8D8D3]',
    type: 'group',
    image: null,
    alt: '',
  },
  {
    eyebrow: 'TARGET SAVINGS',
    title: 'Achieve goals, with\ngrowth savings',
    description:
      'Enjoy 8% to 16% interest p.a. Whether you’re planning for education, a business, travel, or an emergency fund, our structured savings feature helps you stay disciplined while your money grows.',
    bg: 'bg-[#C8D1E2]',
    type: 'default',
    image: null,
    alt: '',
  },
  {
    eyebrow: 'INVESTMENT',
    title: 'Grow Wealth with\nPurpose',
    description:
      'Suprebase offers access to curated, inflation-beating investment opportunities tailored to your financial level and goals. Whether you’re just starting or diversifying your portfolio, our platform empowers you to invest with clarity.',
    bg: 'bg-[#D0E1D9]',
    type: 'default',
    image: null,
    alt: '',
  },
  {
    eyebrow: 'FIXED SAVINGS',
    title: 'Lock in Stability,\nEarn More',
    description:
      'With Suprebase’s Fixed Savings, you can grow your money steadily over a set period with guaranteed, above-inflation returns. Ideal for those looking to save securely without daily market volatility, our fixed savings option ensures disciplined wealth growth.',
    bg: 'bg-[#D3DFDB]',
    type: 'default',
    image: null,
    alt: '',
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans">
      <main className="px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1120px] space-y-6">
          {sections.map((section) => (
  <section
    key={section.title}
    className={`${section.bg} ${section.type === 'group' ? 'overflow-visible' : 'overflow-hidden'}`}
  >
    <div className="grid h-[360px] items-center gap-6 px-8 md:grid-cols-2 md:px-10 lg:px-12">

      {/* LEFT TEXT */}
      <div className="max-w-[340px]">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#55756C]">
          {section.eyebrow}
        </p>

        <h2 className="mt-3 whitespace-pre-line text-[30px] font-semibold leading-[1.12] text-[#111111]">
          {section.title}
        </h2>

        <p className="mt-4 max-w-[310px] text-[12px] leading-[1.9] text-[#33423D]">
          {section.description}
        </p>

        <button className="mt-5 inline-flex items-center gap-2 bg-[#2F6F61] px-4 py-2.5 text-[12px] font-medium text-white transition hover:bg-[#275D52]">
          Get Started
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex h-full items-center justify-center md:justify-end">
        {section.type === 'group' ? (
          <div className="relative flex h-full w-full items-center justify-end">
            <div className="relative h-[360px] w-full max-w-[390px]">
              <img
                src={phone}
                alt="Group contribution phone"
                className="absolute right-0 top-1/2 z-0 h-[350px] w-auto -translate-y-1/2 object-contain"
              />
              <img
                src={card}
                alt="Members saving group"
                className="absolute right-[205px] top-[170px] z-10 w-[230px] rounded-[14px]]"
              />
            </div>
          </div>
        ) : (
          <div className="h-[200px] w-full" />
        )}
      </div>

    </div>
  </section>
))}
        </div>
      </main>
    </div>
  )
}