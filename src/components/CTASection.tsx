"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";

type CTASectionProps = { id?: string };

export default function CTASection({ id = "cta" }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setCursor(null);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-24 lg:py-32 overflow-hidden scroll-mt-24"
      style={{ backgroundColor: "#0558B8" }}
    >
      {/* Base dot grid layer */}
      <div
        className="absolute inset-0 opacity-[0.18] animate-shimmer-dots"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Brighter dots only near cursor - masked so background stays dark */}
      {cursor && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
            opacity: 0.4,
            maskImage: `radial-gradient(circle 160px at ${cursor.x}px ${cursor.y}px, black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 160px at ${cursor.x}px ${cursor.y}px, black 0%, transparent 70%)`,
            maskSize: "100% 100%",
            maskPosition: "0 0",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            WebkitMaskPosition: "0 0",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-white leading-tight mb-5">
          Ready for less asking and more doing?
        </h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto mb-10">
          See how Cimba can transform your team&apos;s decision-making with
          consistent, trusted operational intelligence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="btn-primary px-8 py-0 text-[16px] font-semibold rounded-full transition-all shadow-lg"
          >
            See a Demo
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center justify-center gap-2 px-8 py-0 h-[42px] text-[16px] font-semibold rounded-full bg-white text-primary hover:bg-grey-100 transition-all"
          >
            Explore Product
          </Link>
        </div>
      </div>
    </section>
  );
}
