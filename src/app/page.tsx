import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Play,
  ArrowRight,
  GitBranch,
  Users,
  Database,
  TrendingUp,
  HeartHandshake,
  Wrench,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import RotatingSpotlight from "@/components/RotatingSpotlight";
import RotatingText from "@/components/RotatingText";
import UseCasesCarousel from "@/components/UseCasesCarousel";
import CimbaDifferenceCarousel from "@/components/CimbaDifferenceCarousel";

const customerLogos = [
  { name: "Airbnb", src: "/logos/airbnb.png" },
  { name: "SoundHound AI", src: "/logos/soundhound.png" },
  { name: "KPMG", src: "/logos/kpmg.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "iCreditWorks", src: "/logos/icreditworks.png" },
  { name: "Skan AI", src: "/logos/skanai.png" },
];

const valueProps = [
  {
    icon: CheckCircle,
    title: "Trusted answers grounded in your data",
    description:
      "Every insight is sourced, traceable, and grounded in your actual operational data — never hallucinated, never assumed.",
    image: "/Frame_4-78aae2e1-e10d-4115-9ecf-31a029ee6ebd.png",
  },
  {
    icon: GitBranch,
    title: "Repeatable decision workflows",
    description:
      "Build governed AI workflows that run the same way every time — auditable, compliant, and ready for enterprise scrutiny.",
    image: "/Frame_3-2eb57c44-fa43-4d4f-945c-22f234285a1f.png",
  },
  {
    icon: Users,
    title: "Intelligence that scales across teams",
    description:
      "From Finance to CS to Ops, Cimba delivers consistent operational intelligence wherever your teams need it.",
    image: "/Frame_5-dcfcf873-2b0f-4746-acc3-dea40f2ca5a2.png",
  },
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
      <section className="relative overflow-hidden bg-grey-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-grey-900 leading-[1.05] mb-8">
              Turn data and AI into
              <span className="block min-h-[1.2em]">
                <RotatingText />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-grey-600 leading-relaxed max-w-2xl mb-12">
              Cimba builds governed AI workflows that turn complex questions
              into trusted, repeatable decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="btn-primary px-10 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
              >
                See Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="bg-grey-50 pb-16 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-primary shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-2xl hover:scale-105 transition-transform"
                aria-label="Play video"
              >
                <Play size={32} className="text-primary ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="group relative rounded-2xl overflow-hidden bg-grey-50 min-h-[400px] flex flex-col border border-grey-100"
              >
                <div className="relative flex-1" />
                <div className="relative p-8">
                  <h3 className="text-xl font-bold text-grey-900 leading-tight mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="bg-grey-50 py-14">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-[13px] font-medium text-grey-400 uppercase tracking-[0.15em] mb-8">
            Trusted by industry leaders
          </p>
          <div className="overflow-hidden">
            <div className="flex logo-ticker items-center">
              {[...customerLogos, ...customerLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex-shrink-0 mx-12"
                >
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
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <RotatingSpotlight items={testimonials} fullWidth />
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <UseCasesCarousel />

      {/* ── The Cimba Difference ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-grey-200 bg-primary p-8 mb-6 overflow-hidden">
            <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
              The solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight max-w-2xl">
              The Cimba difference
            </h2>
          </div>

          <div className="rounded-2xl border border-grey-200 overflow-hidden">
            <CimbaDifferenceCarousel />
          </div>
        </div>
      </section>

      {/* ── How Cimba Fits ── */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-grey-200 bg-white p-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                  Your ecosystem
                </p>
                <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-6">
                  How Cimba fits into your stack
                </h2>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                  Cimba is designed to work alongside the tools organizations already
                  use. BI platforms remain valuable for dashboards and reporting,
                  while AI tools are often used for exploration and experimentation.
                </p>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  Cimba sits between these systems and operational teams,
                  enabling structured workflows that turn questions into consistent
                  insights and actions.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="w-full min-h-[320px] rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                  <span className="text-[13px] text-grey-400 font-medium">
                    Data Sources → Cimba → Teams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Uses Cimba ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-grey-200 bg-primary p-8 mb-6 overflow-hidden">
            <p className="text-[13px] font-semibold text-white/80 uppercase tracking-[0.15em] mb-4">
              Built for your team
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-white leading-tight max-w-2xl">
              Who uses Cimba
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Data & Analytics */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8 flex flex-col gap-8">
              <div className="w-full">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                  <Database size={32} className="text-grey-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-normal text-grey-900 mb-3">
                  Data &amp; Analytics Teams
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                  Scale insight delivery without building endless dashboards.
                  Cimba allows data teams to encode business logic and analytical
                  workflows once so the rest of the organization can run them
                  safely.
                </p>
                <p className="text-[14px] text-grey-500 leading-relaxed">
                  Cimba allows data teams to encode business logic and analytical
                  workflows once so the rest of the organization can run them
                  safely.
                </p>
              </div>
            </div>

            {/* Finance & FP&A */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <TrendingUp size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-grey-900 mb-3">
                    Finance &amp; FP&amp;A
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Analyze revenue drivers, investigate variance, and answer
                    executive questions faster.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Cimba helps finance teams run repeatable analyses, generate
                    scenario models, and deliver consistent answers grounded in
                    trusted data.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Success */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <HeartHandshake size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-grey-900 mb-3">
                    Customer Success
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Understand customer health, identify risks, and prioritize
                    actions.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Cimba can analyze product usage, support data, and account
                    signals to surface insights that help CS teams stay ahead of
                    issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="rounded-2xl border border-grey-200 bg-white p-8">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[180px] flex-shrink-0">
                  <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                    <Wrench size={28} className="text-grey-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-grey-900 mb-3">
                    Operations
                  </h3>
                  <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                    Monitor business performance and quickly investigate
                    operational issues.
                  </p>
                  <p className="text-[14px] text-grey-500 leading-relaxed">
                    Teams use Cimba to analyze operational data, identify
                    anomalies, and support decision-making across departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
