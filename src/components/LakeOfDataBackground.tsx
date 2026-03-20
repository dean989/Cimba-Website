"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Stroke = { x: number; y: number; t: number };

const FADE_DURATION = 1500; // 1.5s slow fade
const BRUSH_RADIUS = 220;
const MAX_HOVER_ALPHA = 0.5; // cap hover layer strength
const MAX_STROKES = 80;

export default function LakeOfDataBackground() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const rafRef = useRef(0);
  const [maskImage, setMaskImage] = useState<string>("none");

  const buildMask = useCallback(() => {
    const now = performance.now();

    // Only strokes that are still within the fade window contribute.
    const cutoff = now - FADE_DURATION;
    strokesRef.current = strokesRef.current.filter((s) => s.t > cutoff);

    const active = strokesRef.current;
    if (active.length === 0) {
      setMaskImage("none");
      return;
    }

    // Opacity decays per stroke over time (independent of cursor movement).
    const gradients = active.map((s) => {
      const age = now - s.t; // 0..FADE_DURATION
      const t = Math.min(1, Math.max(0, age / FADE_DURATION));
      const opacity = MAX_HOVER_ALPHA * (1 - t);
      return `radial-gradient(circle ${BRUSH_RADIUS}px at ${s.x}px ${s.y}px, rgba(0,0,0,${opacity.toFixed(
        3
      )}) 0%, transparent 100%)`;
    });

    setMaskImage(gradients.join(", "));
  }, []);

  const tick = useCallback(() => {
    buildMask();
    rafRef.current = requestAnimationFrame(tick);
  }, [buildMask]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  // Attach mousemove/touchmove to the parent <section> so events fire
  // even when the pointer is over z-elevated content above us.
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const section = bg.closest("section");
    if (!section) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = bg.getBoundingClientRect();
      let clientX: number, clientY: number;
      if ("touches" in e) {
        const t = e.touches[0];
        if (!t) return;
        clientX = t.clientX;
        clientY = t.clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      strokesRef.current.push({
        x: clientX - rect.left,
        y: clientY - rect.top,
        t: performance.now(),
      });

      if (strokesRef.current.length > MAX_STROKES) {
        strokesRef.current.shift();
      }
    };

    section.addEventListener("mousemove", onMove as EventListener);
    section.addEventListener("touchmove", onMove as EventListener, {
      passive: true,
    });
    return () => {
      section.removeEventListener("mousemove", onMove as EventListener);
      section.removeEventListener("touchmove", onMove as EventListener);
    };
  }, []);

  const svgBg = (url: string): React.CSSProperties => ({
    backgroundImage: `url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Base layer — always visible */}
      <div
        className="absolute inset-0"
        style={svgBg("/lake-of-data1-base.svg")}
      />

      {/* Hover layer — revealed by cursor mask */}
      <div
        className="absolute inset-0"
        style={{
          ...svgBg("/lake-of-data1-hover.svg"),
          opacity: maskImage === "none" ? 0 : 1,
          WebkitMaskImage: maskImage === "none" ? "none" : maskImage,
          maskImage: maskImage === "none" ? "none" : maskImage,
          WebkitMaskComposite: "source-over",
          maskComposite: "add",
        }}
      />
    </div>
  );
}
