 "use client";

import { useRef, useState, useEffect, useCallback } from "react";

type StrokePhase = "empty" | "filling" | "full" | "pulling-back";

type Props = {
  title: string;
  containerClassName?: string;
  titleClassName?: string;
};

export default function StrokeSectionTitle({
  title,
  containerClassName = "",
  titleClassName = "",
}: Props) {
  const strokeTrackRef = useRef<HTMLDivElement>(null);
  const [strokePhase, setStrokePhase] = useState<StrokePhase>("empty");

  useEffect(() => {
    const el = strokeTrackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        const ratio = e.intersectionRatio;
        setStrokePhase((prev) => {
          if (ratio >= 0.2) {
            if (prev === "empty") return "filling";
            return prev;
          }
          if (ratio < 0.2 && (prev === "full" || prev === "filling")) {
            return "pulling-back";
          }
          return prev;
        });
      },
      { threshold: [0, 0.1, 0.2, 0.5, 0.8, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleStrokeFillEnd = useCallback(() => {
    setStrokePhase("full");
  }, []);

  const handleStrokePullBackEnd = useCallback(() => {
    setStrokePhase("empty");
  }, []);

  return (
    <div className={`mb-12 w-fit max-w-2xl ${containerClassName}`}>
      <h2 className={titleClassName}>{title}</h2>
      <div
        ref={strokeTrackRef}
        className="mt-2 h-0.5 w-full rounded-full overflow-hidden bg-grey-200"
      >
        <div
          className={`h-full rounded-full origin-left ${
            strokePhase === "filling" ? "animate-gradient-stroke-fill-in" : ""
          } ${
            strokePhase === "pulling-back"
              ? "transition-[width] duration-500 ease-out"
              : ""
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgb(31, 151, 211), rgb(116, 20, 218) 47%, rgb(7, 112, 227))",
            width:
              strokePhase === "empty" || strokePhase === "pulling-back"
                ? "0%"
                : strokePhase === "full"
                  ? "100%"
                  : undefined,
          }}
          onAnimationEnd={
            strokePhase === "filling" ? handleStrokeFillEnd : undefined
          }
          onTransitionEnd={
            strokePhase === "pulling-back"
              ? handleStrokePullBackEnd
              : undefined
          }
        />
      </div>
    </div>
  );
}

