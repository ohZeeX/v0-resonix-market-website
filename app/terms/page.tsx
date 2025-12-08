import Link from "next/link"

export const metadata = {
  title: "Terms of Service - RESONIX MARKET",
  description: "Terms and conditions for using RESONIX MARKET services",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Service Description</h2>
            <p>
              RESONIX MARKET provides instant delivery of premium gaming currencies including Robux, V-Bucks, Valorant
              Points, and other in-game currencies. All transactions are final and cannot be reversed except in cases of
              service failure or unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. User Responsibilities</h2>
            <p>
              Users agree to provide accurate account information and maintain the confidentiality of login credentials.
              You are responsible for all activities under your account. Unauthorized access, sharing credentials, or
              account hijacking will result in immediate suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. Payment & Refunds</h2>
            <p>
              All payments must be made through approved methods. Orders are processed within seconds of payment
              verification. Due to the instant nature of digital currency delivery, refunds are only issued for
              technical errors or payment processing failures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Prohibited Activities</h2>
            <p>
              Users are prohibited from reselling purchased currencies, using fraudulent payment methods, attempting to
              exploit our systems, or violating third-party game terms. Violations will result in permanent account
              termination and legal action if necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Limitation of Liability</h2>
            <p>
              RESONIX MARKET is provided "as-is" without warranties. We are not liable for game account suspensions,
              game-related issues, or losses resulting from third-party game modifications. Our liability is limited to
              the purchase price of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Termination</h2>
            <p>
              We reserve the right to terminate accounts for violations of these terms, suspicious activity, or legal
              compliance. Terminated accounts forfeit any remaining balance. Users may appeal termination within 30
              days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Changes to Terms</h2>
            <p>
              These terms may be updated at any time. Continued use of RESONIX MARKET constitutes acceptance of updated
              terms. Major changes will be announced via email to all active users.
            </p>
          </section>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 mt-8">
            <p className="text-sm">
              Last Updated: {new Date().toLocaleDateString()} | Agree to these terms by using our service.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
