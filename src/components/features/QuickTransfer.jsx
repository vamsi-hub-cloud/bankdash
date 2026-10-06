import { useState } from 'react'
import { ChevronRight, Send, Check } from 'lucide-react'
import Card from '../ui/Card'
import Avatar from '../ui/Avatar'
import { contacts } from '../../data/mockData'

export default function QuickTransfer() {
  const [selected, setSelected] = useState(0)
  const [amount, setAmount] = useState('525.50')
  const [sent, setSent] = useState(false)

  const send = () => {
    if (!Number(amount)) return
    setSent(true)
    setTimeout(() => setSent(false), 2200)
  }

  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="flex flex-1 gap-4 overflow-x-auto px-1 pb-2 pt-1 sm:gap-6">
          {contacts.map((c, i) => (
            <button key={c.name} onClick={() => setSelected(i)} className="flex shrink-0 flex-col items-center gap-1 text-center">
              <span className={`rounded-full p-1 transition ${selected === i ? 'ring-2 ring-brand-500' : 'ring-2 ring-transparent'}`}>
                <Avatar name={c.name} imageKey={c.img} size="h-16 w-16 text-lg" index={i} />
              </span>
              <span className={`text-sm ${selected === i ? 'font-bold' : 'font-medium text-ink-700'}`}>{c.name}</span>
              <span className={`text-xs ${selected === i ? 'font-bold text-brand-600' : 'text-ink-400'}`}>{c.role}</span>
            </button>
          ))}
        </div>
        <span className="mt-5 hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink-500 shadow-soft sm:grid"><ChevronRight size={18} /></span>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-sm text-ink-500">Write Amount</span>
        <div className="flex w-full items-center rounded-full bg-ink-50 p-1 focus-within:ring-4 focus-within:ring-brand-100">
          <input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" className="w-full min-w-0 flex-1 bg-transparent px-4 text-sm font-medium outline-none" />
          <button onClick={send} className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition active:scale-95 ${sent ? 'bg-brand-500' : 'bg-brand-700 hover:bg-brand-800'}`}>
            {sent ? <>Sent <Check size={16} /></> : <>Send <Send size={16} /></>}
          </button>
        </div>
      </div>
    </Card>
  )
}
