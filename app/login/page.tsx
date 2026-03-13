"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Soft unlock: store access token in localStorage
      localStorage.setItem("ea_access", "unlocked");
      localStorage.setItem("ea_email", email);
      setSubmitted(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-bold text-xl text-slate-900">
              Export<span className="text-orange-500">Academy</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {submitted ? "Unlocking..." : "Access your account"}
          </h1>
          <p className="text-slate-500 text-sm">
            {submitted
              ? "Redirecting to your dashboard."
              : "Enter your email to unlock full articles and your resource library."}
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-medium py-2.5 px-4 rounded-md hover:bg-slate-700 transition-colors text-sm"
              >
                Continue →
              </button>
            </form>
            <p className="text-xs text-slate-400 text-center mt-4">
              Don&apos;t have access yet?{" "}
              <Link href="/talk" className="text-orange-600 hover:underline">
                Get a free plan
              </Link>
            </p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              ✓
            </div>
            <p className="text-slate-700 text-sm">Access granted. Redirecting...</p>
          </div>
        )}
      </div>
    </div>
  );
}
