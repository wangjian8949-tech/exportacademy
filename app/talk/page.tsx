import Link from "next/link";
import Image from "next/image";

export default function TalkPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              Free — No commitment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Talk with us 1:1
            </h1>
            <p className="text-lg text-slate-600">
              Scan a QR code below to message us directly on WhatsApp or WeChat. We&apos;ll reply within 24 hours with a tailored first-order plan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h2>
              <p className="text-sm text-slate-500 mb-5">For international clients</p>
              <div className="bg-white p-3 border border-slate-100 rounded-lg">
                <Image
                  src="/whatsapp.jpg"
                  alt="WhatsApp QR code"
                  width={260}
                  height={260}
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] object-contain"
                />
              </div>
              <p className="text-xs text-slate-400 mt-4">Scan with your phone camera</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-1">WeChat</h2>
              <p className="text-sm text-slate-500 mb-5">For clients in China</p>
              <div className="bg-white p-3 border border-slate-100 rounded-lg">
                <Image
                  src="/wechat.jpg"
                  alt="WeChat QR code"
                  width={260}
                  height={260}
                  className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] object-contain"
                />
              </div>
              <p className="text-xs text-slate-400 mt-4">Scan with WeChat</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="text-sm text-slate-400 hover:text-slate-600">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
