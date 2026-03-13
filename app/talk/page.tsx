"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "1234567890"; // placeholder

export default function TalkPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    whatsapp: "",
    name: "",
    product: "",
    stage: "",
    track: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage as simple lead store
    const leads = JSON.parse(localStorage.getItem("ea_leads") || "[]");
    leads.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("ea_leads", JSON.stringify(leads));
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            ✓
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">You&apos;re in.</h1>
          <p className="text-slate-600 mb-6">
            We&apos;ll message you on WhatsApp within 24 hours with your tailored first-order plan.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Want to connect immediately?
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
          >
            Open WhatsApp →
          </a>
          <div className="mt-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-slate-600">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Free — No commitment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Get your tailored plan (free).
            </h1>
            <p className="text-lg text-slate-600">
              Tell us what you sell (or want to sell). We&apos;ll map your first order — the right suppliers, the right track, the right next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    WhatsApp number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 8900"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                  <p className="text-xs text-slate-400 mt-1">Include country code. We&apos;ll only message about your plan.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Your name <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alex"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Product or category you&apos;re interested in <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. silicone kitchen tools, fitness accessories, pet toys..."
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Where are you right now? <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select your stage</option>
                    <option value="idea">Just an idea — haven&apos;t started yet</option>
                    <option value="sample">Researching suppliers / have some samples</option>
                    <option value="ready">Ready to place an order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Which track interests you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.track}
                    onChange={(e) => setForm({ ...form, track: e.target.value })}
                    className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select a track</option>
                    <option value="99">$99 Self-Study</option>
                    <option value="499">$499 Guided (8 weeks)</option>
                    <option value="999">$999 Done-with-you (16 weeks)</option>
                    <option value="b2b">B2B / Corporate sourcing</option>
                    <option value="unsure">Not sure yet — need guidance</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors text-sm"
                >
                  Get my free plan →
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No spam. No cold calls. Just your plan on WhatsApp.
                </p>
              </form>
            </div>

            {/* Why talk */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">What happens next</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "We review your details", desc: "Within 24 hours. We look at your category, stage, and budget." },
                    { step: "2", title: "You get a specific plan", desc: "Not a generic PDF. A message on WhatsApp with the exact next steps for your situation." },
                    { step: "3", title: "You decide what to do with it", desc: "No pressure. No pitch. If the plan makes sense, we talk about the right track." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                        {s.step}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{s.title}</p>
                        <p className="text-slate-500 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <p className="font-semibold text-slate-900 mb-3 text-sm">What people say about the consultation:</p>
                <div className="space-y-3">
                  {[
                    { quote: "I got more actionable info in 15 minutes than from 3 months of YouTube.", who: "M.R., UK" },
                    { quote: "They told me honestly that my original product idea was wrong. Saved me $2,000.", who: "J.T., Singapore" },
                  ].map((q) => (
                    <blockquote key={q.who} className="text-sm text-slate-600 italic border-l-2 border-orange-300 pl-3">
                      &ldquo;{q.quote}&rdquo;
                      <footer className="text-xs text-slate-400 not-italic mt-1">{q.who}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-3">Prefer to message directly?</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-green-400 text-green-700 text-sm font-medium px-4 py-2 rounded-md hover:bg-green-50 transition-colors"
                >
                  Open WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
