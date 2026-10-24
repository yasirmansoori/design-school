"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clamp, wrapIndex } from "@/lib/math";
import type { GalleryPhoto } from "@/content/gallery";

const FRAME_OFFSET = -30;
const FRAMES_VISIBLE_LENGTH = 3;
const BUFFER_SIZE = 8;

export function PhotoStackGallery({
  photos,
}: {
  photos: readonly GalleryPhoto[];
}) {
  // Use continuous index that can go infinite in both directions
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const instructionsId = React.useId();

  if (photos.length === 0) return null;

  const visibleCards =
    photos.length === 1
      ? [{ index: currentIndex, imageIndex: 0 }]
      : Array.from(
          { length: BUFFER_SIZE * 2 + FRAMES_VISIBLE_LENGTH + 1 },
          (_, offset) => {
            const index = currentIndex - BUFFER_SIZE + offset;
            return { index, imageIndex: wrapIndex(index, photos.length) };
          },
        );
  const activeImageIndex = wrapIndex(currentIndex, photos.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Gallery showcase"
      aria-describedby={instructionsId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          photos.length > 1 &&
          (event.key === "ArrowRight" || event.key === "ArrowLeft")
        ) {
          event.preventDefault();
          const direction = event.key === "ArrowRight" ? 1 : -1;
          setCurrentIndex((prev) => prev + direction);
        }
      }}
      className="relative isolate flex h-full w-full items-center justify-center overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset"
    >
      <div className="relative mb-6 flex h-full w-full items-center justify-center">
        {visibleCards.map((card) => {
          const offsetIndex = card.index - currentIndex;
          const blur = currentIndex > card.index ? 2 : 0;
          const opacity = currentIndex > card.index ? 0 : 1;
          const scale = clamp(1 - offsetIndex * 0.08, [0.08, 2]);
          const y = clamp(offsetIndex * FRAME_OFFSET, [
            FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
            Number.POSITIVE_INFINITY,
          ]);

          const photo = photos[card.imageIndex];
          const image = (
            <img
              alt={photo.alt}
              src={photo.src}
              width={1600}
              height={720}
              loading="lazy"
              decoding="async"
              className="object-contain w-full h-full"
            />
          );

          return (
            <div
              key={card.index}
              aria-hidden={offsetIndex !== 0}
              className="pointer-events-none absolute aspect-[20/9] w-[85%] max-w-[800px] overflow-hidden rounded-lg bg-gray-100 shadow-2xl motion-reduce:!transition-none"
              style={{
                transform: `translateY(${y}px) scale(${scale})`,
                willChange: "opacity, filter, transform",
                filter: `blur(${blur}px)`,
                opacity,
                transition:
                  "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-in-out, filter 200ms ease-in-out",
                zIndex: 100 - offsetIndex,
              }}
            >
              {offsetIndex >= 0 && offsetIndex < FRAMES_VISIBLE_LENGTH
                ? image
                : null}
            </div>
          );
        })}
      </div>
      <p id={instructionsId} className="sr-only">
        Use the previous and next buttons, or focus the gallery and use the left
        and right arrow keys.
      </p>
      <div className="absolute bottom-3 z-[200] flex items-center gap-5 rounded-full border border-gray-200 bg-white/95 p-2 sm:bottom-6">
        <button
          type="button"
          disabled={photos.length === 1}
          aria-label="Previous gallery image"
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-default motion-reduce:transition-none"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <p
          aria-live="polite"
          aria-atomic="true"
          className="min-w-12 text-center text-sm tabular-nums text-gray-500"
        >
          <span className="sr-only">Image </span>
          {activeImageIndex + 1} / {photos.length}
        </p>
        <button
          type="button"
          disabled={photos.length === 1}
          aria-label="Next gallery image"
          onClick={() => setCurrentIndex((prev) => prev + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-default motion-reduce:transition-none"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
