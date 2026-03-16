"use client";

import { useRef, useState, useCallback } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CursorGradientSection({ children, className = "" }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursor(null);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-grey-50 relative overflow-hidden ${className}`}
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
