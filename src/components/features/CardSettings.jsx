import { useState } from 'react'
import { Ban, Lock, Store, Smartphone, Apple } from 'lucide-react'
import Card from '../ui/Card'
import Toggle from '../ui/Toggle'

const items = [
  { key: 'block', title: 'Block Card', sub: 'Instantly block your card', icon: Ban, tone: 'bg-gold-50 text-gold-600' },
  { key: 'pin', title: 'Change Pin Code', sub: 'Choose another pin code', icon: Lock, tone: 'bg-sky-50 text-sky-600' },
  { key: 'gpay', title: 'Add to Google Pay', sub: 'Withdraw without any card', icon: Smartphone, tone: 'bg-coral-50 text-coral-500' },
  { key: 'apay', title: 'Add to Apple Pay', sub: 'Withdraw without any card', icon: Apple, tone: 'bg-brand-50 text-brand-600' },
  { key: 'store', title: 'Add to Apple Store', sub: 'Withdraw without any card', icon: Store, tone: 'bg-brand-50 text-brand-600' },
]

export default function CardSettings() {
  const [on, setOn] = useState({ block: false, pin: false, gpay: true, apay: false, store: false })
  return (
    <Card className="space-y-1 !p-3">
      {items.map(({ key, title, sub, icon: Icon, tone }) => (
        <div key={key} className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-ink-50">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tone}`}><Icon size={22} /></span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{title}</p>
            <p className="truncate text-sm text-ink-500">{key === 'block' && on.block ? 'Card is blocked' : sub}</p>
          </div>
          <Toggle label={title} checked={on[key]} onChange={(v) => setOn({ ...on, [key]: v })} tone={key === 'block' ? 'bg-coral-500' : 'bg-brand-600'} />
        </div>
      ))}
    </Card>
  )
}
