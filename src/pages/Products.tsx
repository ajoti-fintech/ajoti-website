import phone from '../assets/phone_screen.png'
import card from '../assets/members.png'
import target_box from '../assets/target_saving_box.png'
import target_phone from '../assets/target_saving_phone.png'
import investment_box from '../assets/investment_box.png'
import investment_phone from '../assets/investment_phone.png'
import saving_box from '../assets/saving_card.png'
import saving_phone from '../assets/saving_phone.png'

type ProductSection = {
  eyebrow: string
  title: string
  description: string
  bg: string
  image1: string
  image2: string
  image1ClassName: string
  image2ClassName: string
}

const sections: ProductSection[] = [
  {
    eyebrow: 'SAVINGS AND PAYOUT',
    title: 'Group\nContribution',
    description:
      "Saving together just got smarter. Our ROSCA feature empowers communities to pool funds responsibly while maintaining full visibility and automated management. It's old-school trust, upgraded for the digital age.",
    bg: 'bg-[#C8D8D3]',
    image1: phone,
    image2: card,
    image1ClassName: 'absolute right-0 top-1/2 z-0 h-[350px] w-auto -translate-y-1/2 object-contain',
    image2ClassName: 'absolute right-[190px] top-[170px] z-10 w-[230px] rounded-[14px]',
  },
  {
    eyebrow: 'TARGET SAVINGS',
    title: 'Achieve goals, with\ngrowth savings',
    description:
      "Enjoy 8% to 16% interest p.a. Whether you're planning for education, a business, travel, or an emergency fund, our structured savings feature helps you stay disciplined while your money grows.",
    bg: 'bg-[#C8D1E2]',
    image1: target_phone,
    image2: target_box,
    image1ClassName: 'absolute right-0 top-1/2 z-0 h-[360px] w-auto -translate-y-1/2 object-contain',
    image2ClassName: 'absolute left-[230px] top-[100px] z-10 w-[170px] rounded-[14px]',
  },
  {
    eyebrow: 'INVESTMENT',
    title: 'Grow Wealth with\nPurpose',
    description:
      "Suprebase offers access to curated, inflation-beating investment opportunities tailored to your financial level and goals. Whether you're just starting or diversifying your portfolio, our platform empowers you to invest with clarity.",
    bg: 'bg-[#D0E1D9]',
    image1: investment_phone,
    image2: investment_box,
    image1ClassName: 'absolute right-0 top-1/2 z-0 h-[360px] w-auto -translate-y-1/2 object-contain',
    image2ClassName: 'absolute right-[225px] top-[150px] z-10 w-[180px] rounded-[14px]',
  },
  {
    eyebrow: 'FIXED SAVINGS',
    title: 'Lock in Stability,\nEarn More',
    description:
      "With Suprebase's Fixed Savings, you can grow your money steadily over a set period with guaranteed, above-inflation returns. Ideal for those looking to save securely without daily market volatility, our fixed savings option ensures disciplined wealth growth.",
    bg: 'bg-[#D3DFDB]',
    image1: saving_phone,
    image2: "",
    image1ClassName: 'absolute right-0 top-[185px] z-0 h-[350px] w-auto -translate-y-1/2 object-contain',
    image2ClassName: 'hidden',
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
              className={`${section.bg} overflow-visible`}
            >
              <div className="grid h-[360px] items-stretch gap-6 px-10 md:grid-cols-2 md:px-10 lg:px-12">

                {/* LEFT TEXT */}
                <div className="max-w-[340px] flex flex-col justify-between h-[360px] pt-10 pb-0">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#55756C]">
                      {section.eyebrow}
                    </p>

                    <h2 className="mt-3 whitespace-pre-line text-[30px] font-semibold leading-[1.12] text-[#111111]">
                      {section.title}
                    </h2>

                    <p className="mt-4 max-w-[310px] text-[12px] leading-[1.9] text-[#33423D]">
                      {section.description}
                    </p>
                  </div>

                  <button className="inline-flex w-fit items-center gap-2 bg-[#2F6F61] px-4 py-2.5 text-[12px] font-medium text-white transition hover:bg-[#275D52] mb-[-15px]">
                    Get Started
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex h-full items-center justify-center md:justify-end">
                  <div className="relative flex h-full w-full items-center justify-end pr-40">
                    <div className="relative h-[360px] w-full max-w-[500px]">
                      <img
                        src={section.image1}
                        alt={section.eyebrow}
                        className={section.image1ClassName}
                      />
                      <img
                        src={section.image2}
                        alt={section.eyebrow}
                        className={section.image2ClassName}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}