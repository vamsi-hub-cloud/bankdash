import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, Settings, Bell } from 'lucide-react'
import { navItems } from './navItems'
import Avatar from '../ui/Avatar'

const SearchInput = ({ className = '' }) => (
  <label className={`items-center gap-3 rounded-full bg-ink-50 px-5 py-3 text-ink-400 transition focus-within:ring-4 focus-within:ring-brand-100 ${className}`}>
    <Search size={18} />
    <input placeholder="Search for something" className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400" />
  </label>
)

export default function Header({ onMenu }) {
  const { pathname } = useLocation()
  const [searching, setSearching] = useState(false)
  const title = navItems.find((n) => n.to === pathname)?.title || 'BankDash'
  return (
    <header className="sticky top-0 z-20 border-b border-ink-100 bg-white/85 backdrop-blur">
      <div className="flex h-20 items-center gap-3 px-4 sm:px-8">
        <button onClick={onMenu} className="rounded-xl p-2 text-ink-700 hover:bg-ink-50 lg:hidden" aria-label="Open menu"><Menu size={22} /></button>
        <h1 className="flex-1 truncate text-xl font-extrabold sm:text-2xl">{title}</h1>
        <SearchInput className="hidden md:flex md:w-64 lg:w-72" />
        <button onClick={() => setSearching(!searching)} className="grid h-11 w-11 place-items-center rounded-full bg-ink-50 text-ink-700 md:hidden" aria-label="Search"><Search size={20} /></button>
        <Link to="/settings" className="hidden h-11 w-11 place-items-center rounded-full bg-ink-50 text-brand-600 transition hover:bg-brand-50 sm:grid" aria-label="Settings"><Settings size={20} /></Link>
        <button className="relative grid h-11 w-11 place-items-center rounded-full bg-ink-50 text-coral-500 transition hover:bg-coral-50" aria-label="Notifications">
          <Bell size={20} /><span className="absolute right-3 top-3 h-2 w-2 animate-ping rounded-full bg-coral-400" /><span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-coral-500 ring-2 ring-white" />
        </button>
        <span className="rounded-full ring-2 ring-brand-100 transition hover:ring-brand-300"><Avatar name="Eddy Cusuma" imageKey="user" size="h-11 w-11 sm:h-12 sm:w-12" /></span>
      </div>
      {searching && <div className="px-4 pb-4 md:hidden"><SearchInput className="flex" /></div>}
    </header>
  )
}
