import { useMemo } from 'react';
import { Monitor, Printer, Package, PenTool, Chair, Usb } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Office Chair Ergonomic', category: 'Furniture', price: 189, icon: Chair },
  { id: 2, name: 'A4 Copy Paper 80gsm (500s)', category: 'Paper & Stationery', price: 6.5, icon: Package },
  { id: 3, name: 'Laser Printer Pro 400', category: 'IT & Electronics', price: 245, icon: Printer },
  { id: 4, name: '24" IPS Monitor', category: 'IT & Electronics', price: 129, icon: Monitor },
  { id: 5, name: 'Dry Erase Markers (12-pack)', category: 'Paper & Stationery', price: 9.9, icon: PenTool },
  { id: 6, name: 'USB-C Docking Station', category: 'IT & Electronics', price: 79, icon: Usb },
];

export default function Catalog({ query = '', onAddToRfq }) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="py-12" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Popular goods</h2>
            <p className="text-slate-600">Browse a sample of frequently procured items</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{p.name}</div>
                      <div className="text-sm text-slate-500">{p.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-900 font-semibold">${p.price.toFixed(2)}</div>
                    <div className="text-xs text-slate-500">unit price</div>
                  </div>
                </div>
                <button onClick={() => onAddToRfq(p)} className="mt-4 w-full rounded-lg bg-slate-900 text-white py-2.5 hover:bg-slate-800">Add to RFQ</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
