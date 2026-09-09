
import React, { useState } from "react";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!confirmed) {
      alert("Please confirm that you want to delete your account.");
      return;
    }

    /*
      IMPORTANT:
      This currently submits the request on the website only.

      To ACTUALLY delete an account, connect this function
      to your backend/Firebase/Supabase API.

      Example:

      fetch("https://your-api.com/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          reason: reason,
        }),
      });
    */

    console.log("Account deletion request:", {
      email,
      reason,
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Delete Account
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            You can request deletion of your account and associated
            personal data from this page.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">

          {!submitted ? (
            <>
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900">
                  Request Account Deletion
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  If you no longer wish to use our application, you can
                  submit an account deletion request below. Please enter
                  the email address associated with your account.
                </p>
              </section>

              {/* Warning */}
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="font-semibold text-red-800">
                  Please note
                </h3>

                <p className="mt-2 text-sm leading-6 text-red-700">
                  Account deletion may permanently remove your account
                  and associated data. Once the deletion process is
                  completed, the account may not be recoverable.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Account Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the email linked to your account"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Reason for Deletion
                    <span className="ml-1 font-normal text-gray-500">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="reason"
                    name="reason"
                    rows="5"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Tell us why you want to delete your account..."
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Confirmation */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) =>
                        setConfirmed(e.target.checked)
                      }
                      className="mt-1 h-4 w-4 rounded border-gray-300"
                    />

                    <span className="text-sm leading-6 text-gray-700">
                      I understand that requesting account deletion may
                      permanently delete my account and associated data,
                      and that this action may not be reversible after
                      the deletion is completed.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-red-600 px-5 py-3.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
                >
                  Request Account Deletion
                </button>
              </form>
            </>
          ) : (
            /* Success Screen */
            <div className="py-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Request Received
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
                Your account deletion request has been received.
                Please allow reasonable processing time for the request
                to be completed.
              </p>

              <div className="mt-6 rounded-xl bg-green-50 p-5 text-left">
                <p className="text-sm leading-6 text-green-800">
                  <strong>Account:</strong> {email}
                </p>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  If additional verification is required, our support
                  team may contact you using the information associated
                  with your account.
                </p>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setEmail("");
                  setReason("");
                  setConfirmed(false);
                }}
                className="mt-6 rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
              >
                Submit Another Request
              </button>
            </div>
          )}

          {/* What Gets Deleted */}
          <section className="mt-10 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              What data will be deleted?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              When your account deletion request is processed, personal
              information associated with your account will be deleted
              where applicable.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-gray-600">
              <li>Account profile information</li>
              <li>Account-related personal information</li>
              <li>User-generated content associated with the account</li>
              <li>Other account data that is eligible for deletion</li>
            </ul>
          </section>

          {/* Retained Data */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              What data may be retained?
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Some information may be retained when required by law,
              regulations, fraud prevention, security requirements,
              dispute resolution, or other legitimate business
              purposes. Any retained information will be handled in
              accordance with our Privacy Policy.
            </p>
          </section>

          {/* Processing */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Deletion Processing
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Account deletion requests are reviewed and processed
              within a reasonable period. The exact processing time may
              depend on verification requirements and the systems
              involved in deleting your account information.
            </p>
          </section>

          {/* Contact */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Contact & Support
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              If you have any questions regarding account deletion,
              please contact our support team through the Help & Support
              section available in the application.
            </p>
          </section>

          {/* Links */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-gray-200 pt-6">
            <a
              href="/privacy-policy"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-of-service"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Last updated: September 7, 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
