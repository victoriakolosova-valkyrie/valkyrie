import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { EmotionalConnection } from "@/components/sections/emotional-connection"
import { AmbientIntelligence } from "@/components/sections/ambient-intelligence"
import { PresenceRituals } from "@/components/sections/presence-rituals"
import { LightAsEmotion } from "@/components/sections/light-as-emotion"
import { VideoSection } from "@/components/sections/video-section"
import { PrivacyFirst } from "@/components/sections/privacy-first"
import { ProductDesign } from "@/components/sections/product-design"
import { Waitlist } from "@/components/sections/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Navigation />
      <Hero />
      <div id="features">
        <EmotionalConnection />
      </div>
      <AmbientIntelligence />
      <PresenceRituals />
      <LightAsEmotion />
      <VideoSection />
      <div id="privacy">
        <PrivacyFirst />
      </div>
      <div id="design">
        <ProductDesign />
      </div>
      <Waitlist />
      <Footer />
    </main>
  )
}
