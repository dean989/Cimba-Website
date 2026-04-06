import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lock,
  UserCheck,
  Eye,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";
import HowItWorksPipeline from "@/components/HowItWorksPipeline";
import IntegrationsSection from "@/components/IntegrationsSection";
import NetBackground from "@/components/NetBackground";

export const metadata: Metadata = {
  title: "Product — Cimba",
  description:
    "Discover how Cimba delivers AI-powered operational intelligence through governed agents, playbooks, and repeatable workflows.",
};

const dataCategories = [
  {
    category: "Integrations",
    items: [
      { name: "Databricks", icon: "/integrations/databricks.png" },
      { name: "Snowflake", icon: "/integrations/snowflake.png" },
      { name: "PostgreSQL", icon: "/integrations/postgresql.png" },
      { name: "Trino", icon: "/integrations/trino.png" },
      { name: "Minerva", icon: "/integrations/minerva.png" },
      { name: "MySQL", icon: "/integrations/mysql.png" },
      { name: "Tableau", icon: "/integrations/tableau.png" },
      {
        name: "Azure Data Lake Storage",
        icon: "/integrations/azure-datalake-storage.png",
      },
      { name: "HubSpot", icon: "/integrations/hubspot.png" },
      { name: "Druid", icon: "/integrations/druid.png" },
      {
        name: "Amazon Timestream",
        icon: "/integrations/timestream.png",
      },
      {
        name: "Azure SQL Database",
        icon: "/integrations/azure-sql-database.png",
      },
      { name: "Google Sheets", icon: "/integrations/google-sheets.png" },
      { name: "Elasticsearch", icon: "/integrations/elasticsearch.png" },
      { name: "Oracle DB", icon: "/integrations/oracle-db.png" },
      { name: "Superset", icon: "/integrations/superset.png" },
    ],
  },
];

const securityPillars = [
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Cimba operates within secure environments and follows industry best practices for protecting customer data.",
    image: "/trust/soc2.png",
  },
  {
    icon: UserCheck,
    title: "Access Control",
    description:
      "Role-based access controls ensure users only interact with the data and workflows appropriate for their role.",
    image: "/trust/access-control.png",
  },
  {
    icon: Eye,
    title: "Auditability",
    description:
      "Every workflow is transparent and traceable. Teams can see how analyses were performed.",
    image: "/trust/auditability.png",
  },
  {
    icon: Building2,
    title: "Enterprise Infrastructure",
    titleAlign: "left",
    description:
      "Cimba supports enterprise deployments with secure integrations, scalable infrastructure, and strong operational reliability.",
    image: "/trust/enterprise.png",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/product-hero.svg"
          alt=""
          aria-hidden
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />
        {/* Bottom fade-out for background image */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-10 lg:pt-44 lg:pb-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-grey-900 leading-tight mb-6">
              The platform for
              <br />
              <span className="text-primary block">agentic operations</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl mb-10">
              Governed agents. Repeatable workflows. Auditable execution. Cimba
              goes beyond dashboards to deliver intelligence your enterprise can
              trust.
            </p>
            <Link
              href="/demo"
              className="btn-primary px-10 py-0 text-[16px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              See a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is Cimba ── */}
      <section
        id="what-is-cimba"
        className="bg-white pt-0 pb-16 lg:pb-20 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                What is Cimba
              </p>
             <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-6">
               Agentic command center for finance and business ops
             </h2>
             <p className="text-[16px] text-grey-600 leading-relaxed mb-4">
               Instead of relying on dashboards, manual analysis, or one-off AI
               answers, Cimba enables teams to run structured workflows that
               deliver consistent insights and decisions.
             </p>
              <p className="text-[16px] text-grey-600 leading-relaxed">
                Using governed agents, structured playbooks, and business context, Cimba moves organizations from answering questions to running operations – delivering consistent, auditable outcomes at the scale enterprise workflows demand.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full min-h-[320px] rounded-2xl border border-grey-200 overflow-hidden">
                <Image
                  src="/Markitecture.png"
                  alt="Cimba architecture diagram"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <HowItWorksPipeline />

      {/* ── How Cimba Fits Into Your Stack ── */}
      <section className="bg-grey-50 py-16 lg:py-20 border-t border-grey-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
              Where It Fits
            </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight max-w-2xl mx-auto">
              How Cimba Fits Into Your Stack
            </h2>
          </div>

          {/* Mobile diagram */}
          <div className="mb-8 md:hidden w-full max-w-[341px] mx-auto">
            <Image
              src="/where-it-fits-mobile.svg"
              alt="How Cimba fits between data sources, Cimba, BI and AI tools, and teams"
              width={341}
              height={284}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          {/* Tablet + desktop diagram */}
          <div className="hidden md:block mb-8 md:mb-10 w-full max-w-[1264px] mx-auto">
            <Image
              src="/where-it-fits-desktop.svg"
              alt="How Cimba fits between data sources, Cimba, BI and AI tools, and teams"
              width={1264}
              height={427}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          <p className="text-center text-[16px] lg:text-[18px] text-grey-600 leading-relaxed max-w-3xl mx-auto">
            Cimba is designed to work alongside the tools organizations already use.
            It sits between data systems and operational teams, enabling structured
            workflows that turn questions into consistent insights and actions.
          </p>
        </div>
      </section>

      {/* ── Integrations ── */}
      <IntegrationsSection dataCategories={dataCategories} />

      {/* ── Security ── */}
      <section
        id="security"
        className="bg-white py-16 lg:py-20 scroll-mt-24"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Enterprise Ready
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-12 max-w-2xl">
            Security and compliance
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`bg-grey-50 rounded-2xl border border-grey-200 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  "image" in pillar && pillar.image ? "flex flex-col sm:flex-row gap-6" : ""
                }`}
              >
                {"image" in pillar && pillar.image ? (
                  <>
                    <div className="relative flex-shrink-0 w-24 h-24 sm:w-[45%] sm:h-auto min-w-0 sm:min-w-[140px] max-w-full sm:max-w-[200px] sm:aspect-square rounded-xl overflow-hidden bg-white border border-grey-200">
                      <div className="absolute inset-[10px]">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center">
                      <h3
                        className={`text-2xl font-bold text-grey-900 mb-2 ${
                          "titleAlign" in pillar && pillar.titleAlign === "right"
                            ? "text-right"
                            : "titleAlign" in pillar &&
                                pillar.titleAlign === "left"
                              ? "text-left"
                              : ""
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-[16px] text-grey-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-grey-900 mb-2">
                      {pillar.title}
                    </h2>
                    <p className="text-[16px] text-grey-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-grey-50 py-20 lg:py-24 overflow-hidden">
        <NetBackground />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-5">
            Ready to see Cimba in action?
          </h2>
          <p className="text-lg text-grey-500 max-w-xl mx-auto mb-10">
            Get a personalized demo and see how Cimba can transform your
            team&apos;s operational workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="btn-primary px-8 py-0 text-[16px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              See Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/use-cases"
              className="btn-secondary px-8 py-0 text-[16px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              View Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
