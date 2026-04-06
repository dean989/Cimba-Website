"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const pipelineSteps = [
  {
    id: "context",
    title: "Build on Trusted Data and Business Logic",
    description:
      "Connect to the systems where your data lives – databases, warehouses, knowledge sources, and business applications. Then layer in the business context that shapes how agents interpret and respond: table metadata, governance rules, assumptions, and organizational logic. This foundation ensures every analysis reflects how your business actually works, not just what the raw data says.",
    imageSrc: "/how-it-works/connect.png",
    linkText: "data lives",
    linkHref: "#integrations",
  },
  {
    id: "actions",
    title: "Deploy Agents That Act on Your Behalf",
    description:
      "Cimba agents bring together your data, business context, and analytical logic to investigate issues, answer complex questions, and generate governed insights. They operate within defined controls, so outputs are consistent and explainable every time. Rather than waiting to be asked, agents detect what matters and take the next step – surfacing findings and initiating analysis before your team has to.",
    imageSrc: "/how-it-works/agents.png",
  },
  {
    id: "automate",
    title: "Turn Analysis Into Repeatable Playbooks",
    description:
      "Complex, recurring analyses – flux analysis, reconciliations, scenario modeling – can be codified into governed playbooks that run consistently, every time. Agents execute structured workflows that break problems into sequential steps: querying data, applying business logic, performing calculations, and producing traceable outputs. Define the process once and rely on it to run accurately at scale, eliminating manual effort at every cycle.",
    imageSrc: "/how-it-works/workflows.png",
    imagePosition: "left center",
  },
  {
    id: "distribute",
    title: "Deliver Intelligence Before Anyone Asks",
    description:
      "Cimba doesn't wait to be prompted. It proactively monitors for issues, surfaces insights, and delivers recommended actions to the right stakeholders – automatically. Whether it's a variance flag for the CFO, a reconciliation summary for the controller, or a risk alert for the underwriting team, Cimba distributes trusted, auditable outputs before your teams have to ask for them.",
    imageSrc: "/how-it-works/intent.png",
  },
];

export default function HowItWorksPipeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? pipelineSteps.length - 1 : prev - 1
    );
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === pipelineSteps.length - 1 ? 0 : prev + 1
    );
  }, []);

  const step = pipelineSteps[selectedIndex];

  return (
    <section
      id="how-it-works"
      className="bg-grey-50 py-16 lg:py-20 scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
          How It Works
        </p>
        <h2 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-2">
          From data to decisions
        </h2>
        <p className="text-[16px] text-grey-600 leading-relaxed max-w-2xl mb-10">
          Build context, deploy intelligent agents, automate recurring analysis, and distribute trusted insights – proactively, at scale.
        </p>

        {/* Pipeline tabs */}
        <div className="mb-10">
          {/* Mobile: stacked rounded rectangles */}
          <div className="flex flex-col gap-3 sm:hidden">
            {pipelineSteps.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                className={`w-full flex items-center justify-center py-3 text-center transition-colors min-w-0 border rounded-xl ${
                  i === selectedIndex
                    ? "bg-primary text-white font-bold border-primary"
                    : "bg-white text-primary hover:bg-grey-50 border-grey-200"
                }`}
              >
                <span className="text-[12px] font-semibold uppercase tracking-wide truncate">
                  {s.id.toUpperCase()}
                </span>
              </button>
            ))}
          </div>

          {/* Desktop: single segmented pill with rounded ends */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex flex-shrink-0 gap-8">
              {pipelineSteps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`flex items-center justify-center py-3 text-center border-b-[3px] transition-all duration-150 ease-in-out relative ${
                    i === selectedIndex
                      ? "text-[#0770E3] border-b-[#0770E3]"
                      : "text-grey-500 border-b-transparent hover:text-[#0770E3] hover:border-b-[#0770E3]/30"
                  }`}
                >
                  <span className="text-[12px] font-semibold uppercase tracking-wide truncate">
                    {s.id.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card — title, hero image, description */}
        <div className="bg-white border border-grey-200 rounded-2xl overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row h-auto lg:h-[300px]"
            >
              <div className="w-full lg:w-[400px] lg:h-[300px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-grey-200 overflow-hidden bg-white">
                {step.id === "distribute" ? (
                  <DistributeIllustration />
                ) : (
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="block w-full h-auto lg:h-full object-cover rounded-xl shadow-md"
                    style={"imagePosition" in step && step.imagePosition ? { objectPosition: step.imagePosition } : {}}
                    unoptimized
                  />
                )}
              </div>
              <div className="min-w-0 flex-1 flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <div className="mb-4">
                  <h3 className="text-2xl font-normal text-grey-900 leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[16px] text-grey-700 leading-relaxed">
                  {"linkText" in step && step.linkText
                    ? (() => {
                        const parts = step.description.split(step.linkText);
                        return (
                          <>
                            {parts[0]}
                            <a
                              href={step.linkHref}
                              className="underline underline-offset-2 hover:text-primary transition-colors"
                            >
                              {step.linkText}
                            </a>
                            {parts[1]}
                          </>
                        );
                      })()
                    : step.description}
                </p>
                <div className="mt-6 flex items-center justify-between sm:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous step"
                    className="inline-flex items-center justify-center rounded-lg border border-grey-200/80 bg-white px-3 py-2 text-[12px] font-semibold uppercase tracking-wide text-primary/70 transition-colors hover:bg-grey-50/60"
                  >
                    Prev
                  </button>
                  <div className="flex items-center gap-2">
                    {pipelineSteps.map((s, i) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Go to step ${i + 1}`}
                        aria-current={i === selectedIndex ? "step" : undefined}
                        className={`h-2.5 rounded-full transition-all ${
                          i === selectedIndex
                            ? "w-6 bg-primary"
                            : "w-2.5 bg-grey-300 hover:bg-grey-400"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next step"
                    className="inline-flex items-center justify-center rounded-lg border border-grey-200/80 bg-white px-3 py-2 text-[12px] font-semibold uppercase tracking-wide text-primary/70 transition-colors hover:bg-grey-50/60"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
