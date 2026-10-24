import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { EventsSection } from "@/components/home/events-section";
import { PastEventsSection } from "@/components/home/past-events-section";
import { GallerySection } from "@/components/home/gallery-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <MissionSection />
        <EventsSection />
        <PastEventsSection />
        <GallerySection />
      </main>
      <NewsletterSection />
    </div>
  );
}
