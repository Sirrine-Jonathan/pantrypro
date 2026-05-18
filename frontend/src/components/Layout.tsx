import { Outlet, NavLink } from 'react-router-dom';
import { Home, BookOpen, Package, ShoppingCart, LogOut } from 'lucide-react';
import { useAuth } from '../AuthContext';
import './Layout.css';

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="layout">
      <header className="topbar">
        <div className="topbar-brand">
          <BookOpen className="brand-icon" />
          <h1>PantryPro</h1>
        </div>
        <div className="topbar-user">
          {user && (
            <>
              <img src={user.picture} alt="Profile" className="avatar" />
              <button onClick={logout} className="logout-btn" title="Logout">
                <LogOut size={20} />
              </button>
            </>
          )}
        </div>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/recipes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={24} />
          <span>Recipes</span>
        </NavLink>
        <NavLink to="/inventory" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Package size={24} />
          <span>Inventory</span>
        </NavLink>
        <NavLink to="/shopping" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <ShoppingCart size={24} />
          <span>Shopping</span>
        </NavLink>
      </nav>
    </div>
  );
}
