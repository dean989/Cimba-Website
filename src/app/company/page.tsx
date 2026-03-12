import Link from "next/link";
import {
  ArrowRight,
  Users,
  Heart,
  Briefcase,
  MapPin,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — Cimba",
  description:
    "Learn about Cimba's mission, culture, and team. Join us in building the future of AI-powered operational intelligence.",
};

const values = [
  {
    title: "Trust First",
    description:
      "We build products our customers can audit, verify, and trust. Every decision we make starts with the question: would we trust this with our own data?",
  },
  {
    title: "Speed with Purpose",
    description:
      "We move fast, but never at the expense of quality or compliance. Every release ships with auditability built in.",
  },
  {
    title: "Customer Obsession",
    description:
      "Our customers' success is our success. We deeply understand their workflows and build tools that genuinely transform how they operate.",
  },
  {
    title: "Transparency",
    description:
      "We believe in open communication — with our customers, our partners, and each other. No black boxes, in our product or our culture.",
  },
];

const openRoles = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Account Executive — Enterprise",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "ML Engineer — AI Agents",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero — Who We Are */}
      <section className="bg-grey-50 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-normal text-grey-900 tracking-tight leading-tight mb-6">
              Building the future of{" "}
              <span className="text-primary">operational intelligence</span>
            </h1>
            <p className="text-lg text-grey-600 leading-relaxed max-w-3xl mx-auto">
              Cimba was founded with a simple belief: enterprise teams deserve AI
              they can trust, audit, and scale. We&apos;re building the platform that
              makes that possible.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6">
                <Users size={24} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-grey-900 tracking-tight mb-6">
                Who we are
              </h2>
              <p className="text-grey-600 leading-relaxed text-lg mb-6">
                We&apos;re a team of engineers, data scientists, and industry
                veterans who believe that AI should be more than chatbots and
                dashboards. Cimba was born from the frustration of watching
                brilliant teams waste hours on manual processes that AI could
                handle — if only it were trustworthy enough.
              </p>
              <p className="text-grey-600 leading-relaxed text-lg">
                Today, we&apos;re building the AI enablement platform that
                Fortune 500 companies trust with their most sensitive
                operational workflows. Every line of code we write is guided by a
                commitment to auditability, repeatability, and accuracy.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-grey-100 to-grey-200 border border-grey-200 flex items-center justify-center">
              <Users size={64} className="text-grey-300" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="bg-grey-50 py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6 mx-auto">
              <Heart size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 tracking-tight mb-4">
              Our culture
            </h2>
            <p className="text-lg text-grey-500 max-w-2xl mx-auto">
              We build with conviction, ship with confidence, and celebrate the
              wins — big and small.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl bg-white border border-grey-200"
              >
                <h3 className="text-xl font-semibold text-grey-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-grey-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="bg-white py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-6 mx-auto">
              <Briefcase size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-grey-900 tracking-tight mb-4">
              Work with us
            </h2>
            <p className="text-lg text-grey-500 max-w-2xl mx-auto">
              Join a world-class team building the future of enterprise AI. We&apos;re
              hiring across engineering, design, and go-to-market.
            </p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-2xl bg-grey-50 border border-grey-200 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="text-lg font-semibold text-grey-900 group-hover:text-primary transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-grey-500">
                      {role.department}
                    </span>
                    <span className="text-grey-300">|</span>
                    <span className="flex items-center gap-1 text-sm text-grey-500">
                      <MapPin size={12} />
                      {role.location}
                    </span>
                    <span className="text-grey-300">|</span>
                    <span className="text-sm text-grey-500">{role.type}</span>
                  </div>
                </div>
                <button className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Apply
                  <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let&apos;s build the future together
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
              Whether you&apos;re a customer, a partner, or a future team member
              — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-grey-900 bg-white rounded-full hover:bg-grey-50 transition-all"
              >
                See Demo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
