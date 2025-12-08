"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">RESONIX MARKET</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for premium gaming currencies. Fast, secure, and reliable delivery since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("reviews")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <a
                  href="https://discord.gg/PQDqywC9jk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal & Security</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Security & Safety
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/PQDqywC9jk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} RESONIX MARKET. All rights reserved. Your trusted gaming currency partner. 100% Secure
            • 24/7 Support • Instant Delivery
          </p>
        </div>
      </div>
    </footer>
  )
}
