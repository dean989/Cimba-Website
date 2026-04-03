"use client";

import { motion } from "framer-motion";
import { BarChart3, RefreshCw, Building2, Zap } from "lucide-react";

const icons = {
  BarChart3,
  RefreshCw,
  Building2,
  Zap,
} as const;

type IconName = keyof typeof icons;

interface SolutionIconPanelProps {
  icon: IconName;
  gradient: string;
  delay: number;
  alignment?: "left" | "right";
}

export default function SolutionIconPanel({
  icon,
  gradient,
  delay,
  alignment = "left",
}: SolutionIconPanelProps) {
  const Icon = icons[icon];
  const alignmentClass =
    alignment === "right" ? "lg:ml-auto lg:mr-0" : "lg:mx-0";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className={`w-full max-w-[480px] mx-auto ${alignmentClass} h-52 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <Icon size={64} className="text-[#0770E3] opacity-80" />
      </motion.div>
    </motion.div>
  );
}
