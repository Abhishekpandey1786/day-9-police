
import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By downloading, accessing, or using this application, you agree to be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the application.",
  },
  {
    title: "2. Use of the Application",
    content: (
      <>
        You agree to use the application only for lawful purposes and in
        accordance with these Terms. You must not:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Use the app for any illegal or unauthorized purpose.</li>
          <li>Attempt to gain unauthorized access to the app or its systems.</li>
          <li>Interfere with or disrupt the operation of the application.</li>
          <li>Upload or transmit harmful, malicious, or illegal content.</li>
          <li>Abuse, harass, or harm other users.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. User Accounts",
    content:
      "If the application requires an account, you are responsible for providing accurate information and keeping your account credentials secure. You are responsible for activities performed through your account and should notify us if you believe your account has been accessed without authorization.",
  },
  {
    title: "4. User Content",
    content:
      "If you submit, upload, or share content through the application, you are responsible for that content. You agree that your content must not violate applicable laws, third-party rights, or these Terms and Conditions.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "The application, including its design, branding, text, graphics, software, and other materials, is owned by or licensed to us and is protected by applicable intellectual property laws. You may not copy, modify, distribute, sell, or reproduce any part of the application without prior permission.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "The application may use or contain links to third-party services. We are not responsible for the availability, content, policies, or practices of third-party services. Your use of third-party services may be subject to their own terms and privacy policies.",
  },
  {
    title: "7. Privacy",
    content: (
      <>
        Your use of the application is also subject to our Privacy Policy,
        which explains how we collect, use, and protect your information.
        <br />
        <br />
        Please review our Privacy Policy for more information.
      </>
    ),
  },
  {
    title: "8. Account Suspension or Termination",
    content:
      "We reserve the right to suspend or terminate access to the application if we reasonably believe that you have violated these Terms, applicable laws, or the rights of other users. You may also stop using the application and request deletion of your account where applicable.",
  },
  {
    title: "9. Disclaimer",
    content:
      "The application is provided on an 'as is' and 'as available' basis. To the extent permitted by applicable law, we do not guarantee that the application will always be available, secure, error-free, or meet all of your requirements.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, we will not be responsible for indirect, incidental, special, consequential, or other damages arising from or related to your use of the application.",
  },
  {
    title: "11. Changes to These Terms",
    content:
      "We may update these Terms and Conditions from time to time. When changes are made, we will update the date at the top of this page. Your continued use of the application after changes are posted means that you accept the updated Terms.",
  },
  {
    title: "12. Governing Law",
    content:
      "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of the jurisdiction in which our business operates, unless otherwise required by applicable law.",
  },
];

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-8">
          <h1 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Terms & Conditions
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Intro */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mb-3 text-4xl">📄</div>

          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Terms of Use
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            These Terms and Conditions explain the rules and requirements for
            using our application and related services.
          </p>

          <p className="mt-4 text-xs font-semibold text-slate-500 sm:text-sm">
            Last updated: September 7, 2026
          </p>
        </section>

        {/* Sections */}
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
            13. Contact Us
          </h2>

          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            If you have any questions about these Terms and Conditions, please
            contact us.
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
          By using our application, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </footer>
      </main>
    </div>
  );
}