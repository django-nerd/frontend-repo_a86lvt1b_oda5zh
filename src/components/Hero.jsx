import { ArrowRight, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 border border-blue-200">Trusted B2B Procurement</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Source non‑medical goods with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Consolidate suppliers, compare quotes, and manage RFQs in one place. From office supplies to IT equipment, we streamline your purchasing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onExplore} className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Explore Catalog
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#rfq" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">
                Create RFQ
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-600" /> Verified suppliers</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-blue-600" /> Fast fulfillment</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-600" /> Quality assured</div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-inner border border-slate-200 p-4">
              <div className="grid grid-cols-3 gap-3 h-full">
                {["Paper & Stationery","IT & Electronics","Furniture","Maintenance","Catering","Packaging","Safety","Cleaning","Outdoor"].map((c, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center text-center text-slate-700 text-sm px-2 py-3">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
