export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">© {new Date().getFullYear()} ProcurePlus. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#catalog" className="hover:text-slate-900">Catalog</a>
          <a href="#rfq" className="hover:text-slate-900">RFQ</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
