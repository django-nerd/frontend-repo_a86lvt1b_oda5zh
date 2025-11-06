import { useState } from 'react';
import { Send, Trash2 } from 'lucide-react';

export default function RFQForm({ items = [], onRemoveItem, onSubmit }) {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const total = items.reduce((sum, i) => sum + i.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !email || items.length === 0) return;
    onSubmit?.({ company, email, notes, items });
    setCompany('');
    setEmail('');
    setNotes('');
  };

  return (
    <section className="py-12 bg-slate-50" id="rfq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900">Request for Quotation</h2>
            <p className="text-slate-600 mb-6">Review items and share your company details to get quotes from verified suppliers.</p>

            {items.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-300 p-6 text-slate-500">No items added yet. Browse the catalog to add items to your RFQ.</div>
            ) : (
              <ul className="space-y-3 mb-6">
                {items.map((item, idx) => (
                  <li key={`${item.id}-${idx}`} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
                    <div>
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.category}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-slate-900 font-semibold">${item.price.toFixed(2)}</div>
                      <button onClick={() => onRemoveItem(idx)} className="text-slate-500 hover:text-red-600" aria-label="Remove">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Delivery requirements, brand preferences, quantities..." />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-slate-600 text-sm">Estimated total value: <span className="font-semibold text-slate-900">${total.toFixed(2)}</span></div>
                <button disabled={!company || !email || items.length === 0} className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg disabled:opacity-50">
                  <Send className="h-4 w-4" /> Submit RFQ
                </button>
              </div>
            </form>
          </div>
          <aside className="lg:pl-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 sticky top-24">
              <h3 className="font-semibold text-slate-900 mb-2">How it works</h3>
              <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1">
                <li>Add items to your RFQ</li>
                <li>Submit with your company details</li>
                <li>Get competitive quotes from verified suppliers</li>
              </ol>
              <p className="text-xs text-slate-500 mt-4">We match you with suppliers based on category, location and delivery timelines.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
