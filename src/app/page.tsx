import Link from "next/link";
import Image from "next/image";
import HeroContent from "@/components/HeroContent";
import {
  CheckCircle,
  GitBranch,
  Users,
  Database,
  TrendingUp,
  HeartHandshake,
  Wrench,
  BarChart3,
  RefreshCw,
  Building2,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import RotatingSpotlight from "@/components/RotatingSpotlight";
import UseCasesCarousel from "@/components/UseCasesCarousel";
import CursorGradientSection from "@/components/CursorGradientSection";
import WhoUsesRiseSection from "@/components/WhoUsesRiseSection";
import StrokeSectionTitle from "@/components/StrokeSectionTitle";
import LakeOfDataBackground from "@/components/LakeOfDataBackground";
import HomeHeroVideo from "@/components/HomeHeroVideo";

const customerLogos = [
  { name: "SoundHound AI", src: "/logos/soundhound.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "iCreditWorks", src: "/logos/icreditworks.png" },
  { name: "Skan AI", src: "/logos/skanai.png" },
];

const testimonials = [
  {
    quote:
      "Cimba transformed how our finance team operates. What used to take days now happens in minutes with complete auditability.",
    author: "VP of Finance",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "The ability to build repeatable workflows that our entire team can trust has been a game-changer for our operations.",
    author: "Head of Data & Analytics",
    company: "Fortune 500 Company",
  },
  {
    quote:
      "We finally have AI we can audit. Cimba gave us the confidence to operationalize intelligence across our org.",
    author: "Director of Business Operations",
    company: "High-Growth Startup",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative overflow-hidden bg-grey-50 scroll-mt-24"
      >
        <LakeOfDataBackground />
        {/* Bottom fade-out for background image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-grey-50 z-10" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-10 lg:pt-44 lg:pb-14">
          <HeroContent />
        </div>
      </section>

      {/* ── Video ── */}
      <section
        id="home-video"
        className="bg-grey-50 pb-10 lg:pb-16 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 0 0 1px rgba(7,112,227,0.08), 0 24px 48px rgba(7,112,227,0.10)",
              animation: "videoFloat 5s ease-in-out infinite",
            }}
          >
            <HomeHeroVideo />
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section
        id="trusted-by"
        className="bg-grey-50 py-10 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-[16px] font-medium text-grey-400 uppercase tracking-[0.15em] mb-8">
            Trusted by industry leaders
          </p>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-6">
              {customerLogos.map((logo, i) => (
                <div key={`${logo.name}-${i}`} className="flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={280}
                    height={120}
                    className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-grey-500">
              (Partnering soon: Big 4 Consulting Firm, and Fortune 500 Vacation Rental Co.)
            </p>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <CursorGradientSection
        id="the-problem"
        className="py-20 lg:py-28 border-b border-grey-200"
        riseOnScroll
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
            <div className="problem-rise-item lg:w-1/2 group cursor-default">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl lg:text-[60px] font-normal text-grey-900 leading-tight mb-4 transition-opacity duration-1000 group-hover:opacity-0">
                  Cimba helps you operationalize data instead of only analyzing it.
                </h2>
                <h2
                  className="absolute inset-0 text-5xl md:text-6xl lg:text-[60px] font-normal leading-tight bg-gradient-to-r from-blue-500 via-purple-700 to-teal-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                  aria-hidden
                >
                  Cimba helps you operationalize data instead of only analyzing it.
                </h2>
              </div>
            </div>
            <div className="problem-rise-item lg:w-1/2 space-y-4">
              <p className="text-[24px] font-light text-grey-900 leading-relaxed">
                Modern organizations have more data and AI tools than ever. Yet most
                teams still struggle to turn questions into{" "}
                <span className="font-light">reliable</span> answers and decisions.
              </p>
              <p className="text-[24px] font-light text-grey-600 leading-relaxed">
                Cimba was built to bridge that gap by combining trusted data, business
                context, and structured workflows into a single operational system.
              </p>
            </div>
          </div>
        </div>
      </CursorGradientSection>

      {/* ── The Cimba Solution ── */}
      <section
        id="cimba-solution"
        className="bg-grey-50 py-20 lg:py-28 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StrokeSectionTitle
            title="The Cimba Solution"
            titleClassName="text-4xl sm:text-5xl font-normal text-primary leading-tight"
          />

          <div className="space-y-16">
            {/* Row 1: AI Enablement, Not Dashboards */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-center">
              <div className="flex-1 min-w-[260px] lg:max-w-[440px] lg:ml-auto lg:text-right">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  AI Enablement, Not Dashboards
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed">
                  Cimba is designed to help teams operationalize intelligence. Instead of
                  building static reports, teams create agents and workflows that
                  actively analyze data and answer questions.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-[480px] mx-auto lg:mx-0 h-52 rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  >
                    <BarChart3 size={64} className="text-[#0770E3] opacity-80" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Row 2: Repeatable Workflows */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-10 items-center">
              <div className="flex-1 min-w-[260px] lg:max-w-[440px] lg:ml-auto lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Repeatable Workflows
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed">
                  Complex analyses can be turned into structured workflows that run the
                  same way every time. This ensures teams receive consistent answers
                  without rebuilding analysis from scratch.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-[480px] mx-auto lg:ml-auto lg:mr-0 h-52 rounded-xl bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  >
                    <RefreshCw size={64} className="text-[#0770E3] opacity-80" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Row 3: Business Context Built In */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-center">
              <div className="flex-1 min-w-[260px] lg:max-w-[440px] lg:ml-auto lg:text-right">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Governance Built In
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed">
                  Cimba allows organizations to define the business context, metrics, logic, and rules that shape how questions should be answered. This ensures insights reflect how the business actually operates.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-[480px] mx-auto lg:mx-0 h-52 rounded-xl bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-100 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  >
                    <Building2 size={64} className="text-[#0770E3] opacity-80" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Row 4: Operational Delivery */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-10 items-center">
              <div className="flex-1 min-w-[260px] lg:max-w-[440px] lg:ml-auto lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Operational Delivery
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed">
                  Trusted insights are delivered through workflows that teams can run when needed. This moves analytics from passive reporting toward active decision support.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-[480px] mx-auto lg:ml-auto lg:mr-0 h-52 rounded-xl bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  >
                    <Zap size={64} className="text-[#0770E3] opacity-80" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Uses Cimba ── */}
      <WhoUsesRiseSection
        id="who-uses-cimba"
        className="bg-white py-20 lg:py-28"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 overflow-x-hidden">
          <div className="who-uses-rise-header">
            <h2 className="who-uses-rise-item text-3xl sm:text-4xl font-normal text-grey-900 leading-tight max-w-2xl mb-6">
              Built for Your Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Data & Analytics */}
            <div className="who-uses-rise-item group rounded-2xl border border-grey-200 bg-white overflow-hidden flex flex-col md:flex-row">
              <div className="flex-shrink-0 h-[190px] w-full md:w-[45%] md:min-w-[140px] md:max-w-[220px] md:h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/who-uses-data.png"
                    alt=""
                    fill
                    className="object-cover object-right origin-left transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-[1.04] will-change-[transform]"
                    unoptimized
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">
                  Data &amp; Analytics Teams
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed mb-3">
                  Scale insight delivery without building endless dashboards.
                </p>
                <p className="text-[16px] text-grey-500 leading-relaxed">
                  Cimba allows data teams to encode business logic and analytical
                  workflows once so the rest of the organization can run them
                  safely.
                </p>
              </div>
            </div>

            {/* Finance & FP&A */}
            <div className="who-uses-rise-item group rounded-2xl border border-grey-200 bg-white overflow-hidden flex flex-col md:flex-row">
              <div className="flex-shrink-0 h-[190px] w-full md:w-[45%] md:min-w-[140px] md:max-w-[220px] md:h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/who-uses-finance.png"
                    alt=""
                    fill
                    className="object-cover object-right origin-left transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-[1.04] will-change-[transform]"
                    unoptimized
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">
                  Finance &amp; FP&amp;A
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed mb-3">
                  Analyze revenue drivers, investigate variance, and answer
                  executive questions faster.
                </p>
                <p className="text-[16px] text-grey-500 leading-relaxed">
                  Cimba helps finance teams run repeatable analyses, generate
                  scenario models, and deliver consistent answers grounded in
                  trusted data.
                </p>
              </div>
            </div>

            {/* Customer Success */}
            <div className="who-uses-rise-item group rounded-2xl border border-grey-200 bg-white overflow-hidden flex flex-col md:flex-row">
              <div className="flex-shrink-0 h-[190px] w-full md:w-[45%] md:min-w-[140px] md:max-w-[220px] md:h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/who-uses-customer-success.png"
                    alt=""
                    fill
                    className="object-cover object-right origin-left transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-[1.04] will-change-[transform]"
                    unoptimized
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">
                  Customer Success
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed mb-3">
                  Understand customer health, identify risks, and prioritize
                  actions.
                </p>
                <p className="text-[16px] text-grey-500 leading-relaxed">
                  Cimba can analyze product usage, support data, and account
                  signals to surface insights that help CS teams stay ahead of
                  issues.
                </p>
              </div>
            </div>

            {/* Operations */}
            <div className="who-uses-rise-item group rounded-2xl border border-grey-200 bg-white overflow-hidden flex flex-col md:flex-row">
              <div className="flex-shrink-0 h-[190px] w-full md:w-[45%] md:min-w-[140px] md:max-w-[220px] md:h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/who-uses-operations.png"
                    alt=""
                    fill
                    className="object-cover object-right origin-left transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-[1.04] will-change-[transform]"
                    unoptimized
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-grey-900 mb-3">
                  Operations
                </h3>
                <p className="text-[16px] text-grey-600 leading-relaxed mb-3">
                  Monitor business performance and quickly investigate operational
                  issues.
                </p>
                <p className="text-[16px] text-grey-500 leading-relaxed">
                  Teams use Cimba to analyze operational data, identify anomalies,
                  and support decision-making across departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </WhoUsesRiseSection>

      {/* ── Use Cases ── */}
      <UseCasesCarousel />

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="bg-white py-20 lg:py-24 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <RotatingSpotlight items={testimonials} fullWidth />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
