"use client";

import { useRef, useState, useCallback, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  riseOnScroll?: boolean;
  id?: string;
};

const riseObserverOptions: IntersectionObserverInit = {
  rootMargin: "-80px 0px -80px 0px",
  threshold: 0.1,
};

export default function CursorGradientSection({
  children,
  className = "",
  riseOnScroll = false,
  id,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [inView, setInView] = useState(false);
  const hoverCursorRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!riseOnScroll) return;
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, riseObserverOptions);
    observer.observe(el);
    return () => observer.disconnect();
  }, [riseOnScroll]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    hoverCursorRef.current = next;
    setCursor(next);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverCursorRef.current = null;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId = 0;
    let running = true;
    const start = performance.now();
    let lastUpdate = 0;

    const animate = (now: number) => {
      if (!running) return;
      const rect = el.getBoundingClientRect();
      const t = (now - start) / 1000;

      // Slow figure-eight drift so mobile has a subtle moving glow.
      const xNorm = 0.5 + 0.28 * Math.sin(t * 0.22);
      const yNorm = 0.5 + 0.18 * Math.sin(t * 0.35 + 0.9);

      // Throttle updates to reduce unnecessary re-renders.
      if (now - lastUpdate > 33) {
        lastUpdate = now;
        const hover = hoverCursorRef.current;

        // If hovering, keep the glow following the pointer but add a tiny drift.
        if (hover) {
          const driftX = rect.width * 0.01 * Math.sin(t * 0.9);
          const driftY = rect.height * 0.01 * Math.cos(t * 0.8);
          setCursor({ x: hover.x + driftX, y: hover.y + driftY });
        } else {
          setCursor({ x: rect.width * xNorm, y: rect.height * yNorm });
        }
      }

      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      running = false;
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-grey-50 relative overflow-hidden scroll-mt-24 ${riseOnScroll ? "cursor-gradient-rise-section" : ""} ${riseOnScroll && inView ? "in-view" : ""} ${className}`}
    >
      {/* Base gradient – matches Integrations section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(7, 112, 227, 0.18), transparent 55%), radial-gradient(ellipse 70% 60% at 70% 70%, rgba(20, 184, 166, 0.12), transparent 50%)",
        }}
      />
      {/* Cursor-following glow */}
      {cursor && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 900px at ${cursor.x}px ${cursor.y}px, rgba(7, 112, 227, 0.11) 0%, rgba(20, 184, 166, 0.06) 35%, transparent 60%)`,
          }}
        />
      )}
      {children}
    </section>
  );
}
