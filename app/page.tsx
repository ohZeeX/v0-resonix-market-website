import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServiceCards } from "@/components/service-cards"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServiceCards />
      <ReviewsSection />
      <Footer />
    </main>
  )
}
