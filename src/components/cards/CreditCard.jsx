import { useRef } from 'react'
import { Cpu } from 'lucide-react'
import CountUp from '../ui/CountUp'

const skins = {
  brand: 'bg-gradient-to-br from-brand-500 to-brand-800 text-white',
  dark: 'bg-gradient-to-br from-ink-900 to-brand-900 text-white',
  light: 'bg-white text-ink-900 ring-1 ring-ink-100',
}

export default function CreditCard({ variant = 'brand', balance, holder, valid, number }) {
  const ref = useRef(null)
  const light = variant === 'light'
  const sub = light ? 'text-ink-400' : 'text-white/70'

  // 3D tilt that follows the pointer
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 11}deg) translateY(-4px)`
  }
  const reset = () => { ref.current.style.transform = '' }

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={reset}
      className={`group relative overflow-hidden rounded-3xl shadow-soft transition-[transform,box-shadow] duration-200 hover:shadow-xl ${skins[variant]}`}>
      <span className={`pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent ${light ? 'via-brand-100/70' : 'via-white/30'} to-transparent opacity-0 group-hover:animate-shine`} />
      <div className="p-5 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className={`text-xs ${sub}`}>Balance</p>
            <p className="text-xl font-bold"><CountUp value={`$${balance.toLocaleString()}`} /></p>
          </div>
          <Cpu size={30} className={light ? 'text-ink-300' : 'text-white/85'} />
        </div>
        <div className="mt-5 flex gap-10">
          <div><p className={`text-[11px] ${sub}`}>Card holder</p><p className="text-sm font-semibold">{holder}</p></div>
          <div><p className={`text-[11px] ${sub}`}>Valid thru</p><p className="text-sm font-semibold">{valid}</p></div>
        </div>
      </div>
      <div className={`flex items-center justify-between px-5 py-3.5 ${light ? 'border-t border-ink-100' : 'bg-white/10'}`}>
        <p className="text-base font-semibold tracking-wider sm:text-lg">{number}</p>
        <span className="relative h-7 w-11">
          <span className={`absolute left-0 h-7 w-7 rounded-full ${light ? 'bg-ink-300/80' : 'bg-white/50'}`} />
          <span className={`absolute right-0 h-7 w-7 rounded-full ${light ? 'bg-ink-400/60' : 'bg-white/30'}`} />
        </span>
      </div>
    </div>
  )
}
