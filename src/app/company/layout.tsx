import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cimba — AI Agentic Command Center | Company",
  description: "Meet the Cimba team building the future of AI-powered operational intelligence.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
