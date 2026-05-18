import { Search, ScanLine } from 'lucide-react';

export default function Inventory() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Pantry Inventory</h2>
        <button className="btn-primary" style={{ padding: '8px 12px' }}>
          <ScanLine size={18} />
          <span>Scan</span>
        </button>
      </div>

      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <Search size={18} style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--text-light)' }} />
        <input 
          type="text" 
          placeholder="Search ingredients..." 
          style={{ width: '100%', padding: '10px 10px 10px 36px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
        />
      </div>

      <div className="card">
        <p style={{ color: 'var(--text-light)', textAlign: 'center', padding: '20px 0' }}>
          Your pantry is empty. Scan a barcode or search to add items.
        </p>
      </div>
    </div>
  );
}
