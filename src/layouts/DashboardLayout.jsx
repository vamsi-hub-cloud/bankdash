import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <span className="animate-float absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <span className="animate-float absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-coral-100/70 blur-3xl [animation-delay:-4s]" />
      </div>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-64">
        <Header onMenu={() => setOpen(true)} />
        <main key={pathname} className="stagger-deep mx-auto max-w-[1400px] space-y-6 p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
