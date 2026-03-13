"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface UnlockGateProps {
  full: string;
}

export default function UnlockGate({ full }: UnlockGateProps) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("ea_access");
    if (token) setUnlocked(true);
  }, []);

  if (unlocked) {
    return (
      <div className="prose prose-slate max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: full.replace(/\n\n/g, "<br/><br/>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/^\*\*(.*?)\*\*$/mg, "<strong>$1</strong>") }}
        />
      </div>
    );
  }

  return (
    <div className="my-12">
      {/* Fade overlay */}
      <div className="relative h-16 -mt-16 mb-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="border border-slate-200 rounded-xl p-8 bg-slate-50 text-center">
        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 text-lg">
          🔒
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Unlock the full post + action checklist
        </h3>
        <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto">
          Members get the full breakdown, the action checklist, and access to all 12+ articles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-slate-700 transition-colors"
          >
            Log in to read full →
          </Link>
          <Link
            href="/talk"
            className="inline-flex items-center justify-center gap-2 border border-orange-400 text-orange-600 text-sm font-medium px-5 py-2.5 rounded-md hover:bg-orange-50 transition-colors"
          >
            Get a tailored plan (free)
          </Link>
        </div>
        <p className="text-xs text-slate-400 mt-4">
          Already have access?{" "}
          <Link href="/login" className="underline hover:text-slate-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
