export function ServiceCards() {
  const services = [
    {
      title: "Robux",
      description: "Roblox In-Game Currency",
      gradient: "from-red-600/40 to-red-900/40",
      borderColor: "border-red-500/30",
    },
    {
      title: "V-Bucks",
      description: "Fortnite Battle Royale Currency",
      gradient: "from-purple-600/40 to-purple-900/40",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Valorant Points",
      description: "Valorant Premium Currency",
      gradient: "from-red-600/40 to-pink-900/40",
      borderColor: "border-red-500/30",
    },
    {
      title: "More Games",
      description: "Apex Legends, Genshin Impact & More",
      gradient: "from-cyan-600/40 to-blue-900/40",
      borderColor: "border-cyan-500/30",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${service.gradient} border ${service.borderColor} rounded-xl p-8 hover:border-cyan-400/60 transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 group`}
            >
              <div className="h-32 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
                <div className="text-cyan-400 text-sm font-semibold">Learn More →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
