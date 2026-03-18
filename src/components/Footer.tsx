import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "What is Cimba", href: "/product" },
    { label: "How It Works", href: "/product#how-it-works" },
    { label: "Security", href: "/product#security" },
    { label: "Integrations", href: "/product#integrations" },
  ],
  "Use Cases": [
    { label: "Accounting", href: "/use-cases#accounting" },
    { label: "Marketing", href: "/use-cases#marketing" },
    { label: "AI for Account Managers", href: "/use-cases#account-managers" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-10 pb-12">
        {/* Logo - white for contrast */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/cimba-logo-white.svg"
            alt="Cimba"
            width={960}
            height={360}
            className="w-full max-w-[320px] h-auto"
          />
        </Link>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-[0.15em] mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[16px] text-white/85 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/80">
            &copy; {new Date().getFullYear()} Cimba. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[13px] text-white/80 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] text-white/80 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
