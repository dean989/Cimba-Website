import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import CursorGradientSection from "@/components/CursorGradientSection";
import DemoRequestForm from "@/components/DemoRequestForm";
import HomeHeroVideo from "@/components/HomeHeroVideo";

export const metadata: Metadata = {
  title: "See Demo — Cimba",
  description:
    "See Cimba in action. Watch our product demo and book a personalized walkthrough with our team.",
};

const benefits = [
  "See governed AI agents execute real workflows",
  "Watch auditable, repeatable intelligence in action",
  "Understand how Cimba connects to your data stack",
  "Get a personalized walkthrough for your use case",
];

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-grey-50 pt-32 pb-20 lg:pt-44 lg:pb-28"
        style={{
          backgroundImage: "url('/home-background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-grey-50" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-normal text-grey-900 tracking-tight leading-tight mb-6">
                See Cimba{" "}
                <span className="text-primary">in action</span>
              </h1>
              <p className="text-lg text-grey-600 leading-relaxed mb-8">
                Watch how Cimba turns your data into operational intelligence
                with governed AI agents and repeatable workflows. Then book a
                personalized demo for your team.
              </p>
              <ul className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-grey-700"
                  >
                    <CheckCircle
                      size={20}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <HomeHeroVideo />
          </div>
        </div>
      </section>

      <div className="pointer-events-none relative z-10 -mt-1">
        <div
          className="mx-auto h-px w-[min(1280px,92vw)]"
          style={{
            background:
              "linear-gradient(90deg, rgba(31,151,211,0) 0%, rgba(31,151,211,0.9) 22%, rgba(116,20,218,0.9) 50%, rgba(7,112,227,0.9) 78%, rgba(7,112,227,0) 100%)",
          }}
        />
      </div>

      {/* Demo Request Form */}
      <CursorGradientSection className="py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-grey-900 tracking-tight mb-4">
                Book a personalized demo
              </h2>
              <p className="text-[18px] text-grey-600">
                Fill out the form below and our team will schedule a personalized
                walkthrough tailored to your use case.
              </p>
            </div>

            <DemoRequestForm />
          </div>
        </div>
      </CursorGradientSection>

    </>
  );
}
