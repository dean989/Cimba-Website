"use client";

import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import CTASection from "@/components/CTASection";
import AnimatedGradientStroke from "@/components/AnimatedGradientStroke";
import CursorGradientSection from "@/components/CursorGradientSection";

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  hook: string;
  imageSrc: string;
  stats?: { value: string; label: string }[];
  challenge: string[];
  solution: string[];
  solutionBullets?: string[];
  howTheyUseIt: string[];
  howBullets?: string[];
  outcomes?: string[];
  quote: { text: string; author?: string };
  companyBlurb?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "ai-for-ams",
    eyebrow: "Business Operations",
    title: "AI for Account Managers and Merchants",
    subtitle:
      "How Swiggy Scaled Real-Time Merchant Intelligence Across 2,200 Users",
    hook: "Marketplace platforms rely on account managers to help merchants grow — but critical insights typically require analyst support. Cimba changed that.",
    imageSrc: "/case-studies/ai-for-ams.png",
    stats: [
      { value: "2,200", label: "Users onboarded in < 3 months" },
      { value: "10", label: "Business units" },
      { value: "< 1 week", label: "Time to launch new workflows" },
    ],
    challenge: [
      "Marketplace platforms rely heavily on account managers (AMs) to help merchants grow their business. At Swiggy, AMs each manage 50–100 restaurant partners and answer performance questions during live partner meetings.",
      "However, critical insights — such as why orders dropped, which promotions work, or which menu items drive growth — typically require analyst support. This creates delays that reduce the effectiveness of partner conversations and slow upsell opportunities.",
      "As the number of merchants grows into the tens of thousands, this gap between merchant data and merchant decisions becomes a major operational bottleneck.",
    ],
    solution: [
      "Swiggy deployed Cimba's \"AI for AM\" agent, enabling account managers to access real-time merchant intelligence directly from production data.",
      "The agent allows AMs to ask natural-language questions and run repeatable workflows such as:",
    ],
    solutionBullets: [
      "Degrowth analysis and root cause investigation",
      "Merchant performance diagnostics",
      "Growth opportunity identification",
      "Campaign and promotion performance analysis",
      "Next-best-action recommendations for merchant partners",
    ],
    howTheyUseIt: [
      "Swiggy's account managers use the AI for AM agent to analyze merchant performance and make data-driven decisions in real time.",
    ],
    howBullets: [
      "Why is a restaurant's order volume declining?",
      "What promotions drove the highest ROI for similar restaurants?",
      "Which cuisines are trending in a specific city?",
      "How did a merchant perform during a particular holiday period?",
    ],
    quote: {
      text: "Cimba enables our account managers to answer complex merchant questions instantly and take action during partner conversations.",
    },
    companyBlurb:
      "Swiggy is one of the largest food delivery platforms in the world, operating across 700+ cities in India and connecting millions of customers with restaurant partners.",
  },
  {
    id: "finops",
    eyebrow: "Financial Operations",
    title: "Automating Complex Finance Workflows with AI",
    subtitle: "Turning fragmented finance processes into governed, repeatable workflows",
    hook: "Finance teams operate across fragmented systems while managing highly repetitive, time-sensitive workflows. Cimba automates these with full transparency.",
    imageSrc: "/case-studies/finops.png",
    challenge: [
      "Finance teams operate across fragmented systems — ERPs, planning tools, spreadsheets, and internal databases — while managing highly repetitive, time-sensitive workflows.",
      "Critical processes such as flux analysis, expense monitoring, month-end close, tax reporting, and software capitalization require significant manual effort, cross-system reconciliation, and constant validation. These workflows are not only time-consuming but also error-prone and difficult to scale.",
      "As complexity grows, finance teams spend more time reconciling data and explaining discrepancies than driving insights — delaying decisions and reducing confidence in outputs.",
    ],
    solution: [
      "Cimba transforms financial operations by automating complex workflows using AI-driven, auditable processes grounded in how finance teams already operate.",
    ],
    solutionBullets: [
      "Automate flux analysis to identify period-over-period variances and explain key drivers with clear, repeatable logic",
      "Monitor travel & expense spend across categories and cost centers, proactively flagging budget overruns and policy exceptions",
      "Streamline month-end close and reconciliation, validating numbers across evolving systems and reducing manual effort",
      "Support tax due diligence and reporting, identifying inconsistencies and maintaining accurate cost center hierarchies",
      "Automate software capitalization workflows, ensuring consistency and compliance across financial reporting",
    ],
    howTheyUseIt: [
      "Finance teams use Cimba to run both recurring workflows and ad hoc analysis across core FinOps processes.",
    ],
    howBullets: [
      "Identifying and explaining drivers behind financial variances each reporting cycle",
      "Monitoring spend against budgets and detecting anomalies in real time",
      "Reconciling accounts and validating balances during close",
      "Investigating inconsistencies across tax structures and reporting hierarchies",
      "Automating classification and validation for capitalized software costs",
    ],
    outcomes: [
      "Significant reduction in manual effort across reconciliation and reporting workflows",
      "Faster close cycles and reporting timelines",
      "Improved accuracy and consistency across financial outputs",
      "Greater transparency and auditability for internal controls and compliance",
      "Higher confidence in financial insights, reducing back-and-forth analysis",
    ],
    quote: {
      text: "Cimba transformed how our finance team operates. What used to take days now happens in minutes with complete auditability.",
      author: "VP of Finance, Enterprise SaaS Company",
    },
  },
  {
    id: "risk-monitoring",
    eyebrow: "Risk & Underwriting",
    title: "Risk Monitoring & Write-Off Analysis",
    subtitle: "Scaling Trusted Risk Decisions with AI",
    hook: "Risk teams operate in data-rich environments yet remain constrained by slow analysis cycles and inconsistent outputs. Cimba makes risk analysis governed and repeatable.",
    imageSrc: "/case-studies/risk-monitoring.png",
    stats: [
      { value: "Real-time", label: "On-demand risk insights" },
      { value: "Governed", label: "Consistent logic across teams" },
      { value: "Audit-ready", label: "Transparent outputs" },
    ],
    challenge: [
      "Modern risk and underwriting teams operate in data-rich environments, yet decision-making remains constrained by slow analysis cycles and inconsistent outputs.",
      "At fintech companies like iCreditWorks, evaluating credit performance, identifying emerging risks, and understanding drivers behind write-offs require combining multiple datasets, applying complex logic, and generating clear explanations.",
      "In practice, this leads to fragile ad hoc analyses, inconsistent metrics, and a lack of trust in outputs — delaying decisions and increasing risk exposure.",
    ],
    solution: [
      "iCreditWorks deployed Cimba to transform risk monitoring into a governed, repeatable, and scalable workflow.",
    ],
    solutionBullets: [
      "Continuously monitor risk signals and portfolio performance, identifying anomalies before they become write-offs",
      "Perform step-by-step analysis of credit applications and portfolio segments with consistent, approved logic",
      "Break down complex risk decisions into transparent, auditable steps",
      "Generate clear, explainable outputs that support faster decisions and regulatory scrutiny",
    ],
    howTheyUseIt: [
      "Risk and analytics teams at iCreditWorks use Cimba to standardize and automate key workflows, including:",
    ],
    howBullets: [
      "Analyzing credit applications with step-by-step, explainable logic",
      "Monitoring portfolio performance and identifying emerging risk signals",
      "Investigating drivers behind delinquencies and write-offs",
      "Generating consistent, audit-ready narratives for internal and external stakeholders",
    ],
    outcomes: [
      "Faster risk analysis cycles with real-time, on-demand insights",
      "Consistent and governed analytical logic across teams",
      "Improved trust in outputs through transparency and auditability",
      "Proactive identification of risk signals, reducing potential losses",
      "Scalable analytics workflows without increasing reliance on specialized teams",
    ],
    quote: {
      text: "We finally have AI we can audit. Cimba gave us the confidence to operationalize intelligence across our org.",
      author: "Director of Business Operations, High-Growth Startup",
    },
    companyBlurb:
      "iCreditWorks is a fintech platform focused on providing flexible financing solutions, where accurate and timely risk analysis is critical to maintaining portfolio performance and minimizing losses.",
  },
];

function ExpandableCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <div
      id={study.id}
      className="scroll-mt-24 border border-grey-200 rounded-2xl bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md"
    >
      {/* Summary — always visible */}
      <div className="p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-5">
              <div className="relative w-[250px] h-[250px] rounded-xl overflow-hidden border border-grey-200 flex-shrink-0">
                <Image
                  src={study.imageSrc}
                  alt={`${study.title} hero image`}
                  fill
                  className="object-cover"
                  sizes="250px"
                  unoptimized
                />
              </div>
              <div className="min-w-0 sm:flex-1 sm:self-stretch sm:flex sm:flex-col sm:justify-center">
                <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                  {study.eyebrow}
                </p>
                <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-2">
                  {study.title}
                </h2>
                <p className="text-[18px] italic text-grey-500 leading-relaxed">
                  {study.subtitle}
                </p>
              </div>
            </div>
            <p className="text-[20px] text-grey-600 leading-relaxed max-w-3xl mb-4">
              {study.hook}
            </p>
          </div>

        </div>

        {/* Above-the-fold challenge summary — gradient stroke on scroll (matches StrokeSectionTitle) */}
        <div className="mt-8 pt-2">
          <AnimatedGradientStroke className="mb-8" />
          <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
            The Challenge
          </h3>
          <p className="text-[20px] text-grey-600 leading-relaxed">
            {study.challenge[0]}
          </p>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-full border border-grey-200 bg-white px-5 py-2 text-[16px] font-semibold text-primary transition-colors hover:bg-grey-50"
            >
              {open ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable detail */}
      <div
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div ref={contentRef}>
          <div className="px-8 sm:px-10 lg:px-12 pb-10 lg:pb-12">
            <div className="border-t border-grey-200 pt-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left column */}
                <div>
                  {study.companyBlurb && (
                    <div
                      className="mb-8 rounded-xl p-[2px]"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(31, 151, 211, 0.4), rgba(116, 20, 218, 0.4) 47%, rgba(7, 112, 227, 0.4))",
                      }}
                    >
                      <div className="rounded-[10px] bg-white px-5 py-5">
                        <p className="text-[18px] text-grey-600 leading-relaxed italic">
                          {study.companyBlurb}
                        </p>
                      </div>
                    </div>
                  )}

                  <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                    The Challenge (continued)
                  </h3>
                  {study.challenge.slice(1).map((p, i) => (
                    <p
                      key={i}
                      className="text-[16px] text-grey-600 leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}

                  <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4 mt-8">
                    The Cimba Solution
                  </h3>
                  {study.solution.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16px] text-grey-600 leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}
                  {study.solutionBullets && (
                    <ul className="space-y-2.5 text-[16px] text-grey-700 mb-4">
                      {study.solutionBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right column */}
                <div>
                  <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                    How They Use Cimba
                  </h3>
                  {study.howTheyUseIt.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16px] text-grey-600 leading-relaxed mb-4"
                    >
                      {p}
                    </p>
                  ))}
                  {study.howBullets && (
                    <ul className="space-y-2.5 text-[16px] text-grey-700 mb-4">
                      {study.howBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {study.outcomes && (
                    <>
                      <h3 className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4 mt-8">
                        Outcomes
                      </h3>
                      <ul className="space-y-2.5 text-[16px] text-grey-700 mb-4">
                        {study.outcomes.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Quote */}
                  <div
                    className="mt-8 rounded-xl p-[2px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(31, 151, 211, 0.4), rgba(116, 20, 218, 0.4) 47%, rgba(7, 112, 227, 0.4))",
                    }}
                  >
                    <div className="rounded-[10px] bg-white px-6 py-6">
                      <blockquote className="text-[18px] text-grey-700 leading-relaxed italic">
                        &ldquo;{study.quote.text}&rdquo;
                      </blockquote>
                      {study.quote.author && (
                        <p className="text-[18px] text-grey-500 mt-3">
                          — {study.quote.author}
                        </p>
                      )}
                    </div>
                  </div>

                  {study.stats && (
                    <div
                      className={
                        study.id === "risk-monitoring"
                          ? "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
                          : "mt-8 flex flex-col gap-3"
                      }
                    >
                      {study.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="min-w-0 rounded-xl border border-grey-200 bg-grey-50 px-4 py-4 sm:px-5"
                        >
                          <p
                            className={`font-normal leading-none ${
                              study.id === "ai-for-ams" ||
                              study.id === "risk-monitoring"
                                ? "text-[50px] text-blue-500"
                                : "text-2xl text-grey-900"
                            }`}
                          >
                            {stat.value}
                          </p>
                          <p className="text-[16px] text-grey-500 mt-2 leading-relaxed">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-grey-50"
        style={{
          backgroundImage: "url('/use-cases-hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-grey-50" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-16 lg:pt-44 lg:pb-20">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-grey-900 leading-tight mb-6 max-w-4xl">
            Real teams. Real workflows. Real outcomes.
          </h1>
          <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl">
            See how organizations use Cimba to turn complex, manual processes
            into governed, repeatable intelligence.
          </p>
        </div>
      </section>

      {/* Case Studies — same cursor gradient treatment as Integrations */}
      <CursorGradientSection className="pb-20 lg:pb-28">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <ExpandableCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </CursorGradientSection>

      <CTASection />
    </>
  );
}
