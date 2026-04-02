"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type SpotlightItem = {
  quote: string;
  author: string;
  company: string;
};

const ROTATE_INTERVAL_MS = 8000;

export default function RotatingSpotlight({
  items,
  fullWidth,
}: {
  items: SpotlightItem[];
  fullWidth?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [items.length]);

  const item = items[index];

  return (
    <div
      className={
        fullWidth
          ? "w-full bg-[#F0F7FF] rounded-2xl py-16 px-8 sm:px-12 flex flex-col justify-between border border-[#0770E3]/10 relative overflow-hidden"
          : "bg-[#F0F7FF] rounded-2xl py-16 px-6 sm:px-8 flex flex-col justify-between border border-[#0770E3]/10 relative overflow-hidden"
      }
    >
      {/* Decorative opening quote mark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute top-4 left-6 font-serif leading-none"
        style={{ fontSize: "100px", color: "#0770E3", opacity: 0.12, lineHeight: 1 }}
      >
        &ldquo;
      </span>

      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em]">
          Customer spotlight
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-2xl sm:text-3xl font-medium text-grey-700 leading-snug mb-6 italic max-w-3xl mx-auto text-center h-[6.5rem] sm:h-[8rem] overflow-hidden line-clamp-3">
            &ldquo;{item.quote}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-6 text-[16px] text-grey-500 mb-6">
            <span className="font-medium text-grey-700">{item.author}</span>
            <span className="hidden sm:inline">{item.company}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {items.map((_, i) => (
          <span
            key={i}
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === index ? "20px" : "8px",
              height: "8px",
              background: i === index ? "#0770E3" : "#CBD5E1",
            }}
          />
        ))}
      </div>
    </div>
  );
}
