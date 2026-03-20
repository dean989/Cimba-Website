"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

export type IntegrationItem = { name: string; icon: string };
export type DataCategory = { category: string; items: IntegrationItem[] };

type StrokePhase = "empty" | "filling" | "full" | "pulling-back";

type Props = { dataCategories: DataCategory[] };

export default function IntegrationsSection({ dataCategories }: Props) {
  const mcpServerIntegrations: IntegrationItem[] = [
    { name: "Glean", icon: "/integrations/glean.png" },
    { name: "Notion", icon: "/integrations/notion-mcp.png" },
    { name: "Cloudflare", icon: "/integrations/cloudflare.png" },
    { name: "GitHub", icon: "/integrations/github.png" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const strokeTrackRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [strokePhase, setStrokePhase] = useState<StrokePhase>("empty");

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
    <section
      id="integrations-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-grey-50 py-16 lg:py-20 relative overflow-hidden scroll-mt-24"
    >
      {/* Base gradient – more visible */}
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
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
          Integrations
        </p>
        <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-3 max-w-2xl">
          What data does Cimba connect to?
        </h2>
        <div className="mb-12 w-fit max-w-2xl">
          <h3 className="text-lg font-normal text-grey-500 leading-relaxed">
            Cimba is designed to work with the systems teams already rely on.
          </h3>
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
        <div className="flex flex-wrap gap-2 mb-10">
          {dataCategories.flatMap((cat) => cat.items).map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 px-5 py-1.5 bg-white border border-grey-200 rounded-xl transition-transform transition-shadow duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="object-contain flex-shrink-0"
                unoptimized
              />
              <span className="text-[16px] font-medium text-grey-700 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
            MCP SERVER
          </h3>
          <p className="text-[16px] text-grey-600 leading-relaxed max-w-4xl mb-4">
            Cimba provides an MCP server that exposes agents, workflows, and
            data connections through a structured interface. This allows
            interoperability with external AI systems, agents, and tools. Here
            are just a few of the tools that users are connecting to with our
            MCP server.
          </p>
          <div className="flex flex-wrap gap-2">
            {mcpServerIntegrations.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-5 py-1.5 bg-white border border-grey-200 rounded-xl transition-transform transition-shadow duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-contain flex-shrink-0"
                  unoptimized
                />
                <span className="text-[16px] font-medium text-grey-700 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
