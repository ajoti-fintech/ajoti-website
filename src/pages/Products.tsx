const sections = [
    {
        eyebrow: 'SAVINGS AND PAYOUT',
        title: 'Group Contribution',
        description:
            'Saving together just got smarter. Our ROSCA feature empowers communities to pool funds responsibly while maintaining full visibility and automated management. It’s old-school trust, upgraded for the digital age.',
        bg: 'bg-[#c7d8d2]',
        image: '/images/products/group-contribution.png',
        alt: 'Group contribution mobile preview',
    },
    {
        eyebrow: 'TARGET SAVINGS',
        title: 'Achieve goals, with growth savings',
        description:
            'Enjoy 8% to 16% interest p.a. Whether you’re planning for education, a business, travel, or an emergency fund, our structured savings feature helps you stay disciplined while your money grows.',
        bg: 'bg-[#c8d1e2]',
        image: '/images/products/target-savings.png',
        alt: 'Target savings mobile preview',
    },
    {
        eyebrow: 'INVESTMENT',
        title: 'Grow Wealth with Purpose',
        description:
            'Suprebase offers access to curated, inflation-beating investment opportunities tailored to your financial level and goals. Whether you’re just starting or diversifying your portfolio, our platform empowers you to invest with clarity.',
        bg: 'bg-[#d0e1d9]',
        image: '/images/products/investment.png',
        alt: 'Investment mobile preview',
    },
    {
        eyebrow: 'FIXED SAVINGS',
        title: 'Lock in Stability, Earn More',
        description:
            'With Suprebase’s Fixed Savings, you can grow your money steadily over a set period with guaranteed, above-inflation returns. Ideal for those looking to save securely without daily market volatility, our fixed savings option ensures disciplined wealth growth.',
        bg: 'bg-[#d3dfdb]',
        image: '/images/products/fixed-savings.png',
        alt: 'Fixed savings mobile preview',
    },
]

export default function Products() {
    return (
        <div className="min-h-screen bg-[#f6f6f4] font-sans">

            <main className="px-4 py-6 md:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl space-y-6">
                    {sections.map((section) => (
                        <section
                            key={section.title}
                            className={`${section.bg} overflow-hidden rounded-sm`}
                        >
                            <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-2 md:px-12 lg:min-h-[360px]">
                                <div className="max-w-md">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#4f6d65]">
                                        {section.eyebrow}
                                    </p>

                                    <h2 className="mt-4 max-w-[260px] text-[32px] font-semibold leading-[1.15] text-[#111111]">
                                        {section.title}
                                    </h2>

                                    <p className="mt-5 max-w-[360px] text-sm leading-7 text-[#33423d]">
                                        {section.description}
                                    </p>

                                    <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#2f6f61] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#275d52]">
                                        Get Started
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>

                                <div className="flex justify-center md:justify-end">
                                    <div className="flex min-h-[260px] w-full items-center justify-center">
                                        <img
                                            src={section.image}
                                            alt={section.alt}
                                            className="h-auto max-h-[300px] w-auto object-contain"
                                        />
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