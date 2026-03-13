import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="font-bold text-base text-white tracking-tight">
                Export<span className="text-orange-400">Academy</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Low-cost path from paycheck to ownership. Built from the China supply chain, delivered 1:1.
            </p>
          </div>

          {/* Program */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Program</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/program#99" className="hover:text-white transition-colors">$99 Self-Study</Link></li>
              <li><Link href="/program#499" className="hover:text-white transition-colors">$499 Guided (8wk)</Link></li>
              <li><Link href="/program#999" className="hover:text-white transition-colors">$999 Done-with-you</Link></li>
              <li><Link href="/b2b" className="hover:text-white transition-colors">B2B Sourcing</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Learn</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Results</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/talk" className="hover:text-white transition-colors">
                  Talk 1:1 (WhatsApp)
                </Link>
              </li>
              <li>
                <Link href="/talk" className="hover:text-white transition-colors">
                  Get a Free Plan
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs transition-colors">IG</a>
              <a href="#" aria-label="Twitter/X" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs transition-colors">X</a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-xs transition-colors">in</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} ExportAcademy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/talk" className="hover:text-white transition-colors">
              Talk 1:1 →
            </Link>
            <Link href="/program#99" className="hover:text-white transition-colors">
              Try $99 →
            </Link>
            <Link href="/results" className="hover:text-white transition-colors">
              See Proof →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
