import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import RFQForm from './components/RFQForm';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('');
  const [rfqItems, setRfqItems] = useState([]);

  const rfqCount = rfqItems.length;

  const handleAddToRfq = (item) => {
    setRfqItems((prev) => [...prev, item]);
    window.location.hash = 'rfq';
  };

  const handleRemoveItem = (index) => {
    setRfqItems((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmitRFQ = (payload) => {
    // For now, show a friendly confirmation. Backend can be wired later.
    alert(`RFQ submitted!\n\nCompany: ${payload.company}\nEmail: ${payload.email}\nItems: ${payload.items.length}`);
    setRfqItems([]);
  };

  const onExplore = () => {
    const el = document.getElementById('catalog');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const subtitle = useMemo(() => {
    if (!query) return 'Browse a sample of frequently procured items';
    return `Results for “${query}”`;
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onSearchChange={setQuery} rfqCount={rfqCount} />
      <Hero onExplore={onExplore} />
      <Catalog query={query} onAddToRfq={handleAddToRfq} subtitle={subtitle} />
      <RFQForm items={rfqItems} onRemoveItem={handleRemoveItem} onSubmit={onSubmitRFQ} />
      <Footer />
    </div>
  );
}

export default App;
