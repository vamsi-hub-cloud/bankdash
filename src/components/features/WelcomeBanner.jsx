import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'
import CountUp from '../ui/CountUp'

const greeting = () => { const h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening' }

export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 p-6 text-white shadow-soft sm:p-8 lg:col-span-3">
      <span className="animate-float absolute -right-12 -top-16 h-56 w-56 rounded-full bg-white/10" />
      <span className="animate-float absolute bottom-[-50px] right-32 h-36 w-36 rounded-full bg-coral-400/30 [animation-delay:-3s]" />
      <span className="animate-float absolute right-[38%] top-6 h-8 w-8 rounded-full bg-gold-500/40 [animation-delay:-5s]" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-white/75">{greeting()}, Eddy 👋</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/60">Total balance</p>
          <p className="text-4xl font-extrabold tracking-tight sm:text-5xl"><CountUp value="$12,750" duration={1400} /></p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2.5 text-sm backdrop-blur"><TrendingUp size={18} className="text-brand-100" />Income <b><CountUp value="$5,600" /></b></span>
          <span className="flex items-center gap-2 rounded-2xl bg-white/15 px-4 py-2.5 text-sm backdrop-blur"><TrendingDown size={18} className="text-coral-100" />Expense <b><CountUp value="$3,460" /></b></span>
          <Link to="/transactions" className="group flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:-translate-y-0.5 hover:shadow-lg">
            View activity <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
