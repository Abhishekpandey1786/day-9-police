import React, { useState } from "react";

function Deleteaccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-md sm:p-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Delete Your Account
          </h1>

          <p className="mt-3 text-gray-600">
            You can request deletion of your account and associated data
            using the form below.
          </p>
        </div>

        {/* Success Message */}
        {submitted ? (
          <div className="rounded-xl bg-green-50 p-6 text-center">
            <h2 className="text-xl font-semibold text-green-800">
              Deletion Request Submitted
            </h2>

            <p className="mt-2 text-green-700">
              We have received your account deletion request. Our support
              team will process your request according to our data retention
              and legal requirements.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Account Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the email associated with your account"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="reason"
                className="mb-2 block text-sm font-medium text-gray-800"
              >
                Reason for Deletion
              </label>

              <textarea
                id="reason"
                rows="5"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Optional"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Information */}
            <div className="rounded-xl bg-yellow-50 p-4">
              <h3 className="font-semibold text-yellow-900">
                Before you continue
              </h3>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-yellow-800">
                <li>
                  Account deletion may permanently remove your account data.
                </li>
                <li>
                  Some information may be retained when required by law or
                  for legitimate business purposes.
                </li>
                <li>
                  Deleted data may not be recoverable after the request is
                  processed.
                </li>
              </ul>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Request Account Deletion
            </button>
          </form>
        )}

        {/* Contact */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            If you have questions about account deletion, please contact our
            support team through the Help & Support section of the app.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: September 7, 2026
          </p>
        </div>

      </div>
    </div>
  );
}

export default Deleteaccount;