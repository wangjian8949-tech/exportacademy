"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Results", href: "/results" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "B2B", href: "/b2b" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg text-slate-900 tracking-tight">
              Export<span className="text-orange-500">Academy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/blog"
              className="text-xs text-slate-500 hover:text-slate-700 px-2 py-1 transition-colors"
            >
              Subscribe
            </Link>
            <Link
              href="/program#99"
              className="text-sm px-3 py-1.5 rounded-md border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              Try $99
            </Link>
            <Link
              href="/results"
              className="text-sm px-3 py-1.5 rounded-md border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors"
            >
              See Proof
            </Link>
            <Link
              href="/talk"
              className="text-sm px-4 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-700 transition-colors font-medium"
            >
              Talk 1:1
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-100 pt-4">
            <nav className="flex flex-col gap-1 mb-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 py-2 px-2 hover:bg-slate-50 rounded"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
              <Link
                href="/talk"
                className="text-sm text-center px-4 py-2 rounded-md bg-slate-900 text-white font-medium"
                onClick={() => setOpen(false)}
              >
                Talk 1:1 (WhatsApp)
              </Link>
              <Link
                href="/program#99"
                className="text-sm text-center px-4 py-2 rounded-md border border-slate-300 text-slate-700"
                onClick={() => setOpen(false)}
              >
                Try $99 (Self-Study)
              </Link>
              <Link
                href="/results"
                className="text-sm text-center px-4 py-2 rounded-md border border-slate-200 text-slate-600"
                onClick={() => setOpen(false)}
              >
                See Proof
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
