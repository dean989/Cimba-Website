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
import ValuePropsSection from "@/components/ValuePropsSection";
import CursorGradientSection from "@/components/CursorGradientSection";
import WhoUsesRiseSection from "@/components/WhoUsesRiseSection";
import StrokeSectionTitle from "@/components/StrokeSectionTitle";

const customerLogos = [
  { name: "Airbnb", src: "/logos/airbnb.png" },
  { name: "SoundHound AI", src: "/logos/soundhound.png" },
  { name: "KPMG", src: "/logos/kpmg.png" },
  { name: "Swiggy", src: "/logos/swiggy.png" },
  { name: "iCreditWorks", src: "/logos/icreditworks.png" },
  { name: "Skan AI", src: "/logos/skanai.png" },
];

const valueProps: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  image: string;
  background: string;
  description?: string;
}[] = [
  {
    icon: CheckCircle,
    title: "Trusted answers grounded in your data",
    image: "/Frame_4-78aae2e1-e10d-4115-9ecf-31a029ee6ebd.png",
    background: "/value-bg-1.png",
  },
  {
    icon: GitBranch,
    title: "Repeatable decision workflows",
    image: "/Frame_3-2eb57c44-fa43-4d4f-945c-22f234285a1f.png",
    background: "/value-bg-2.png",
  },
  {
    icon: Users,
    title: "Governed agents that scale across teams",
    image: "/Frame_5-dcfcf873-2b0f-4746-acc3-dea40f2ca5a2.png",
    background: "/value-bg-3.png",
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
      <section
        className="relative overflow-hidden bg-grey-50"
        style={{
          backgroundImage: "url('/home-background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
              into repeatable, trusted decision making.
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
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-primary shadow-xl mt-[20px]">
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
      <ValuePropsSection>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="value-card-rise group relative rounded-2xl overflow-hidden min-h-[200px] lg:min-h-[240px] flex flex-col border border-grey-100 bg-cover bg-center"
                style={{
                  backgroundImage: prop.background
                    ? `url(${prop.background})`
                    : undefined,
                }}
              >
                <div className="relative p-6 lg:p-8 flex flex-col gap-3 h-full text-white">
                  <h2 className="text-2xl sm:text-[30px] lg:text-[36px] font-normal leading-tight">
                    {prop.title}
                  </h2>
                  {prop.description ? (
                    <p className="mt-auto text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed opacity-90">
                      {prop.description}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ValuePropsSection>

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

      {/* ── The Problem ── */}
      <CursorGradientSection
        className="py-20 lg:py-28 border-b border-grey-200"
        riseOnScroll
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="problem-rise-item lg:w-1/2 group cursor-default">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl lg:text-[60px] font-normal text-grey-900 leading-tight mb-4 transition-opacity duration-1000 group-hover:opacity-0">
                  Most tools help you analyze data.
                  <br />
                  Cimba helps you operationalize it.
                </h2>
                <h2
                  className="absolute inset-0 text-5xl md:text-6xl lg:text-[60px] font-normal leading-tight bg-gradient-to-r from-blue-500 via-purple-700 to-teal-500 bg-clip-text text-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                  aria-hidden
                >
                  Most tools help you analyze data.
                  <br />
                  Cimba helps you operationalize it.
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
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <StrokeSectionTitle
            title="The Cimba Solution"
            titleClassName="text-4xl sm:text-5xl font-normal text-primary leading-tight"
          />

          <div className="space-y-16">
            {/* Row 1: AI Enablement, Not Dashboards */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
              <div className="flex-1 min-w-[260px]">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  AI Enablement, Not Dashboards
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  Cimba is designed to help teams operationalize intelligence. Instead of
                  building static reports, teams create agents and workflows that
                  actively analyze data and answer questions.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <div className="relative w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cimba-solution-3.png"
                    alt="AI Enablement, Not Dashboards"
                    width={912}
                    height={768}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Repeatable Workflows */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center">
              <div className="flex-1 min-w-[260px]">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Repeatable Workflows
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  Complex analyses can be turned into structured workflows that run the
                  same way every time. This ensures teams receive consistent answers
                  without rebuilding analysis from scratch.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <div className="relative w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cimba-solution-1.png"
                    alt="Repeatable Workflows"
                    width={912}
                    height={768}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Business Context Built In */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
              <div className="flex-1 min-w-[260px]">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Business Context Built In
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  Cimba allows organizations to define the metrics, logic, and context
                  that shape how questions should be answered. This ensures insights
                  reflect how the business actually operates.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <div className="relative w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cimba-solution-2.png"
                    alt="Business Context Built In"
                    width={912}
                    height={768}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Operational Delivery */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center">
              <div className="flex-1 min-w-[260px]">
                <h3 className="text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4">
                  Operational Delivery
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  Insights are delivered through workflows that teams can run when
                  needed. This moves analytics from passive reporting toward active
                  decision support.
                </p>
              </div>
              <div className="flex-1 min-w-[260px]">
                <div className="relative w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cimba-solution-4.png"
                    alt="Operational Delivery"
                    width={912}
                    height={768}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Uses Cimba ── */}
      <WhoUsesRiseSection className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="who-uses-rise-header">
            <h2 className="who-uses-rise-item text-3xl sm:text-4xl font-normal text-grey-900 leading-tight max-w-2xl mb-6">
              Built for Your Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Data & Analytics */}
            <div className="who-uses-rise-item rounded-2xl border border-grey-200 bg-white overflow-hidden flex">
              <div className="flex-shrink-0 w-[45%] min-w-[140px] max-w-[220px] p-4 flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/who-uses-data.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-normal text-grey-900 mb-3">
                  Data &amp; Analytics Teams
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                  Scale insight delivery without building endless dashboards.
                </p>
                <p className="text-[14px] text-grey-500 leading-relaxed">
                  Cimba allows data teams to encode business logic and analytical
                  workflows once so the rest of the organization can run them
                  safely.
                </p>
              </div>
            </div>

            {/* Finance & FP&A */}
            <div className="who-uses-rise-item rounded-2xl border border-grey-200 bg-white overflow-hidden flex">
              <div className="flex-shrink-0 w-[45%] min-w-[140px] max-w-[220px] p-4 flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/who-uses-finance.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
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

            {/* Customer Success */}
            <div className="who-uses-rise-item rounded-2xl border border-grey-200 bg-white overflow-hidden flex">
              <div className="flex-shrink-0 w-[45%] min-w-[140px] max-w-[220px] p-4 flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/who-uses-customer-success.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
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

            {/* Operations */}
            <div className="who-uses-rise-item rounded-2xl border border-grey-200 bg-white overflow-hidden flex">
              <div className="flex-shrink-0 w-[45%] min-w-[140px] max-w-[220px] p-4 flex items-center justify-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/who-uses-operations.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-normal text-grey-900 mb-3">
                  Operations
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed mb-3">
                  Monitor business performance and quickly investigate operational
                  issues.
                </p>
                <p className="text-[14px] text-grey-500 leading-relaxed">
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
      <section className="bg-white py-20 lg:py-24">
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
