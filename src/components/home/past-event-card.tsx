import type { PastEvent } from "@/content/events";
import { cn } from "@/lib/utils";
import styles from "./past-events-carousel.module.css";

const DIAGONAL_EDGE_LENGTH = Math.sqrt(5000);
const EVENT_COLORS = [
  "#FDE68A",
  "#DDD6FE",
  "#BBF7D0",
  "#FBCFE8",
  "#BAE6FD",
  "#FED7AA",
];

export function PastEventCard({
  event,
  eventIndex,
  position,
}: {
  event: PastEvent;
  eventIndex: number;
  position: number;
}) {
  const isCenter = position === 0;

  return (
    <a
      href={event.url}
      aria-label={`${event.title} — ${event.date}`}
      aria-current={isCenter ? "true" : undefined}
      tabIndex={isCenter ? 0 : -1}
      className={cn(
        styles.card,
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out motion-reduce:transition-none",
        "flex flex-col gap-2 p-5 sm:gap-3 sm:p-6 text-gray-900 border-gray-900/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gray-900 focus-visible:z-20",
        isCenter ? "z-10" : "z-0",
      )}
      style={{
        backgroundColor: EVENT_COLORS[eventIndex % EVENT_COLORS.length],
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `translate(-50%, -50%) translateX(calc(var(--card-size) / 1.5 * ${position})) translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
        boxShadow: isCenter
          ? "0px 8px 0px 4px hsl(var(--border))"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute block origin-top-right rotate-45 bg-gray-900/20"
        style={{ right: -2, top: 48, width: DIAGONAL_EDGE_LENGTH, height: 2 }}
      />
      <img
        src={event.image}
        alt={`${event.title} event cover`}
        width={800}
        height={420}
        className="aspect-[800/420] w-11/12 shrink-0 self-center rounded-xl bg-white/60 object-contain"
        loading="lazy"
      />
      <h3
        className="line-clamp-2 shrink-0 text-base font-bold leading-snug sm:text-lg"
        title={event.title}
      >
        {event.title}
      </h3>
      <p className="line-clamp-2 text-xs leading-snug text-gray-800 sm:text-sm">
        {event.summary}
      </p>
      <p className="mt-auto shrink-0 text-xs italic text-gray-700 sm:text-sm">
        - {event.date}
      </p>
    </a>
  );
}
