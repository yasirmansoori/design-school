"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { UpcomingEvent } from "@/content/events";

interface EventTimelineProps {
  entries: readonly UpcomingEvent[];
}

export function EventTimeline({ entries }: EventTimelineProps) {
  return (
    <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block" />

      {entries.map((entry) => (
        <TimelineItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

interface TimelineItemProps {
  entry: UpcomingEvent;
}

function TimelineItem({ entry }: TimelineItemProps) {
  const reduceMotion = usePrefersReducedMotion();
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(
    itemProgress,
    [0, 0.3, 0.7, 1],
    [0.7, 1, 1, 0.7],
  );
  const scale = useTransform(
    itemProgress,
    [0, 0.3, 0.7, 1],
    [0.96, 1, 1, 0.96],
  );

  const isLeft = entry.layout === "left";

  return (
    <motion.div
      ref={itemRef}
      style={reduceMotion ? undefined : { opacity, scale }}
      className="relative mb-16 last:mb-0 md:mb-24"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block" />

      <div
        className={cn(
          "grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16 lg:gap-24",
          {
            "md:text-right": isLeft,
          },
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative mx-auto w-full max-w-[20rem] lg:max-w-[22rem]",
            {
              "md:order-2": isLeft,
              "md:order-1": !isLeft,
            },
          )}
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-2 sm:p-3">
            <img
              src={entry.image}
              alt={entry.alt}
              width={640}
              height={640}
              loading="lazy"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={cn("relative min-w-0", {
            "md:order-1": isLeft,
            "md:order-2": !isLeft,
          })}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2,
            }}
            viewport={{ once: true }}
            className={cn("mx-auto max-w-lg space-y-4 md:mx-0 lg:space-y-5", {
              "md:ml-auto": isLeft,
            })}
          >
            {entry.label && (
              <p className="text-xs font-bold leading-relaxed tracking-[0.15em] text-gray-500 sm:text-sm">
                {entry.label}
              </p>
            )}
            <h3 className="break-words text-2xl font-black leading-tight tracking-wide text-gray-900 sm:text-3xl lg:text-4xl">
              {entry.title}
            </h3>
            <p className="text-base leading-relaxed text-gray-700 lg:text-lg">
              {entry.description}
            </p>
            {entry.audience && (
              <div className="border-t border-gray-200 pt-4">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                  Who this is for
                </p>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                  {entry.audience}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
