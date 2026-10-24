"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PastEvent } from "@/content/events";
import { wrapIndex } from "@/lib/math";
import { PastEventCard } from "./past-event-card";

const CONTROL_CLASS =
  "flex h-14 w-14 items-center justify-center text-2xl transition-colors motion-reduce:transition-none bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-default";

const SWIPE_THRESHOLD = 40;
const SWIPE_IDLE_MS = 200;

export function PastEventsCarousel({
  events,
}: {
  events: readonly PastEvent[];
}) {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || events.length < 2) return;

    let distance = 0;
    let direction = 0;
    let lastWheelAt = 0;
    let moved = false;

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return;
      }

      event.preventDefault();
      const now = performance.now();
      const nextDirection = Math.sign(event.deltaX);
      if (now - lastWheelAt > SWIPE_IDLE_MS || nextDirection !== direction) {
        distance = 0;
        moved = false;
      }
      lastWheelAt = now;
      direction = nextDirection;

      // A trackpad swipe includes momentum events; advance only once per gesture.
      if (moved) return;
      const unit =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? carousel.clientWidth
            : 1;
      distance += event.deltaX * unit;
      if (Math.abs(distance) < SWIPE_THRESHOLD) return;

      setOffset((previous) => wrapIndex(previous + direction, events.length));
      moved = true;
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", handleWheel);
  }, [events.length]);

  if (events.length === 0) return null;

  const center = Math.floor(events.length / 2);
  const activeIndex = wrapIndex(center + offset, events.length);
  const move = (steps: number) =>
    setOffset((previous) => wrapIndex(previous + steps, events.length));

  return (
    <div
      ref={carouselRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ height: 600 }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Past events"
    >
      {events.map((event, eventIndex) => {
        const position = wrapIndex(eventIndex - offset, events.length) - center;
        return (
          <PastEventCard
            key={event.url}
            event={event}
            eventIndex={eventIndex}
            position={position}
          />
        );
      })}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {events[activeIndex].title} — {events[activeIndex].date}
      </p>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          type="button"
          onClick={() => move(-1)}
          disabled={events.length === 1}
          className={CONTROL_CLASS}
          aria-label="Previous event"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          disabled={events.length === 1}
          className={CONTROL_CLASS}
          aria-label="Next event"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
