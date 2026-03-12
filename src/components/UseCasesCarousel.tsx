"use client";

import { useState } from "react";

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
    id: "accounting",
    label: "Accounting",
    eyebrow: "Finance · Close",
    title: "Close & Reconciliation",
    paragraphs: [
      "Accounting teams rely on manual, spreadsheet-driven processes for reconciliations, validations, and anomaly detection—often under tight close timelines. Frequent data changes increase risk, create rework, and make it difficult to explain discrepancies when they matter most.",
      "Cimba automates core accounting workflows using explainable, repeatable logic that mirrors existing close processes—without introducing black boxes. It continuously validates balances, flags anomalies like negative asset balances and unexpected movements before issues escalate, and explains differences in clear, natural language to accelerate review.",
    ],
    bullets: [
      "Validates balances and flags anomalies before issues escalate",
      "Explains differences in clear, natural language to accelerate review",
      "Mirrors existing close processes without introducing black boxes",
    ],
    imageSrc: "/hero-reconciliation.png",
  },
  {
    id: "flux",
    label: "Flux Analysis",
    eyebrow: "Finance · FP&A",
    title: "Flux Analysis",
    paragraphs: [
      "Each close cycle, finance teams spend days manually investigating period-over-period variances across multiple systems. The process is repetitive, difficult to scale, and often delays clear explanations for leadership.",
      "Cimba automates flux analysis by connecting directly to source systems and applying explainable, repeatable logic—turning variance analysis into a fast, reliable workflow.",
    ],
    bullets: [
      "Instantly surfaces the true drivers of variances, reducing manual investigation and close-cycle effort",
      "Analyzes changes across accounts, entities, cost centers, and dimensions with consistent explanations every period",
      "Generates clear, natural-language narratives reusable in management reporting and leadership reviews",
      "Extends analysis beyond internal data when needed—industry or macro trends—to provide context, not just numbers",
    ],
    imageSrc: "/hero-flux.png",
  },
  {
    id: "pl",
    label: "P&L Scenario Modeling",
    eyebrow: "FP&A · Leadership",
    title: "P&L Scenario Modeling",
    paragraphs: [
      "P&L scenario analysis is a bottleneck for FP&A teams. Assumptions live across planning tools and spreadsheets, and answering leadership's \"what if\" questions often requires rebuilding models, reconciling inputs, and waiting days for analysis.",
      "Cimba integrates with your existing planning and financial systems to turn scenario modeling into an on-demand, trusted workflow—empowering leadership to explore scenarios and evaluate tradeoffs.",
    ],
    bullets: [
      "Instantly models P&L impact of pricing changes, headcount shifts, and large deals without rebuilding underlying models",
      "Leverages existing assumptions and drivers from systems like Anaplan, keeping scenarios grounded in approved planning logic",
      "Explains outcomes in clear, natural language so leaders understand not just the result, but the drivers behind it",
    ],
    imageSrc: "/hero-flux.png",
  },
  {
    id: "account-managers",
    label: "AI for Account Managers",
    eyebrow: "Sales · Customer Success",
    title: "AI for Account Managers",
    paragraphs: [
      "Account managers juggle multiple systems to understand health, usage, and expansion opportunities. Answering \"why did this account churn?\" or \"which accounts should we prioritize?\" often means manual pulls, spreadsheets, and delayed answers.",
      "Cimba connects CRM, product, and billing data so account managers get governed, repeatable answers in natural language—health summaries, risk flags, and expansion playbooks they can trust and act on.",
    ],
    bullets: [
      "Surfaces health and risk signals from usage, support, and billing in one place",
      "Explains churn and expansion drivers in clear language for exec and customer conversations",
      "Delivers consistent playbooks and next-best actions without ad-hoc analysis",
    ],
    imageSrc: "/hero-flux.png",
  },
];

export default function UseCasesCarousel() {
  const [activeId, setActiveId] = useState(useCases[1].id); // default Flux Analysis
  const active = useCases.find((u) => u.id === activeId) ?? useCases[0];

  return (
    <section className="bg-grey-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left: Use Cases nav */}
          <div className="flex-shrink-0 lg:w-[240px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight mb-6">
              Use Cases
            </h2>
            <nav className="flex flex-col gap-1.5" aria-label="Use cases">
              {useCases.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => setActiveId(u.id)}
                  className={`text-left px-5 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    activeId === u.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-grey-700 hover:bg-grey-100 border border-grey-200"
                  }`}
                >
                  {u.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Content + image */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl border border-grey-200 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 sm:p-10 lg:p-12 flex items-center">
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold text-grey-900 leading-tight mb-5">
                    {active.title}
                  </h2>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                    {active.paragraphs[0]}
                  </p>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-8">
                    {active.paragraphs[1]}
                  </p>
                  <ul className="space-y-2.5 text-[14px] text-grey-700">
                    {active.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-[340px] flex-shrink-0 min-h-[280px] bg-grey-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
