"use client";

import Image from "next/image";

/**
 * P&L Scenario Modeling + Close & Reconciliation tiles (12-col bento row).
 * P&L + Close tile row on the Use Cases page (below Risk case study cards).
 */
export default function PlScenarioCloseBento() {
  return (
    <>
      <div className="lg:col-span-5 flex h-full min-h-[520px] flex-col justify-between rounded-2xl border border-grey-200 bg-bento-dark p-8">
        <div>
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
            FP&A &middot; Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-5">
            P&L Scenario Modeling
          </h2>
          <p className="text-[16px] text-grey-700 leading-relaxed mb-4">
            P&L scenario analysis is a bottleneck for FP&A teams. Assumptions
            live across planning tools and spreadsheets, and answering
            leadership&apos;s &ldquo;what if&rdquo; questions often requires
            rebuilding models, reconciling inputs, and waiting days for
            analysis.
          </p>
          <p className="text-[16px] text-grey-700 leading-relaxed mb-6">
            Cimba integrates with your existing planning and financial systems to
            turn scenario modeling into an on-demand, trusted
            workflow&mdash;empowering leadership to explore scenarios and
            evaluate tradeoffs.
          </p>
          <ul className="space-y-2.5 text-[16px] text-grey-700">
            <li className="flex items-start gap-2.5">
              <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Instantly models P&L impact of pricing changes, headcount shifts,
              and large deals without rebuilding underlying models
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Leverages existing assumptions and drivers from systems like
              Anaplan, keeping scenarios grounded in approved planning logic
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              Explains outcomes in clear, natural language so leaders understand
              not just the result, but the drivers behind it
            </li>
          </ul>
        </div>
        <div className="mt-10 flex gap-10 border-t border-grey-300 pt-8">
          <div>
            <p className="text-[40px] font-normal text-grey-900 leading-none">
              10&times;
            </p>
            <p className="text-[16px] text-grey-700 mt-1">
              faster scenario turnaround
            </p>
          </div>
          <div>
            <p className="text-[40px] font-normal text-grey-900 leading-none">
              0
            </p>
            <p className="text-[16px] text-grey-700 mt-1">models to rebuild</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex h-full min-h-[520px] flex-col rounded-2xl border border-primary/30 bg-primary p-8">
        <div className="group relative mb-8 w-full shrink-0 aspect-[728/371] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
          <Image
            src="/close-reconciliation-v2.png"
            alt="Close & Reconciliation dashboard"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col">
          <h2 className="text-2xl sm:text-3xl font-normal text-white leading-tight mb-4">
            Close & Reconciliation
          </h2>
          <p className="text-[16px] text-white/85 leading-relaxed mb-4">
            Accounting teams rely on manual, spreadsheet-driven processes for
            reconciliations, validations, and anomaly detection&mdash;often under
            tight close timelines. Frequent data changes increase risk, create
            rework, and make it difficult to explain discrepancies when they
            matter most.
          </p>
          <p className="text-[16px] text-white/85 leading-relaxed">
            Cimba automates core accounting workflows using explainable,
            repeatable logic that mirrors existing close processes&mdash;without
            introducing black boxes. It continuously validates balances, flags
            anomalies like negative asset balances and unexpected movements
            before issues escalate, and explains differences in clear, natural
            language to accelerate review.
          </p>
        </div>
      </div>
    </>
  );
}
