import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cimba — AI Agentic Command Center | Use Cases",
  description:
    "See how organizations use Cimba to power AI-driven workflows across operations, finance, and risk with real outcomes.",
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
