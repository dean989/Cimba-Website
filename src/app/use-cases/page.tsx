import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — Cimba",
  description:
    "Explore how Cimba powers critical workflows in accounting, finance, risk, and operations with AI-driven intelligence.",
};

function ImagePlaceholder({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`w-full h-full min-h-[220px] rounded-2xl flex items-center justify-center ${
        dark
          ? "bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10"
          : "bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200"
      }`}
    >
      <div className="text-center">
        <div
          className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
            dark ? "bg-white/10" : "bg-grey-200"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={dark ? "rgba(255,255,255,0.4)" : "#9ca3af"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p
          className={`text-[12px] font-medium ${
            dark ? "text-white/30" : "text-grey-400"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default function UseCasesPage() {
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
        {/* Bottom fade-out for background image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-grey-50" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-grey-900 leading-tight mb-6 max-w-3xl">
            Trusted AI for the workflows that matter most
          </h1>
          <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl">
            From close-cycle automation to real-time account intelligence,
            Cimba turns manual processes into governed, repeatable workflows.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-start">

            {/* ── Flux Analysis — hero tile, text left / image right ── */}
            <div className="lg:col-span-12 rounded-2xl border border-grey-200 bg-white p-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                <div className="lg:w-1/2">
                  <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                    Finance &middot; FP&A
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-5">
                    Flux Analysis
                  </h2>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                    Each close cycle, finance teams spend days manually
                    investigating period-over-period variances across multiple
                    systems. The process is repetitive, difficult to scale, and
                    often delays clear explanations for leadership.
                  </p>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-8">
                    Cimba automates flux analysis by connecting directly to
                    source systems and applying explainable, repeatable
                    logic&mdash;turning variance analysis into a fast, reliable
                    workflow.
                  </p>
                  <ul className="space-y-2.5 text-[16px] text-grey-700">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      Instantly surfaces the true drivers of variances, reducing manual investigation and close-cycle effort
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      Analyzes changes across accounts, entities, cost centers, and dimensions with consistent explanations every period
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      Generates clear, natural-language narratives reusable in management reporting and leadership reviews
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      Extends analysis beyond internal data when needed&mdash;industry or macro trends&mdash;to provide context, not just numbers
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <ImagePlaceholder label="Flux analysis workflow" />
                </div>
              </div>
            </div>

            {/* ── P&L Scenario Modeling — bento-dark tile, problem/solution + stats ── */}
            <div className="lg:col-span-5 rounded-2xl border border-grey-200 bg-bento-dark p-8 flex flex-col justify-between min-h-[520px]">
              <div>
                <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                  FP&A &middot; Leadership
                </p>
                <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                  P&L Scenario Modeling
                </h2>
                <p className="text-[15px] text-grey-700 leading-relaxed mb-4">
                  P&L scenario analysis is a bottleneck for FP&A teams.
                  Assumptions live across planning tools and spreadsheets, and
                  answering leadership&apos;s &ldquo;what if&rdquo; questions
                  often requires rebuilding models, reconciling inputs, and
                  waiting days for analysis.
                </p>
                <p className="text-[15px] text-grey-700 leading-relaxed mb-6">
                  Cimba integrates with your existing planning and financial
                  systems to turn scenario modeling into an on-demand, trusted
                  workflow&mdash;empowering leadership to explore scenarios and
                  evaluate tradeoffs.
                </p>
                <ul className="space-y-2.5 text-[16px] text-grey-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Instantly models P&L impact of pricing changes, headcount shifts, and large deals without rebuilding underlying models
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Leverages existing assumptions and drivers from systems like Anaplan, keeping scenarios grounded in approved planning logic
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Explains outcomes in clear, natural language so leaders understand not just the result, but the drivers behind it
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex gap-10 border-t border-grey-300 pt-8">
                <div>
                  <p className="text-[40px] font-normal text-grey-900 leading-none">
                    10&times;
                  </p>
                  <p className="text-[13px] text-grey-700 mt-1">
                    faster scenario turnaround
                  </p>
                </div>
                <div>
                  <p className="text-[40px] font-normal text-grey-900 leading-none">
                    0
                  </p>
                  <p className="text-[13px] text-grey-700 mt-1">
                    models to rebuild
                  </p>
                </div>
              </div>
            </div>

            {/* ── Accounting — image top, problem/solution below ── */}
            <div className="lg:col-span-7 rounded-2xl border border-primary/30 bg-primary p-8 flex flex-col min-h-[520px]">
              <div className="flex-1 mb-8">
                <div className="relative w-full aspect-[728/371] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
                  <Image
                    src="/close-reconciliation.png"
                    alt="Close & Reconciliation dashboard"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-normal text-white leading-tight mb-4">
                  Close & Reconciliation
                </h2>
                <p className="text-[15px] text-white/85 leading-relaxed mb-4">
                  Accounting teams rely on manual, spreadsheet-driven processes
                  for reconciliations, validations, and anomaly
                  detection&mdash;often under tight close timelines. Frequent
                  data changes increase risk, create rework, and make it
                  difficult to explain discrepancies when they matter most.
                </p>
                <p className="text-[15px] text-white/85 leading-relaxed">
                  Cimba automates core accounting workflows using explainable,
                  repeatable logic that mirrors existing close
                  processes&mdash;without introducing black boxes. It
                  continuously validates balances, flags anomalies like negative
                  asset balances and unexpected movements before issues
                  escalate, and explains differences in clear, natural language
                  to accelerate review.
                </p>
              </div>
            </div>

            {/* ── Risk Monitoring — image top, story below (matches Close & Reconciliation layout) ── */}
            <div className="lg:col-span-8 rounded-2xl border border-grey-200 bg-white p-8 flex flex-col">
              <div className="mb-8">
                <div className="relative w-full max-w-[380px] aspect-[1024/737] rounded-2xl overflow-hidden border border-grey-200 bg-grey-50">
                  <Image
                    src="/use-cases-risk-v2.png"
                    alt="Risk monitoring dashboard"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                  Risk Monitoring & Write-Off Analysis
                </h2>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                  Risk and analytics teams operate in data-rich environments but remain
                  constrained by slow analysis cycles, fragile logic, inconsistent
                  metrics, and limited confidence in outputs&mdash;leading to delayed
                  actions, inconsistent decisions, and elevated risk exposure.
                </p>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-6">
                  Cimba transforms risk analysis into a governed, repeatable workflow
                  that delivers timely insight without sacrificing accuracy or
                  explainability.
                </p>
                <ul className="space-y-2.5 text-[16px] text-grey-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Continuously monitors risk signals and portfolio performance,
                    surfacing emerging issues before they become write-offs
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Applies consistent, approved logic across analyses, eliminating
                    one-off models and metric drift
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Generates clear, explainable outputs that support faster decisions,
                    reviews, and regulatory scrutiny
                  </li>
                </ul>
              </div>
            </div>

            {/* ── T&E Expense — bento-dark compact tile with full story ── */}
            <div className="lg:col-span-4 lg:self-start rounded-2xl border border-grey-200 bg-bento-dark p-8 flex flex-col gap-8">
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                  Expense &middot; Monitoring
                </p>
                <h2 className="text-xl sm:text-2xl font-normal text-grey-900 leading-tight mb-5">
                  T&E Expense Analysis
                </h2>
                <p className="text-[15px] text-grey-700 leading-relaxed mb-6">
                  Expenses, budgets, and forecasts stored across different
                  systems with no central monitoring make most actions
                  reactive&mdash;issues surface only after the damage is done.
                </p>
                <ul className="space-y-2.5 text-[16px] text-grey-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Proactive monitoring and alerting rather than reactive follow-up
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Full transparency into workflow steps and underlying code, with natural language explanations for non-technical users
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Complex monitoring rules created using natural language&mdash;no engineering required
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[13px] text-grey-700">
                  Always-on alerting
                </p>
              </div>
            </div>

            {/* ── AI for Account Managers — full-width case study, image left ── */}
            <div className="lg:col-span-12 rounded-2xl border border-grey-200 bg-white p-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                <div className="lg:w-5/12">
                  
                  <div className="relative w-full aspect-[1024/737] rounded-2xl overflow-hidden border border-grey-200 bg-grey-50">
                    <Image
                      src="/use-cases-am.png"
                      alt="AI for Account Managers dashboard"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                </div>
                <div className="lg:w-7/12">
                  <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                    Customer Success &middot; Operations
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
                    AI for Account Managers
                  </h2>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                    Swiggy account managers oversee 50–100 restaurant partners
                    each and must answer performance and growth questions in
                    real time. However, key data often requires analyst support,
                    creating delays that limit impact in live partner meetings
                    and slow upsell opportunities.
                  </p>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-6">
                    Cimba powers Swiggy&apos;s &ldquo;AI for AM&rdquo; agent,
                    enabling real-time, self-service insights and repeatable
                    workflows&mdash;degrowth analysis, performance trends,
                    growth opportunities&mdash;directly on production data.
                    AMs now diagnose performance issues, identify growth
                    opportunities, and act in the moment without analyst
                    bottlenecks.
                  </p>
                  <p className="text-[16px] text-grey-500 leading-relaxed mb-8">
                    This deployment replaced internal tools and competitors
                    with a single governed AI platform, validating
                    Cimba&apos;s ability to scale AI-driven workflows across
                    thousands of business users in marketplace operations.
                  </p>
                  <div className="grid grid-cols-3 gap-8 border-t border-grey-200 pt-8">
                    <div>
                      <p className="text-[32px] font-normal text-grey-900 leading-none">
                        10
                      </p>
                      <p className="text-[13px] text-grey-500 mt-1">
                        business units
                      </p>
                    </div>
                    <div>
                      <p className="text-[32px] font-normal text-grey-900 leading-none">
                        2,200
                      </p>
                      <p className="text-[13px] text-grey-500 mt-1">
                        active users
                      </p>
                    </div>
                    <div>
                      <p className="text-[32px] font-normal text-grey-900 leading-none">
                        3 mo
                      </p>
                      <p className="text-[13px] text-grey-500 mt-1">
                        to full scale
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── BOM Misalignment — blue, image top, story below ── */}
            <div className="lg:col-span-5 rounded-2xl border border-primary/30 bg-primary p-8 flex flex-col min-h-[420px]">
              <div className="flex-1 mb-8">
                <div className="relative w-full aspect-[488/266] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
                  <Image
                    src="/bom-misalignment.png"
                    alt="BOM comparison view"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-white leading-tight mb-4">
                  BOM Misalignment in Maintenance Operations
                </h2>
                <p className="text-[15px] text-white/85 leading-relaxed">
                  Instead of sifting through thousands of work orders, teams
                  see a focused list of misaligned material combinations with
                  recommended actions. Cimba automatically compares planned
                  vs. actual BOMs, highlighting only the discrepancies that
                  matter&mdash;so maintenance teams act on what counts.
                </p>
              </div>
            </div>

            {/* ── Other High-Impact — bento-dark list tile ── */}
            <div className="lg:col-span-7 rounded-2xl border border-grey-200 bg-bento-dark p-8 flex flex-col justify-center min-h-[420px]">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                More workflows
              </p>
              <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                Other high-impact use cases
              </h2>
              <p className="text-[15px] text-grey-700 leading-relaxed mb-8 max-w-lg">
                Cimba extends across finance, ops, and go-to-market&mdash;wherever
                teams need governed, repeatable intelligence.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-[15px]">
                {[
                  {
                    title: "Repeatable board questions",
                    desc: "Answer leadership queries consistently every quarter",
                  },
                  {
                    title: "Cross-functional workflows",
                    desc: "Detect where Finance, Ops, and Sales data break",
                  },
                  {
                    title: "Spend analysis",
                    desc: "Tie detailed usage to revenue or cost drivers",
                  },
                  {
                    title: "Pricing decisions",
                    desc: "Explore scenarios for pricing strategies",
                  },
                  {
                    title: "Marketing & customer success",
                    desc: "Analyze customer or campaign data to drive decisions",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-semibold text-grey-900">{item.title}</p>
                    <p className="text-grey-700 text-[16px] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-5">
              See these workflows in action
            </h2>
            <p className="text-lg text-grey-500 max-w-xl mx-auto mb-10">
              Book a demo and we&apos;ll walk through how Cimba automates your
              specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-primary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md"
              >
                See Demo
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/product"
                className="btn-secondary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md"
              >
                Explore Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
