import { NavLink, Link } from 'react-router-dom'
import { Landmark, X, ShieldCheck } from 'lucide-react'
import { navItems } from './navItems'

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-30 bg-ink-900/40 backdrop-blur-sm transition lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-ink-100 bg-white transition-transform duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2.5 text-xl font-extrabold text-brand-800">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-400 text-white shadow-md transition hover:rotate-6"><Landmark size={18} /></span>
            BankDash
          </div>
          <button onClick={onClose} className="rounded-lg p-1 text-ink-500 lg:hidden" aria-label="Close menu"><X size={20} /></button>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={onClose}
              className={({ isActive }) => `group relative flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900'}`}>
              {({ isActive }) => (
                <>
                  {isActive && <span className="absolute -left-3 h-8 w-1.5 rounded-r-full bg-brand-600" />}
                  <Icon size={20} className={`transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:translate-x-0.5"}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <Link to="/settings" onClick={onClose} className="group relative m-4 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-500 p-5 text-white transition hover:-translate-y-0.5 hover:shadow-lg">
          <span className="animate-float absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
          <ShieldCheck size={26} className="relative" />
          <p className="relative mt-3 text-sm font-bold">Secure your account</p>
          <p className="relative text-xs text-white/75">Turn on two-factor authentication</p>
        </Link>
      </aside>
    </>
  )
}
