import Link from "next/link";

export default function OneBanner() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-2">
              1:1 Guided Track
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
              Your first order — I walk it with you (1:1).
            </h2>
            <p className="text-slate-300 max-w-xl">
              We don&apos;t sell theory. We help you finish your first order. From supplier selection to goods at your door — together.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/talk"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Leave WhatsApp →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
