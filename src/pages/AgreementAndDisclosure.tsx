export default function AgreementAndDisclosure() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Agreement and Disclosure</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

      <div className="flex flex-col gap-10 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. User Agreement</h2>
          <p>
            This Agreement governs your use of the Ajoti platform and all related services. By registering and using Ajoti, you enter into a binding agreement with us. Please read this document carefully before proceeding.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Nature of Services</h2>
          <p>
            Ajoti is a community finance platform that facilitates savings circles (ROSCA), contribution tracking, and payout management. Ajoti does not act as a bank or licensed financial institution. We provide technology infrastructure to enable cooperative savings among users.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Risk Disclosure</h2>
          <p>
            Participation in savings circles carries inherent risks, including but not limited to:
          </p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
            <li>Members failing to make contributions as agreed.</li>
            <li>Delays in payouts due to missed contributions by other circle members.</li>
            <li>Technology disruptions that may temporarily affect platform availability.</li>
          </ul>
          <p className="mt-3">
            Ajoti takes reasonable steps to mitigate these risks but cannot guarantee the conduct of individual members. Users participate at their own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Financial Disclosure</h2>
          <p>
            Ajoti does not provide financial advice. Any information on the platform is for general informational purposes only and should not be relied upon as professional financial or investment advice. We encourage users to seek independent financial guidance where necessary.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. KYC & Regulatory Compliance</h2>
          <p>
            In compliance with applicable Nigerian financial regulations, Ajoti is required to verify the identity of all users. Users must submit valid identification documents to complete KYC verification. Accounts that fail verification may have restricted access to platform features.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Data Use Consent</h2>
          <p>
            By using Ajoti, you consent to the collection and use of your personal and financial data as described in our Privacy Policy. Your data is used strictly to operate the platform, process transactions, and comply with legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Dispute Resolution</h2>
          <p>
            In the event of a dispute between users, Ajoti may act as a mediator but is not obligated to resolve disputes. For disputes involving Ajoti directly, you agree to attempt resolution through our support channels before pursuing legal action.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Amendments</h2>
          <p>
            Ajoti reserves the right to amend this Agreement at any time. Material changes will be communicated via email or platform notification. Your continued use after such notification constitutes acceptance of the revised Agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Contact</h2>
          <p>If you have questions regarding this Agreement, please contact us at <a href="mailto:admin@ajoti.com" className="text-teal-600 hover:underline">admin@ajoti.com</a>.</p>
        </section>

      </div>
    </div>
  )
}
