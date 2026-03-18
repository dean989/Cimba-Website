import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Lock,
  UserCheck,
  Eye,
  Building2,
  Database,
  Users,
  BarChart3,
  Sparkles,
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
    category: "Data Warehouses",
    items: [
      { name: "Snowflake", icon: "/integrations/snowflake.png" },
      { name: "BigQuery", icon: "/integrations/bigquery.png" },
      { name: "Redshift", icon: "/integrations/redshift.png" },
      { name: "Databricks", icon: "/integrations/databricks.png" },
      { name: "ClickHouse", icon: "/integrations/clickhouse.png" },
      { name: "Trino", icon: "/integrations/trino.png" },
      { name: "Timestream", icon: "/integrations/timestream.png" },
      { name: "Fabric", icon: "/integrations/fabric.png" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "/integrations/postgresql.png" },
      { name: "Oracle DB", icon: "/integrations/oracle-db.png" },
      { name: "SAP", icon: "/integrations/sap.png" },
      { name: "dbt", icon: "/integrations/dbt.png" },
    ],
  },
  {
    category: "Business Systems",
    items: [
      { name: "Salesforce", icon: "/integrations/salesforce.png" },
      { name: "Zendesk", icon: "/integrations/zendesk.png" },
      { name: "Product Board", icon: "/integrations/product-board.png" },
      { name: "Lattice", icon: "/integrations/lattice.png" },
      { name: "Meta", icon: "/integrations/meta.png" },
      { name: "AWS", icon: "/integrations/aws.png" },
      { name: "Azure", icon: "/integrations/azure.png" },
    ],
  },
  {
    category: "Analytics & BI",
    items: [
      { name: "Looker", icon: "/integrations/looker.png" },
      { name: "Mixpanel", icon: "/integrations/mixpanel.png" },
      { name: "Sigma", icon: "/integrations/sigma.png" },
      { name: "Purview", icon: "/integrations/purview.png" },
    ],
  },
  {
    category: "Files & Documents",
    items: [
      { name: "Google Drive", icon: "/integrations/google-drive.png" },
      { name: "Notion", icon: "/integrations/notion.png" },
      { name: "Dropbox", icon: "/integrations/dropbox.png" },
      { name: "Office", icon: "/integrations/office.png" },
      { name: "PDF", icon: "/integrations/pdf.png" },
      { name: "Knowledge Base", icon: "/integrations/knowledge-base.png" },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Slack", icon: "/integrations/slack.png" },
      { name: "Teams", icon: "/integrations/teams.png" },
      { name: "Atlassian", icon: "/integrations/atlassian.png" },
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
  },
  {
    icon: Building2,
    title: "Enterprise Infrastructure",
    description:
      "Cimba supports enterprise deployments with secure integrations, scalable infrastructure, and strong operational reliability.",
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
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-grey-900 leading-tight mb-6">
              The platform for{" "}
              <span className="text-primary">operational intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-grey-500 leading-relaxed max-w-2xl mb-10">
              Governed agents. Repeatable workflows. Auditable execution. Cimba
              goes beyond dashboards to deliver intelligence your enterprise can
              trust.
            </p>
            <Link
              href="/demo"
              className="btn-primary px-10 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              See Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is Cimba ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
                What is Cimba
              </p>
             <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-6">
               Cimba helps teams turn data and AI into operational intelligence.
             </h2>
             <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
               Instead of relying on dashboards, manual analysis, or one-off AI
               answers, Cimba enables teams to run structured workflows that
               deliver consistent insights and decisions.
             </p>
              <p className="text-[15px] text-grey-600 leading-relaxed">
                Using agents, playbooks, and business context, Cimba allows
                organizations to answer complex questions, automate analysis,
                and operationalize intelligence across teams.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full min-h-[320px] rounded-2xl bg-gradient-to-br from-grey-100 to-grey-50 border border-grey-200 flex items-center justify-center">
                <span className="text-[13px] text-grey-400 font-medium">Product diagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <HowItWorksPipeline />

      {/* ── How Cimba Fits Into Your Stack ── */}
      <section className="bg-grey-50 py-20 lg:py-28 border-t border-grey-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
              <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                Where It Fits
              </p>
            <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight max-w-2xl mx-auto">
              How Cimba Fits Into Your Stack
            </h2>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0 mb-16">
            {/* Data Sources */}
            <div className="flex-1 rounded-2xl border border-grey-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-grey-100">
                <Database size={22} className="text-grey-600" />
              </div>
              <h3 className="text-[15px] font-semibold text-grey-900 mb-1">Data Sources</h3>
              <p className="text-[13px] text-grey-500 leading-relaxed">
                Databases, warehouses, spreadsheets, and APIs
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-3 py-4 lg:py-0">
              <ArrowRight size={20} className="text-grey-300 rotate-90 lg:rotate-0" />
            </div>

            {/* Cimba (center, highlighted) */}
            <div
              className="flex-[1.4] rounded-2xl border-2 border-transparent p-6 text-center shadow-md"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(31, 151, 211, 0.5), rgba(116, 20, 218, 0.5) 47%, rgba(7, 112, 227, 0.5)) border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Image src="/cimba-logo.svg" alt="Cimba" width={24} height={24} />
              </div>
              <h3 className="text-[16px] font-bold text-primary mb-1">Cimba</h3>
              <p className="text-[13px] text-grey-600 leading-relaxed">
                Operational intelligence through governed agents and structured workflows
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-3 py-4 lg:py-0">
              <ArrowRight size={20} className="text-grey-300 rotate-90 lg:rotate-0" />
            </div>

            {/* Teams */}
            <div className="flex-1 rounded-2xl border border-grey-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-grey-100">
                <Users size={22} className="text-grey-600" />
              </div>
              <h3 className="text-[15px] font-semibold text-grey-900 mb-1">Teams</h3>
              <p className="text-[13px] text-grey-500 leading-relaxed">
                Finance, Data, Ops, and Customer Success
              </p>
            </div>
          </div>

          {/* Supporting tools + text */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 rounded-xl border border-grey-200 bg-white p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <BarChart3 size={18} className="text-grey-400" />
                  <span className="text-[13px] font-semibold text-grey-700">BI Tools</span>
                </div>
                <p className="text-[13px] text-grey-500 leading-relaxed">
                  Remain valuable for dashboards and reporting
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-grey-200 bg-white p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles size={18} className="text-grey-400" />
                  <span className="text-[13px] font-semibold text-grey-700">AI Tools</span>
                </div>
                <p className="text-[13px] text-grey-500 leading-relaxed">
                  Often used for exploration and experimentation
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[15px] text-grey-600 leading-relaxed">
                Cimba is designed to work alongside the tools organizations already use.
                It sits between data systems and operational teams, enabling structured
                workflows that turn questions into consistent insights and actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <IntegrationsSection dataCategories={dataCategories} />

      {/* ── Security ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-grey-900 leading-tight mb-12 max-w-2xl">
            Security and compliance
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`bg-grey-50 rounded-2xl border border-grey-200 p-8 ${
                  "image" in pillar && pillar.image ? "flex gap-6" : ""
                }`}
              >
                {"image" in pillar && pillar.image ? (
                  <>
                    <div className="relative flex-shrink-0 w-[45%] min-w-[140px] max-w-[200px] aspect-square rounded-xl overflow-hidden bg-white border border-grey-200">
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
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl font-bold text-grey-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[15px] text-grey-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-grey-900 mb-2">
                      {pillar.title}
                    </h2>
                    <p className="text-[15px] text-grey-600 leading-relaxed">
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
      <section className="relative bg-grey-50 py-24 lg:py-28 overflow-hidden">
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
              className="btn-primary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              See Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/use-cases"
              className="btn-secondary px-8 py-0 text-[15px] font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-2"
            >
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
