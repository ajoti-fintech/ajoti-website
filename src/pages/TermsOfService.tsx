export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

      <div className="flex flex-col gap-10 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Ajoti platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. Ajoti reserves the right to update these terms at any time, and continued use constitutes acceptance of changes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use Ajoti. By registering, you confirm that you are of legal age and that the information you provide is accurate and complete. Ajoti reserves the right to terminate accounts found to be in violation of this requirement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Account Responsibilities</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You agree to notify us immediately of any unauthorised access to your account.</li>
            <li>You must not share your account with or transfer it to another person.</li>
            <li>You are responsible for all activities carried out under your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Use of Platform</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
            <li>Use Ajoti for any unlawful or fraudulent purpose.</li>
            <li>Attempt to gain unauthorised access to any part of the platform.</li>
            <li>Interfere with the operation or security of the platform.</li>
            <li>Use automated tools to scrape or access platform data without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Savings Circles & Contributions</h2>
          <p>
            Ajoti facilitates savings circles between consenting members. By joining a circle, you agree to fulfil your contribution commitments as scheduled. Failure to contribute as agreed may result in removal from the circle and potential restrictions on your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Fees</h2>
          <p>
            Ajoti may charge service fees for certain transactions or features. All applicable fees will be clearly disclosed before any transaction is confirmed. We reserve the right to update our fee structure with prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Limitation of Liability</h2>
          <p>
            Ajoti is not liable for losses arising from unauthorised account access, user error, technical failures beyond our control, or disputes between circle members. Our total liability in any circumstance shall not exceed the fees paid by you in the three months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account if you breach these Terms of Service, engage in fraudulent activity, or if required by law. You may also close your account at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved under Nigerian jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:admin@ajoti.com" className="text-teal-600 hover:underline">admin@ajoti.com</a>.</p>
        </section>

      </div>
    </div>
  )
}
