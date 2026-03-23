import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Cimba.ai",
  description:
    "Learn how Cimba.ai collects, uses, and protects personal information.",
};

const sectionHeadingClass =
  "text-2xl sm:text-3xl font-normal text-grey-900 leading-tight mb-4";
const paragraphClass = "text-[16px] text-grey-600 leading-relaxed mb-4";
const listClass = "list-disc pl-6 space-y-2 text-[16px] text-grey-600 leading-relaxed";

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Privacy Policy
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-grey-900 leading-tight mb-4">
            Our Privacy Policy
          </h1>
          <p className="text-[18px] text-grey-600 leading-relaxed mb-8">
            Learn how we handle your personal information and ensure your
            privacy and data security on our platform.
          </p>

          <div className="rounded-xl border border-grey-200 bg-grey-50 px-5 py-4 mb-10">
            <p className="text-[16px] text-grey-700 leading-relaxed">
              <span className="font-semibold">Effective Date:</span> September
              01, 2023
            </p>
          </div>

          <p className={paragraphClass}>
            This Privacy Policy describes how Cimba.AI Inc. ("Cimba", "we",
            "us", or "our") handles personal information that we collect
            through our website or through any other websites that we own or
            control and which link to this Privacy Policy (collectively, the
            "Services").
          </p>

          <h2 className={sectionHeadingClass}>Personal information we collect</h2>
          <p className={paragraphClass}>Information you submit to us:</p>
          <ul className={`${listClass} mb-6`}>
            <li>
              Contact information, such as your first and last name, phone
              number, and email address.
            </li>
            <li>
              Feedback or correspondence, such as information you provide when
              you contact us with questions or feedback.
            </li>
            <li>
              Usage information, such as information about how you use the
              Services and interact with us.
            </li>
            <li>
              Marketing information, such as your preferences for receiving
              communications and details about how you engage with them.
            </li>
            <li>
              Other data not specifically listed here, which we will use as
              described in this Privacy Policy or as otherwise disclosed at the
              time of collection.
            </li>
          </ul>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Information we obtain from third parties
          </h3>
          <p className={paragraphClass}>
            We may maintain pages on social media platforms, such as Facebook,
            Instagram, LinkedIn, and other third-party platforms. When you
            visit or interact with those pages, the platform provider&apos;s
            privacy policy applies to your interactions and their collection,
            use, and processing of your personal information.
          </p>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Automatic data collection
          </h3>
          <p className={paragraphClass}>
            We and our service providers may automatically log information about
            you, your device, and your interactions over time with our
            Services, communications, and other online services, including:
          </p>
          <ul className={`${listClass} mb-6`}>
            <li>
              Device data, such as operating system, browser type, device type,
              IP address, language settings, and general location information.
            </li>
            <li>
              Online activity data, such as pages viewed, time on page,
              navigation paths, access times, and interactions with marketing
              emails.
            </li>
          </ul>

          <p className={paragraphClass}>
            We use cookies, local storage technologies, and web beacons for
            automatic data collection and analytics.
          </p>

          <h2 className={sectionHeadingClass}>
            How we use your personal information
          </h2>
          <p className={paragraphClass}>To operate our Services:</p>
          <ul className={`${listClass} mb-6`}>
            <li>Provide, operate, maintain, secure, and improve our Services.</li>
            <li>
              Communicate with you about our Services, including announcements,
              updates, security alerts, and support messages.
            </li>
            <li>
              Understand your needs and interests, and personalize your
              experience.
            </li>
            <li>Respond to your requests, questions, and feedback.</li>
          </ul>

          <p className={paragraphClass}>
            We may also use personal information for research and development,
            including creating aggregated, de-identified, or anonymous data to
            analyze and improve our Services and business.
          </p>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Direct marketing
          </h3>
          <p className={paragraphClass}>
            We may send direct marketing communications as permitted by law. You
            may opt out as described in the "Your choices" section below.
          </p>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Compliance and protection
          </h3>
          <p className={paragraphClass}>
            We may use personal information to comply with law, protect rights
            and safety, enforce terms, and prevent or investigate fraudulent or
            illegal activity.
          </p>

          <h2 className={sectionHeadingClass}>
            How we disclose your personal information
          </h2>
          <p className={paragraphClass}>
            We may disclose personal information to:
          </p>
          <ul className={`${listClass} mb-6`}>
            <li>
              <span className="font-medium text-grey-800">Affiliates:</span>{" "}
              our parent, subsidiaries, and affiliates for purposes consistent
              with this Privacy Policy.
            </li>
            <li>
              <span className="font-medium text-grey-800">
                Service providers:
              </span>{" "}
              organizations helping us run our Services (for example, hosting,
              analytics, email delivery, and support providers).
            </li>
            <li>
              <span className="font-medium text-grey-800">
                Authorities and others:
              </span>{" "}
              law enforcement, government authorities, or private parties when
              necessary for compliance and protection.
            </li>
            <li>
              <span className="font-medium text-grey-800">
                Business transfers:
              </span>{" "}
              in connection with transactions such as mergers, acquisitions, or
              asset sales.
            </li>
          </ul>

          <h2 className={sectionHeadingClass}>Your choices</h2>
          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Opt out of marketing communications
          </h3>
          <p className={paragraphClass}>
            You may opt out of marketing emails by using the unsubscribe
            instructions in those messages. You may still receive
            service-related and other non-marketing communications.
          </p>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Online tracking opt-out
          </h3>
          <p className={paragraphClass}>
            You can limit online tracking by adjusting browser cookie settings,
            using privacy-focused browsers or plug-ins, and installing Google
            Analytics opt-out tools where available.
          </p>

          <h3 className="text-xl font-normal text-grey-900 leading-tight mb-3">
            Do Not Track
          </h3>
          <p className={paragraphClass}>
            Some browsers send "Do Not Track" signals. We currently do not
            respond to those signals.
          </p>

          <h2 className={sectionHeadingClass}>Other sites and services</h2>
          <p className={paragraphClass}>
            Our Services may link to third-party websites, apps, and services.
            We do not control those third parties and are not responsible for
            their privacy practices.
          </p>

          <h2 className={sectionHeadingClass}>Security</h2>
          <p className={paragraphClass}>
            We use technical, organizational, and physical safeguards designed
            to protect personal information. No safeguards are fail-safe, and we
            cannot guarantee absolute security.
          </p>

          <h2 className={sectionHeadingClass}>Children</h2>
          <p className={paragraphClass}>
            Our Services are not intended for children under 13. If we learn we
            collected personal information from a child under 13 without
            required consent, we will delete it.
          </p>

          <h2 className={sectionHeadingClass}>
            Changes to this Privacy Policy
          </h2>
          <p className={paragraphClass}>
            We may modify this Privacy Policy at any time. If we make material
            changes, we will update the effective date and post the updated
            policy on the website.
          </p>

          <h2 className={sectionHeadingClass}>How to contact us</h2>
          <p className="text-[16px] text-grey-600 leading-relaxed">
            Questions or comments about this Privacy Policy can be sent to{" "}
            <a
              href="mailto:security@cimba.ai"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              security@cimba.ai
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
