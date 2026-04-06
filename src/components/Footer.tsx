import Link from "next/link";
import Image from "next/image";
import FooterHashLink from "@/components/FooterHashLink";
import type { ReactNode } from "react";

const footerColumns: {
  category: string;
  links: { label: string; href: string }[];
}[] = [
  {
    category: "Home",
    links: [
      { label: "Contact", href: "/demo" },
    ],
  },
  {
    category: "Product",
    links: [
      { label: "What is Cimba", href: "/product#what-is-cimba" },
      { label: "How It Works", href: "/product#how-it-works" },
      { label: "Integrations", href: "/product#integrations" },
      { label: "Security", href: "/product#security" },
    ],
  },
  {
    category: "Use Cases",
    links: [
      { label: "Business Operations", href: "/use-cases#ai-for-ams" },
      { label: "Financial Operations", href: "/use-cases#finops" },
      { label: "Risk & Underwriting", href: "/use-cases#risk-monitoring" },
    ],
  },
  {
    category: "Company",
    links: [
      { label: "About Us", href: "/company#about-us" },
      { label: "Team", href: "/company#team" },
      { label: "Careers", href: "https://www.linkedin.com/company/cimba-ai/jobs/" },
      { label: "Newsroom", href: "/company#newsroom" },
    ],
  },
];

function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.includes("#")) {
    return (
      <FooterHashLink href={href} className={className}>
        {children}
      </FooterHashLink>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 pb-12">
        {/* Top row: brand */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-block">
            <Image
              src="/cimba-logo-white.svg"
              alt="Cimba"
              width={960}
              height={360}
              className="w-full max-w-[320px] h-auto"
            />
          </Link>
        </div>

        {/* Links grid — Home | Product | Use Cases */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {footerColumns.map(({ category, links }) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.15em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <FooterLink
                      href={link.href}
                      className="text-[16px] text-white/85 hover:text-white transition-colors"
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
                {category === "Home" && (
                  <li className="pt-2">
                    <a
                      href="https://www.linkedin.com/company/cimba-ai/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity"
                      aria-label="Cimba on LinkedIn"
                    >
                      <Image
                        src="/linkedin-inbug-white.png"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="w-6 h-auto"
                        unoptimized
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[16px] text-white/80">
            &copy; {new Date().getFullYear()} Cimba.AI All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/privacy"
              className="text-[16px] text-white/80 hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
