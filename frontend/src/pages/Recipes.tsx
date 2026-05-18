import { Plus } from 'lucide-react';

export default function Recipes() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>My Recipes</h2>
        <button className="btn-primary" style={{ padding: '8px', borderRadius: '50%' }}>
          <Plus size={20} />
        </button>
      </div>

      <div className="card">
        <p style={{ color: 'var(--text-light)', textAlign: 'center', padding: '20px 0' }}>
          You haven't added any recipes yet.
        </p>
      </div>
    </div>
  );
}
