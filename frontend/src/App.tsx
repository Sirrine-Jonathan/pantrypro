import { useAuth } from './AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import Inventory from './pages/Inventory';
import Shopping from './pages/Shopping';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

function App() {
  const { user, login } = useAuth();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const res = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.token, data.user);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (err) {
      console.error('Network error during login:', err);
    }
  };

  if (!user) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px 20px' }}>
          <h1 style={{ color: 'var(--primary)' }}>PantryPro</h1>
          <h2>Sign in to continue</h2>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
