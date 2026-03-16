"use client";

import { useState } from "react";
import Image from "next/image";

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
    id: "ai-account-managers",
    label: "AI for Account Managers",
    eyebrow: "Sales · Customer Success",
    title: "AI for Account Managers",
    paragraphs: [
      "Give account managers instant access to performance insights for their customers or partners. Diagnose growth trends, answer ad-hoc questions, and identify upsell opportunities in real time.",
      "",
    ],
    bullets: [],
    imageSrc: "/use-cases-am.png",
  },
  {
    id: "accounting-automation",
    label: "Accounting Automation",
    eyebrow: "Finance · Close",
    title: "Accounting Automation",
    paragraphs: [
      "Automate reconciliations, anomaly detection, and close workflows across spreadsheets and financial systems. Cimba validates numbers, flags irregularities, and explains changes automatically.",
      "",
    ],
    bullets: [],
    imageSrc: "/use-cases-accounting-v2.png",
  },
  {
    id: "risk-monitoring",
    label: "Risk Monitoring",
    eyebrow: "Finance · Risk",
    title: "Risk Monitoring",
    paragraphs: [
      "Continuously analyze operational and financial data to detect anomalies and emerging risks. Cimba identifies patterns, explains root causes, and helps teams act before issues escalate.",
      "",
    ],
    bullets: [],
    imageSrc: "/use-cases-risk-v2.png",
  },
];

export default function UseCasesCarousel() {
  const [activeId, setActiveId] = useState(useCases[0].id); // default first use case
  const active = useCases.find((u) => u.id === activeId) ?? useCases[0];

  return (
    <section className="bg-grey-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          {/* Left: stepper (Core Primitives style) */}
          <div className="flex-shrink-0 lg:w-[380px]">
            <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-2">
              Use Cases
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-8 max-w-xl">
              See how teams use Cimba
            </h2>
            <div className="flex flex-col gap-3" role="group" aria-label="Use cases">
              {useCases.map((u) => {
                const isActive = activeId === u.id;
                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setActiveId(u.id)}
                    className={`text-left rounded-2xl border-2 p-5 transition-all duration-300 ease-out overflow-hidden ${
                      isActive
                        ? "border-transparent shadow-md"
                        : "border-grey-200 bg-white hover:border-grey-300 hover:bg-grey-50"
                    }`}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(31, 151, 211, 0.4), rgba(116, 20, 218, 0.4) 47%, rgba(7, 112, 227, 0.4)) border-box",
                            backgroundClip: "padding-box, border-box",
                          }
                        : undefined
                    }
                  >
                    <span
                      className={`block transition-all duration-300 ease-out ${
                        isActive
                          ? "font-bold text-primary text-2xl"
                          : "font-normal text-grey-900 text-[17px]"
                      }`}
                    >
                      {u.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Content + image */}
          <div
            className="flex-1 min-w-0 rounded-2xl border-2 border-transparent shadow-sm overflow-hidden flex flex-col lg:flex-row"
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(31, 151, 211, 0.4), rgba(116, 20, 218, 0.4) 47%, rgba(7, 112, 227, 0.4)) border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div className="flex-1 w-full min-w-0 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                {active.title}
              </h2>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                {active.paragraphs[0]}
              </p>
              {active.paragraphs[1] && active.paragraphs[1].trim().length > 0 && (
                <p className="text-[15px] text-grey-600 leading-relaxed mb-8">
                  {active.paragraphs[1]}
                </p>
              )}
              <ul className="space-y-2.5 text-[14px] text-grey-700">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full lg:w-[468px] flex-shrink-0 min-h-[280px] lg:min-h-0 lg:self-stretch bg-grey-100">
              <Image
                src={active.imageSrc}
                alt=""
                fill
                className="object-cover object-top object-right"
                sizes="(max-width: 1024px) 100vw, 468px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
