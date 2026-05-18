import { useAuth } from '../AuthContext';
import { Calendar } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Welcome back, {user?.name?.split(' ')[0]}!</h2>
      
      <div className="card">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Calendar size={20} color="var(--primary)" />
          Upcoming Meals
        </h3>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
          No meals scheduled for today. Head to the Recipes tab to plan your week!
        </p>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '16px' }}>Quick Actions</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <button className="btn-primary" style={{ width: '100%' }}>Scan Item</button>
          <button className="btn-primary" style={{ width: '100%', backgroundColor: 'var(--text-main)' }}>Find Recipe</button>
        </div>
      </div>
    </div>
  );
}
