"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function CompanyPage() {
  const team = [
    { name: "Subrata (Subu) Biswas", role: "Co-Founder & CEO", image: "/team/subrata.jpg", linkedin: "https://www.linkedin.com/in/subrata-subu-biswas-5114251b/", bgColor: "" },
    { name: "Vishal Das", role: "Co-Founder & Head of AI", image: "/team/vishal.jpg", linkedin: "https://www.linkedin.com/in/vdas2/", bgColor: "bg-[#e8d5b7]" },
    { name: "Parshav Bansal", role: "VP of Revenue & Customer Success", image: "/team/parshav.jpg", linkedin: "https://www.linkedin.com/in/parshavbansal/", bgColor: "" },
    { name: "Dean Yao", role: "Head of Marketing", image: "/team/dean.jpg", linkedin: "https://www.linkedin.com/in/deanyao/", bgColor: "" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-grey-900 leading-tight mb-6 max-w-3xl">
            Building AI that enterprises can trust
          </h1>
          <p className="text-lg md:text-xl text-grey-600 leading-relaxed max-w-2xl">
            We&apos;re on a mission to enable organizations to unlock the power of AI while maintaining complete control and auditability.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-6">
              Our Story
            </h2>
            <p className="text-[16px] md:text-[18px] text-grey-600 leading-relaxed mb-4">
              Cimba AI is the agentic command center for business operations – an AI platform designed to proactively run and optimize how organizations operate through governed, repeatable workflows.
            </p>
            <p className="text-[16px] md:text-[18px] text-grey-600 leading-relaxed mb-4">
              Trusted by Fortune 500 companies including Airbnb, KPMG, and Swiggy, Cimba AI goes beyond answering questions with dashboards, chatbots, and copilots. The platform autonomously identifies, prioritizes, and resolves complex operational challenges – delivering consistent, auditable, and trusted decisions even before anyone asks for them.
            </p>
          </div>
          <div className="bg-gradient-to-br from-grey-50 to-grey-100 rounded-2xl h-80 flex items-center justify-center border border-grey-200">
            <p className="text-grey-400 font-medium">Company Story Visual</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-4 max-w-2xl">
            Our Leadership Team
          </h2>
          <p className="text-lg text-grey-600 leading-relaxed max-w-2xl">
            Experienced operators and technologists building the future of enterprise AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-grey-200 hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className={`w-32 h-32 rounded-full overflow-hidden mb-6 flex-shrink-0 ${member.bgColor}`}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-grey-900 mb-2">{member.name}</h3>
              <p className="text-[16px] text-primary font-medium mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Image
                  src="/linkedin-icon.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="bg-gradient-to-br from-grey-50 to-grey-100 rounded-2xl h-80 flex items-center justify-center border border-grey-200 order-2 lg:order-1">
            <p className="text-grey-400 font-medium">Careers Visual</p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-6">
              Join Our Team
            </h2>
            <p className="text-[16px] md:text-[18px] text-grey-600 leading-relaxed mb-4">
              We&apos;re building the next generation of enterprise AI infrastructure. If you&apos;re passionate about creating governed, auditable AI systems, we&apos;d love to hear from you.
            </p>
            <p className="text-[16px] md:text-[18px] text-grey-600 leading-relaxed mb-8">
              We offer competitive compensation, meaningful equity, and the opportunity to work on problems that matter to enterprises around the world.
            </p>
            <a
              href="https://www.linkedin.com/company/cimba-ai/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-0 text-[16px] font-semibold rounded-full transition-all inline-flex items-center gap-2"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Newsroom Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-grey-900 leading-tight mb-4 max-w-2xl">
            Newsroom
          </h2>
          <p className="text-lg text-grey-600 leading-relaxed max-w-2xl">
            Latest updates and announcements from Cimba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              date: "March 2026",
              title: "Cimba Secures Series B Funding",
              excerpt: "We&apos;re thrilled to announce $X million in Series B funding to accelerate our mission.",
            },
            {
              date: "February 2026",
              title: "New Integrations Available",
              excerpt: "We&apos;ve launched integrations with additional enterprise data platforms.",
            },
            {
              date: "January 2026",
              title: "Enterprise Customers Scale to 10x Usage",
              excerpt: "Our customers are seeing remarkable growth in workflow adoption and business impact.",
            },
          ].map((article, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-grey-200 hover:shadow-md transition-shadow duration-300 bg-white group cursor-pointer"
            >
              <p className="text-[14px] font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                {article.date}
              </p>
              <h3 className="text-xl font-semibold text-grey-900 mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-[16px] text-grey-600 leading-relaxed">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
