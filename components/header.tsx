"use client"

export function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-cyan-400">RESONIX</div>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => handleScroll("home")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("services")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            Services
          </button>
          <button
            onClick={() => handleScroll("reviews")}
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            Customer Reviews
          </button>
          <a
            href="https://discord.gg/PQDqywC9jk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
          >
            Support
          </a>
          <button
            onClick={() => handleScroll("reviews")}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold py-2 px-6 rounded-lg transition-all text-sm"
          >
            View Vouches
          </button>
        </div>
      </nav>
    </header>
  )
}
