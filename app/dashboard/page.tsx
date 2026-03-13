"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { resources } from "@/content/resources";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("ea_access");
    const storedEmail = localStorage.getItem("ea_email");
    setIsLoggedIn(!!token);
    setEmail(storedEmail);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-600 mb-4">You&apos;re not logged in.</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            Sign in →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Your dashboard</h1>
              {email && <p className="text-sm text-slate-500 mt-1">{email}</p>}
            </div>
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Talk 1:1 →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Path cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Self-Study ($99)", href: "/program#99", desc: "Access your course materials" },
              { label: "Guided Track ($499)", href: "/talk", desc: "Continue with your advisor" },
              { label: "Resources", href: "/resources", desc: "Downloads and templates" },
            ].map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="bg-white border border-slate-200 rounded-lg p-5 hover:border-orange-300 hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-slate-900 mb-1">{c.label}</p>
                <p className="text-sm text-slate-500">{c.desc}</p>
              </Link>
            ))}
          </div>

          {/* Articles */}
          <div className="mb-10">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">All articles (unlocked)</h2>
              <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-700">
                Browse all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogPosts.slice(0, 6).map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
                >
                  <span className="text-xs font-medium bg-orange-50 text-orange-700 px-1.5 py-0.5 rounded mb-2 inline-block">
                    {p.category}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Downloads</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {resources.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{r.title}</p>
                    <p className="text-xs text-slate-400">{r.type}</p>
                  </div>
                  <Link
                    href="/talk"
                    className="text-xs font-medium text-slate-900 border border-slate-300 px-3 py-1.5 rounded hover:bg-slate-50 transition-colors"
                  >
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talk CTA */}
      <section className="bg-white py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-600 mb-4 text-sm">Ready to take the next step?</p>
          <Link
            href="/talk"
            className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Talk 1:1 →
          </Link>
        </div>
      </section>
    </>
  );
}
