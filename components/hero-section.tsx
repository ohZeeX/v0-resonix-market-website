"use client"

export function HeroSection() {
  const stats = [
    { number: "2500+", label: "Happy Customers" },
    { number: "14K+", label: "Active Members" },
    { number: "24/7", label: "Instant Delivery" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance">
            RESONIX <span className="text-cyan-400">MARKET</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
            The ultimate destination for premium gaming currencies. Instant delivery, unmatched security, complete
            privacy.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm hover:border-cyan-400/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold py-3 px-8 rounded-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/50 text-lg"
          >
            View Customer Vouches
          </button>
        </div>
      </div>
    </section>
  )
}
