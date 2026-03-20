"use client";

import Image from "next/image";

const MORE_WORKFLOWS = [
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
] as const;

/**
 * BOM Misalignment + More workflows tiles (12-col bento row).
 * BOM + more workflows row on the Use Cases page (below P&L / Close).
 */
export default function BomAndMoreWorkflowsBento() {
  return (
    <>
      <div className="lg:col-span-5 flex h-full min-h-[420px] flex-col rounded-2xl border border-primary/30 bg-primary p-8">
        <div className="flex-1 mb-8">
          <div className="group relative w-full aspect-[488/266] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
            <Image
              src="/bom-misalignment-v2.png"
              alt="BOM comparison view"
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-normal text-white leading-tight mb-4">
            BOM Misalignment in Maintenance Operations
          </h2>
          <p className="text-[16px] text-white/85 leading-relaxed">
            Instead of sifting through thousands of work orders, teams see a
            focused list of misaligned material combinations with recommended
            actions. Cimba automatically compares planned vs. actual BOMs,
            highlighting only the discrepancies that matter&mdash;so maintenance
            teams act on what counts.
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 flex h-full min-h-[420px] flex-col justify-center rounded-2xl border border-grey-200 bg-bento-dark p-8">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
          More workflows
        </p>
        <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
          Other high-impact use cases
        </h2>
        <p className="text-[16px] text-grey-700 leading-relaxed mb-8 max-w-lg">
          Cimba extends across finance, ops, and go-to-market&mdash;wherever
          teams need governed, repeatable intelligence.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 text-[16px]">
          {MORE_WORKFLOWS.map((item) => (
            <div key={item.title}>
              <p className="text-[18px] font-semibold text-blue-500">
                {item.title}
              </p>
              <p className="text-grey-700 text-[16px] mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
