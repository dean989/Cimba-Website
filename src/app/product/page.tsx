import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BookOpen,
  Server,
  Lightbulb,
  BrainCircuit,
  Repeat,
  Database,
  Lock,
  UserCheck,
  Eye,
  Building2,
} from "lucide-react";
import type { Metadata } from "next";
import HowItWorksPipeline from "@/components/HowItWorksPipeline";

export const metadata: Metadata = {
  title: "Product — Cimba",
  description:
    "Discover how Cimba delivers AI-powered operational intelligence through governed agents, playbooks, and repeatable workflows.",
};

const buildingBlocks = [
  {
    icon: Bot,
    title: "Agents",
    summary:
      "AI agents that execute analytical workflows using your data and business context.",
    description:
      "Cimba agents combine data sources, business context, and analytical logic to answer questions and perform structured analysis.",
  },
  {
    icon: BookOpen,
    title: "Playbooks",
    summary: "Pre-defined workflows on how complex analyses should run.",
    description:
      "Playbooks break down analytical tasks into multi-step processes that guide how questions are answered.",
  },
  {
    icon: Server,
    title: "MCP Server",
    summary:
      "Interoperability allows external agents and tools to interact with Cimba.",
    description:
      "Cimba provides an MCP server that exposes agents, workflows, and data connections through a structured interface.",
  },
  {
    icon: Lightbulb,
    title: "Intent",
    summary:
      "Cimba builds out business context, playbooks and agents from your intent.",
    description:
      "Express what you need in natural language and Cimba translates your intent into structured workflows.",
  },
  {
    icon: BrainCircuit,
    title: "Business Context",
    summary:
      "The institutional knowledge that shapes how your organization makes decisions.",
    description:
      "Business context captures the metrics, definitions, logic, and domain knowledge that determine how questions should be answered.",
  },
  {
    icon: Repeat,
    title: "Workflows",
    summary:
      "End-to-end execution pipelines that deliver consistent, governed intelligence.",
    description:
      "Workflows orchestrate agents, playbooks, and business context into complete execution pipelines.",
  },
];

const dataCategories = [
  { category: "Data Warehouses", items: ["Snowflake", "BigQuery", "Redshift"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL"] },
  { category: "Business Systems", items: ["Salesforce", "HubSpot", "Zendesk"] },
  { category: "Files & Documents", items: ["Google Drive", "Notion", "Slack"] },
  { category: "Analytics & BI", items: ["Looker", "Tableau"] },
];

const securityPillars = [
  {
    icon: Lock,
    title: "Data Security",
    description:
      "Cimba operates within secure environments and follows industry best practices for protecting customer data.",
  },
  {
    icon: UserCheck,
    title: "Access Control",
    description:
      "Role-based access controls ensure users only interact with the data and workflows appropriate for their role.",
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
      <section className="bg-grey-50 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-6">
                Turn data and AI into operational intelligence
              </h2>
              <p className="text-[15px] text-grey-600 leading-relaxed mb-4">
                Cimba is a platform that helps teams turn data and AI into
                operational intelligence. Instead of relying on dashboards,
                manual analysis, or one-off AI answers, Cimba enables teams to
                run structured workflows that deliver consistent insights and
                decisions.
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

      {/* ── Building Blocks ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Core Primitives
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-12 max-w-2xl">
            The building blocks of Cimba
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-grey-50 rounded-2xl border border-grey-200 p-8 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <block.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-2">
                  {block.title}
                </h3>
                <p className="text-[14px] text-grey-600 leading-relaxed mb-3">
                  {block.summary}
                </p>
                <p className="text-[13px] text-grey-500 leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-12 max-w-2xl">
            What data does Cimba connect to?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-10">
            {dataCategories.map((cat) => (
              <div key={cat.category}>
                <p className="text-[12px] font-semibold text-grey-400 uppercase tracking-[0.15em] mb-4">
                  {cat.category}
                </p>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-4 py-3 bg-white border border-grey-200 rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-grey-100 flex items-center justify-center flex-shrink-0">
                        <Database size={14} className="text-grey-400" />
                      </div>
                      <span className="text-[14px] font-medium text-grey-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-grey-500 leading-relaxed border-t border-grey-200 pt-8">
            Cimba is designed to work with the systems teams already rely on.
          </p>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-5">
            Trust &amp; Compliance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight mb-12 max-w-2xl">
            Security and compliance
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-grey-50 rounded-2xl border border-grey-200 p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-grey-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-grey-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-grey-50 py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-grey-900 leading-tight mb-5">
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
