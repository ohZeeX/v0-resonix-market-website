import Link from "next/link"

export const metadata = {
  title: "Security & Safety - RESONIX MARKET",
  description: "Learn about our security measures and how we protect your account",
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Security & Safety</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🔐 Our Security Commitment</h2>
            <p>
              RESONIX MARKET takes security seriously. We employ enterprise-grade encryption, continuous security
              monitoring, and regular security audits to protect your account and transactions. Every delivery is
              verified to ensure authentic, legitimate in-game currency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🛡️ Account Protection</h2>
            <p>
              We use multi-factor authentication, IP verification, and real-time fraud detection. Your account is
              protected by industry-standard security protocols. We recommend enabling two-factor authentication on
              associated email accounts for additional protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">💳 Payment Security</h2>
            <p>
              All financial transactions are processed through PCI-DSS compliant payment gateways. We never store
              complete credit card information on our servers. Payment data is encrypted end-to-end and regularly
              audited for vulnerabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">⚠️ Safe Practices</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Never share your account password with anyone</li>
              <li>Use unique, strong passwords with mixed characters</li>
              <li>Enable email notifications for account activity</li>
              <li>Verify seller legitimacy before completing purchases</li>
              <li>Report suspicious activity immediately to our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🔍 Fraud Detection</h2>
            <p>
              Our advanced fraud detection system analyzes patterns, locations, and transaction behaviors. Suspicious
              activities trigger immediate verification protocols. We maintain a zero-tolerance policy for fraudulent
              transactions and report them to relevant authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">🎮 Game Account Safety</h2>
            <p>
              We only deliver currency through official, authorized methods. Your game account remains under your
              complete control. We never request your game account credentials or passwords. Any legitimate service only
              requires your in-game username or user ID.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">📞 Reporting Issues</h2>
            <p>
              If you suspect unauthorized access, fraudulent activity, or security concerns, contact our support team
              immediately through Discord. We respond to security reports within 24 hours and take all concerns
              seriously.
            </p>
          </section>

          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 mt-8">
            <p className="font-semibold text-cyan-400 mb-2">Security Guarantees:</p>
            <ul className="text-sm space-y-1">
              <li>✓ 100% Legitimate Currency Delivery</li>
              <li>✓ SSL/TLS Encryption on All Connections</li>
              <li>✓ 24/7 Fraud Monitoring</li>
              <li>✓ Money-Back Guarantee for Failed Deliveries</li>
              <li>✓ Zero Data Sharing Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
