import React from "react";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        We may collect information you provide directly to us, such as your
        name, email address, phone number, and profile details when you create
        an account.
        <br />
        <br />
        We may also automatically collect certain technical information,
        including device type, operating system, app version, device
        identifiers, app usage information, crash reports, and log
        information.
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        We use the information we collect to operate, maintain, and improve
        our app and services. We may use your information to:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Create and manage your account</li>
          <li>Provide and improve app features</li>
          <li>Personalize your experience</li>
          <li>Respond to support requests</li>
          <li>Send important service-related notifications</li>
          <li>Detect and prevent fraud or security issues</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Sharing of Information",
    content: (
      <>
        We do not sell your personal information.
        <br />
        <br />
        We may share limited information with trusted third-party service
        providers who help us operate our services, such as hosting,
        analytics, authentication, crash reporting, or notification providers.
        <br />
        <br />
        We may also disclose information when required by law or when
        reasonably necessary to protect the rights, property, or safety of our
        users and the public.
      </>
    ),
  },
  {
    title: "4. Data Storage & Security",
    content: (
      <>
        We take reasonable technical and organizational measures to protect
        your information from unauthorized access, alteration, disclosure,
        loss, or destruction.
        <br />
        <br />
        However, no method of electronic transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </>
    ),
  },
  {
    title: "5. Your Choices & Rights",
    content: (
      <>
        Depending on applicable laws, you may have the right to access,
        update, correct, or request deletion of your personal information.
        <br />
        <br />
        You may also withdraw certain permissions or consent where applicable.
      </>
    ),
  },
  {
    title: "6. Account Deletion",
    content: (
      <>
        You may request deletion of your account and associated personal
        information.
        <br />
        <br />
        You can request account deletion through the account deletion option
        available in our app or through our account deletion webpage.
        <br />
        <br />
        Some information may be retained when required by law or when
        necessary for legitimate business purposes, fraud prevention, or
        security.
      </>
    ),
  },
  {
    title: "7. Children's Privacy",
    content: (
      <>
        Our app is not intended for children under the applicable minimum age
        required by law.
        <br />
        <br />
        We do not knowingly collect personal information from children without
        appropriate consent. If you believe a child has provided us with
        personal information, please contact us so we can take appropriate
        action.
      </>
    ),
  },
  {
    title: "8. Cookies & Tracking",
    content: (
      <>
        Our website or services may use cookies, SDKs, or similar technologies
        to provide functionality, remember preferences, analyze usage, and
        improve our services.
        <br />
        <br />
        Third-party SDKs used by the app may also collect technical or usage
        information according to their respective privacy policies.
      </>
    ),
  },
  {
    title: "9. Third-Party Services",
    content: (
      <>
        Our app may use third-party services for functionality such as
        authentication, hosting, analytics, crash reporting, notifications,
        and other technical services.
        <br />
        <br />
        These providers may process information according to their own privacy
        policies and applicable laws.
      </>
    ),
  },
  {
    title: "10. Third-Party Links",
    content: (
      <>
        Our app or website may contain links to third-party websites or
        services.
        <br />
        <br />
        We are not responsible for the privacy practices, security, or content
        of third-party websites. We recommend reviewing their privacy policies
        before providing personal information.
      </>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <>
        We may update this Privacy Policy from time to time.
        <br />
        <br />
        When changes are made, we will update the "Last Updated" date at the
        top of this page. We encourage you to review this Privacy Policy
        periodically.
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-8">
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">

        {/* Intro Card */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mb-3 text-4xl">🔒</div>

          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Your privacy matters
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            This policy explains how we collect, use, store, and protect your
            information when you use our application and related services.
          </p>

          <p className="mt-4 text-xs font-semibold text-slate-500 sm:text-sm">
            Last updated: September 7, 2026
          </p>
        </section>

        {/* Policy Sections */}
        {sections.map((section) => (
          <section
            key={section.title}
            className="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
          >
            <h2 className="mb-3 text-lg font-bold text-slate-900 sm:text-xl">
              {section.title}
            </h2>

            <div className="text-sm leading-7 text-slate-600 sm:text-base">
              {section.content}
            </div>
          </section>
        ))}

        {/* Contact */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-lg font-bold text-slate-900 sm:text-xl">
            12. Contact Us
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            If you have any questions or concerns about this Privacy Policy or
            how your information is handled, please contact us.
          </p>

          <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            <p>
              <span className="font-semibold">App Name:</span> Your App Name
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-6 text-center text-xs leading-6 text-slate-500 sm:text-sm">
          By using our app, you acknowledge that you have read and understood
          this Privacy Policy.
        </footer>
      </main>
    </div>
  );
}
