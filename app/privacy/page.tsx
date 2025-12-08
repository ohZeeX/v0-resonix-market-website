import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - RESONIX MARKET",
  description: "Our commitment to protecting your personal information and privacy",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Information We Collect</h2>
            <p>
              At RESONIX MARKET, we collect information necessary to provide our gaming currency services. This includes
              account information, transaction history, and communication preferences. We use industry-standard
              encryption to protect all personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. How We Use Your Data</h2>
            <p>
              Your information is used solely to process orders, improve our services, and maintain account security. We
              never share your personal data with third parties without explicit consent. All transactions are processed
              through secure, encrypted channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Data Protection</h2>
            <p>
              We implement advanced security measures including SSL encryption, multi-factor authentication, and regular
              security audits. Your financial information is never stored directly on our servers—only transaction
              confirmations are recorded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience and remember your preferences. You can disable cookies
              in your browser settings, though this may affect functionality. No tracking is done for marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, modify, or delete your personal data at any time. Contact our support team
              via Discord to request changes to your account information or to withdraw your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Policy Updates</h2>
            <p>
              This privacy policy may be updated periodically to reflect changes in our practices. We will notify users
              of significant changes via email. Your continued use of RESONIX MARKET constitutes acceptance of any
              updates.
            </p>
          </section>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 mt-8">
            <p className="text-sm">
              Last Updated: {new Date().toLocaleDateString()} | Questions? Join our Discord community for support.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
