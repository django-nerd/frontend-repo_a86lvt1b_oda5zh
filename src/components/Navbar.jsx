import { ShoppingCart, Search, ClipboardList } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Navbar({ onSearchChange = () => {}, rfqCount = 0 }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <div className="font-semibold text-slate-900 text-lg">ProcurePlus</div>
        </div>

        <div className="flex-1 max-w-xl mx-6 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search office supplies, IT equipment, furniture... (⌘/Ctrl + K)"
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/80"
            />
          </div>
        </div>

        <a href="#rfq" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 shadow hover:bg-blue-700 transition">
          <ClipboardList className="h-4 w-4" />
          <span className="hidden sm:inline">RFQ</span>
          <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold bg-white/20 rounded px-1.5 py-0.5">
            {rfqCount}
          </span>
        </a>
      </div>
    </header>
  );
}
