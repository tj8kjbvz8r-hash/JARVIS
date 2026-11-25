import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Placeholder from './pages/Placeholder.jsx'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/crm', label: 'CRM' },
  { to: '/settings', label: 'Settings' },
]

export default function App() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">J.A.R.V.I.S</div>
        <nav>
          {NAV.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="status">● SYSTEMS ONLINE</div>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
          <Route path="/crm" element={<Placeholder title="CRM" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
        </Routes>
      </main>
    </div>
  )
}
