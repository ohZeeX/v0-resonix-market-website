import { Shield, Zap, Lock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your transactions are protected with industry-leading encryption and security protocols.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Receive your gaming currency within minutes. No delays, no complications.",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Your data is yours. We never share or sell customer information. 100% confidential.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose RESONIX</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="mb-4 inline-block p-3 bg-cyan-500/20 rounded-lg">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
