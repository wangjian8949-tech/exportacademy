import Link from "next/link";
import { type CaseStudy } from "@/content/cases";

interface CaseCardProps {
  case_: CaseStudy;
}

export default function CaseCard({ case_ }: CaseCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium bg-orange-50 text-orange-700 px-2 py-0.5 rounded">
          {case_.category}
        </span>
        <span className="text-xs text-slate-400">{case_.timeline}</span>
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{case_.name}</p>
      <div className="space-y-3 mb-5 flex-1">
        <div>
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Starting point</p>
          <p className="text-sm text-slate-700 leading-relaxed">{case_.starting}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">What we changed</p>
          <p className="text-sm text-slate-700 leading-relaxed">{case_.changed}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Outcome</p>
          <p className="text-sm text-slate-700 leading-relaxed">{case_.outcome}</p>
        </div>
      </div>
      <blockquote className="text-sm italic text-slate-600 border-l-2 border-orange-300 pl-3 mb-4 leading-relaxed">
        &ldquo;{case_.quote}&rdquo;
      </blockquote>
      <Link
        href="/talk"
        className="text-sm font-medium text-center py-2 px-4 border border-slate-300 rounded hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
      >
        Want this? Talk 1:1 →
      </Link>
    </div>
  );
}
