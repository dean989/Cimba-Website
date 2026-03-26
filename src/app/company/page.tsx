"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function CompanyPage() {
  const team = [
    { name: "Subrata (Subu) Biswas", role: "Co-Founder & CEO", image: "/team/subrata.jpg", linkedin: "https://www.linkedin.com/in/subrata-subu-biswas-5114251b/" },
    { name: "Vishal Das", role: "Co-Founder & Head of AI", image: "/team/vishal.jpg", linkedin: "https://www.linkedin.com/in/vdas2/" },
    { name: "Parshav Bansal", role: "VP of Revenue & Customer Success", image: "/team/parshav.jpg", linkedin: "https://www.linkedin.com/in/parshavbansal/" },
    { name: "Dean Yao", role: "Head of Marketing", image: "/team/dean.jpg", linkedin: "https://www.linkedin.com/in/deanyao/" },
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
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 flex-shrink-0 bg-grey-100">
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
                className="hover:opacity-80 transition-opacity"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Image
                  src="/linkedin-inbug.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-auto"
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
            Latest news and press coverage about Cimba AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { date: "Feb 6, 2024", title: "Cimba.AI emerges from stealth with $1.25M pre-seed to help enterprises build AI agents", publication: "VentureBeat", url: "https://venturebeat.com/ai/cimba-ai-emerges-from-stealth-with-1-25m-pre-seed-to-help-enterprises-build-ai-agents" },
            { date: "Feb 6, 2024", title: "Ex-Amazon and Airbnb engineers raise $1.25M for enterprise AI agent developer Cimba.ai", publication: "GeekWire", url: "https://www.geekwire.com/2024/ex-amazon-and-airbnb-engineers-raise-1-25m-for-enterprise-ai-agent-developer-cimba-ai/" },
            { date: "Feb 6, 2024", title: "AI customization startup Cimba launches with $1.25M in funding", publication: "SiliconANGLE", url: "https://siliconangle.com/2024/02/06/ai-customization-startup-cimba-launches-1-25m-funding/" },
            { date: "Feb 6, 2024", title: "Cimba.AI: Adaptive Gen AI Company Emerges From Stealth Mode", publication: "Pulse 2.0", url: "https://pulse2.com/cimba-ai-adaptive-gen-ai-company-emerges-from-stealth-mode-with-pre-seed-funding/" },
            { date: "Feb 7, 2024", title: "Cimba looks to raise cash, grow Seattle team after launching from stealth", publication: "Puget Sound Business Journal", url: "https://www.bizjournals.com/seattle/news/2024/02/07/cimba-ai-seattle-stealth-funding.html" },
            { date: "Feb 6, 2024", title: "Cimba.AI Launches From Stealth With $1.25M in Seed Funding", publication: "Built In Seattle", url: "https://www.builtinseattle.com/articles/cimba-launches-1m-seed-funding-20240206?utm_source=linkedin" },
            { date: "Feb 6, 2024", title: "Cimba.AI Raises $1.25M in Pre-Seed Funding", publication: "citybiz", url: "https://www.citybiz.co/article/518101/cimba-ai-raises-1-25m-in-pre-seed-funding/" },
            { date: "Feb 6, 2024", title: "Cimba.AI Emerges from Stealth with Pre-Seed Funding to Optimize Data-Driven Business Operations", publication: "CIO Influence", url: "https://cioinfluence.com/machine-learning/cimba-ai-emerges-from-stealth-with-pre-seed-funding-to-optimize-data-driven-business-operations/" },
            { date: "Feb 8, 2024", title: "Adaptive Gen AI Startup Cimba.AI Emerges from Stealth with Pre-Seed Funding", publication: "Radical Data Science", url: "https://radicaldatascience.wordpress.com/2024/02/08/adaptive-gen-ai-startup-cimba-ai-emerges-from-stealth-with-pre-seed-funding-to-optimize-data-driven-business-operations/" },
            { date: "Feb 6, 2024", title: "Cimba.AI Raises $1.25 Million in Pre-Seed Funding", publication: "The SaaS News", url: "https://www.thesaasnews.com/news/cimba-ai-raises-1-25-million-in-pre-seed-funding" },
            { date: "Feb 6, 2024", title: "Adaptive Gen AI Startup Cimba.AI Emerges from Stealth with Pre-Seed Funding", publication: "PR Newswire", url: "https://www.prnewswire.com/news-releases/adaptive-gen-ai-startup-cimbaai-emerges-from-stealth-with-pre-seed-funding-to-optimize-data-driven-business-operations-302054648.html" },
            { date: "Feb 7, 2024", title: "Cimba.AI Raises $1.25M in Pre-Seed Funding", publication: "FinSMEs", url: "https://www.finsmes.com/2024/02/cimba-ai-raises-1-25m-in-pre-seed-funding.html?utm_source=dlvr.it&utm_medium=twitter" },
            { date: "Feb 6, 2024", title: "Adaptive Gen AI Startup Cimba.AI Emerges from Stealth with Pre-Seed Funding", publication: "TMCnet", url: "https://www.tmcnet.com/usubmit/-adaptive-gen-ai-startup-cimbaai-emerges-from-stealth-/2024/02/06/9957774.htm" },
            { date: "Feb 6, 2024", title: "Adaptive Gen AI Startup Cimba.AI Emerges From Stealth With Pre-Seed Funding", publication: "MENAFN", url: "https://menafn.com/1107816064/Adaptive-Gen-AI-Startup-CimbaAI-Emerges-From-Stealth-With-Pre-Seed-Funding-To-Optimize-Data-Driven-Business-Operations" },
            { date: "Feb 6, 2024", title: "Cimba.AI emerges from stealth with $1.25M pre-seed to help enterprises build AI agents", publication: "NewsBreak", url: "https://www.newsbreak.com/news/3324725037641-cimba-ai-emerges-from-stealth-with-1-25m-pre-seed-to-help-enterprises-build-ai-agents" },
            { date: "Feb 6, 2024", title: "Cimba.AI emerges from stealth with $1.25M pre-seed to help enterprises build AI agents", publication: "Tech News Tube", url: "https://technewstube.com/venturebeat/1617067/cimba-ai-emerges-stealth-1-25m-pre-seed-to-help/" },
            { date: "Feb 6, 2024", title: "Cimba.AI Emerges from Stealth with Pre-Seed Funding to Optimize Data-Driven Business Operations", publication: "AI Authority", url: "https://aithority.com/machine-learning/cimba-ai-emerges-from-stealth-with-pre-seed-funding-to-optimize-data-driven-business-operations/" },
            { date: "Feb 6, 2024", title: "Cimba.AI Emerges from Stealth with $1.25M Pre-Seed Funding to Empower Enterprises with Custom AI Agents", publication: "Venture Capital", url: "https://venturecapital.com/news/startupsfounders/cimbaai-emerges-from-stealth-with-125m-preseed-funding-to-empower-enterprises-with-custom-ai-agents-v1" },
          ].map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-6 rounded-xl border border-grey-200 hover:shadow-md transition-shadow duration-300 bg-white group"
            >
              <p className="text-[13px] font-semibold text-primary uppercase tracking-widest mb-3">{article.publication}</p>
              <p className="text-[12px] text-grey-400 mb-2">{article.date}</p>
              <h3 className="text-[14px] font-semibold text-grey-900 leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
