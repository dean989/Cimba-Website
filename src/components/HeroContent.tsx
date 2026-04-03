"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-normal text-grey-900 leading-[1.05] mb-8"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        <span className="block min-h-[2.4em] sm:min-h-[1.2em]">
          Less asking,{" "}
          <span className="text-primary">more doing</span>
        </span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-grey-600 leading-relaxed max-w-2xl mb-12"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        Cimba is the agentic command center for finance and business ops that proactively delivers consistent, auditable, trusted outcomes.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-8"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
      >
        <Link
          href="/demo"
          className="btn-primary px-10 py-0 text-[16px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
        >
          See a Demo
        </Link>
        <Link
          href="/product#how-it-works"
          className="h-[42px] px-10 text-[16px] font-semibold rounded-full inline-flex items-center gap-2 border-2 border-[#0770E3] text-[#0770E3] bg-transparent hover:bg-[#0770E3]/5 transition-all"
        >
          How It Works
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 max-w-3xl"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
      >
        {[
          "Trusted answers grounded in your data",
          "Repeatable decision workflows",
          "Governed agents that scale across teams",
        ].map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M3 8L6.5 11.5L13 4.5" stroke="#0770E3" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-gray-500">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
