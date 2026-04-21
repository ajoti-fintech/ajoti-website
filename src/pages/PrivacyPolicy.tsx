export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: April 2026</p>

      <div className="flex flex-col gap-10 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Introduction</h2>
          <p>
            Ajoti ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you use our platform and services. By using Ajoti, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and government-issued ID (for KYC verification).</li>
            <li><strong>Financial Information:</strong> Bank account details, transaction history, and wallet activity.</li>
            <li><strong>Device & Usage Data:</strong> IP address, browser type, device information, and how you interact with our platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>To create and manage your account.</li>
            <li>To process transactions and manage savings circles.</li>
            <li>To verify your identity and comply with KYC/AML regulations.</li>
            <li>To send important service notifications and updates.</li>
            <li>To improve our platform and personalise your experience.</li>
            <li>To detect and prevent fraud or unauthorised access.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data. We may share your information with trusted third-party service providers (such as payment processors and identity verification services) strictly to operate our platform. We may also disclose information when required by law or regulatory authorities.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data. While we take reasonable precautions, no system is completely secure and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Your Rights</h2>
          <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:admin@ajoti.com" className="text-teal-600 hover:underline">admin@ajoti.com</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your experience on our platform. You can control cookie settings through your browser, though disabling certain cookies may affect platform functionality.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on our platform. Continued use of Ajoti after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please reach out at <a href="mailto:admin@ajoti.com" className="text-teal-600 hover:underline">admin@ajoti.com</a>.</p>
        </section>

      </div>
    </div>
  )
}
