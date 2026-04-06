import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";

export const metadata: Metadata = {
  title: "Cimba — AI Agentic Command Center",
  description:
    "Cimba operationalizes intelligence through governed agents and repeatable workflows. Auditable, repeatable, accurate autonomous workflows for enterprise teams.",
  keywords: [
    "AI accounting",
    "operational intelligence",
    "AI workflows",
    "enterprise AI",
    "FP&A automation",
    "SOX compliance",
    "SOC 2",
    "AI enablement platform",
  ],
  openGraph: {
    title: "Cimba — AI-Powered Operational Intelligence",
    description:
      "Turn data and AI into operational intelligence with auditable, repeatable, accurate workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <HashScrollHandler />
        <Navigation />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
