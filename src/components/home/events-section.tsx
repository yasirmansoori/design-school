import { MapPin } from "lucide-react";
import { EventTimeline } from "./event-timeline";
import { upcomingEvents } from "@/content/events";
import local from "./home-sections.module.css";

export function EventsSection() {
  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="relative py-20 bg-white"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <p className={local.eyebrow}>
              <MapPin size={13} aria-hidden="true" /> THE BENGALURU CHAPTER
            </p>
            <h2
              id="events-title"
              className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900"
            >
              DESIGN SCHOOL EVENTS
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Twenty hands-on sessions built around real briefs, practical
              tools, and the work you create in the room. Bring your curiosity.
              Find your people, right here in Bangalore.
            </p>
          </div>
        </div>

        <EventTimeline entries={upcomingEvents} />
      </div>
    </section>
  );
}
