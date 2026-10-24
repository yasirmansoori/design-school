import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { PastEventsCarousel } from "./past-events-carousel";
import { pastEvents } from "@/content/events";
import local from "./home-sections.module.css";

export function PastEventsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="past-events-title"
      className="relative py-20 bg-white"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <p className={local.eyebrow}>SAME CITY. SHARED CURIOSITY.</p>
          <h2
            id="past-events-title"
            className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6"
          >
            Explore our{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              PAST EVENTS
            </span>
            .
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Sessions, workshops, and buildathons from The GTM School’s Bangalore
            community. The conversations that started it all.
          </p>
        </RevealOnScroll>

        <PastEventsCarousel events={pastEvents} />
      </div>
    </section>
  );
}
