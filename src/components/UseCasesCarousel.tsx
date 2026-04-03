"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type UseCaseSlide = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string];
  bullets: string[];
  imageSrc: string;
};

const useCases: UseCaseSlide[] = [
  {
    id: "ai-for-ams",
    label: "AI for Account Managers",
    eyebrow: "Business Operations",
    title: "AI for Account Managers",
    paragraphs: [
      "Marketplace platforms rely on account managers to help merchants grow — but critical insights typically require analyst support. Cimba changed that.",
      "",
    ],
    bullets: [],
    imageSrc: "/case-studies/ai-for-ams.png",
  },
  {
    id: "finops",
    label: "Accounting Automation",
    eyebrow: "Financial Operations",
    title: "Financial Operations",
    paragraphs: [
      "Finance teams operate across fragmented systems while managing highly repetitive, time-sensitive workflows. Cimba automates these with full transparency.",
      "",
    ],
    bullets: [],
    imageSrc: "/case-studies/finops.png",
  },
  {
    id: "risk-monitoring",
    label: "Risk Monitoring",
    eyebrow: "Risk & Underwriting",
    title: "Risk Monitoring",
    paragraphs: [
      "Risk teams operate in data-rich environments yet remain constrained by slow analysis cycles and inconsistent outputs. Cimba makes risk analysis governed and repeatable.",
      "",
    ],
    bullets: [],
    imageSrc: "/case-studies/risk-monitoring.png",
  },
];

export default function UseCasesCarousel() {
  const [activeId, setActiveId] = useState(useCases[0].id); // default first use case
  const active = useCases.find((u) => u.id === activeId) ?? useCases[0];

  return (
    <section
      id="use-cases"
      className="bg-white py-12 scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left: stepper (Core Primitives style) */}
          <div className="flex-shrink-0 lg:w-[380px]">
            <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-8 max-w-xl">
              How Teams Use Cimba
            </h2>
            <div className="flex flex-col gap-3" role="group" aria-label="Use cases">
              {useCases.map((u) => {
                const isActive = activeId === u.id;
                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setActiveId(u.id)}
                    className={`text-left rounded-2xl p-5 transition-all duration-300 ease-out overflow-hidden bg-white ${
                      isActive
                        ? "shadow-md"
                        : "hover:bg-grey-50 hover:border-grey-300 group"
                    }`}
                    style={{
                      border: isActive
                        ? "2px solid #0770E3"
                        : "1px solid #D1D5DB",
                    }}
                  >
                    <span
                      className={`block transition-all duration-[150ms] ease-out ${
                        isActive
                          ? "font-medium text-[19px]"
                          : "font-normal text-grey-600 text-[17px] group-hover:text-[#0770E3]"
                      }`}
                      style={isActive ? { color: "#0770E3" } : undefined}
                    >
                      {u.eyebrow}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Content + image */}
          <div
            className="flex-1 min-w-0 rounded-2xl border-2 bg-white shadow-sm overflow-hidden"
            style={{ borderColor: "#0770E3" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row h-full"
              >
                <div className="order-2 lg:order-1 flex-1 w-full min-w-[302px] h-[220px] sm:h-[260px] lg:h-[285px] p-8 sm:p-10 lg:p-12 flex flex-col">
                  <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                    {active.title}
                  </h2>
                  <p className="text-[16px] text-grey-600 leading-relaxed mb-4">
                    {active.paragraphs[0]}
                  </p>
                  {active.paragraphs[1] &&
                    active.paragraphs[1].trim().length > 0 && (
                      <p className="text-[16px] text-grey-600 leading-relaxed mb-8">
                        {active.paragraphs[1]}
                      </p>
                    )}
                  <ul className="space-y-2.5 text-[16px] text-grey-700">
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/use-cases#${active.id}`}
                    className="mt-auto inline-flex w-fit text-[16px] font-medium text-primary transition-colors hover:text-primary-dark"
                  >
                    See more
                  </Link>
                </div>
                <div className="order-1 lg:order-2 relative w-full aspect-square bg-grey-100 lg:flex-[0_0_285px] overflow-hidden group">
                  <Image
                    src={active.imageSrc}
                    alt=""
                    fill
                    className="object-cover object-top object-right origin-left transition-transform duration-500 ease-out group-hover:scale-[1.12] transform-gpu will-change-[transform]"
                    sizes="(max-width: 1024px) 100vw, 468px"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
