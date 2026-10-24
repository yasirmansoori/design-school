"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("relative flex m-0 flex-wrap", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <RevealWord
          key={index}
          progress={scrollYProgress}
          range={[index / words.length, (index + 1) / words.length]}
          reduceMotion={Boolean(reduceMotion)}
        >
          {word}
        </RevealWord>
      ))}
    </p>
  );
}

function RevealWord({
  children,
  progress,
  range,
  reduceMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative me-2 mt-2" aria-hidden="true">
      <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
      <motion.span
        style={{
          transition: reduceMotion ? "none" : "all .5s",
          opacity: reduceMotion ? 1 : opacity,
          textShadow: "0 1px 2px rgba(1, 1, 1, 0.5)",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
