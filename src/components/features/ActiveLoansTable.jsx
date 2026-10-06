import { useState } from 'react'
import Card from '../ui/Card'
import { activeLoans } from '../../data/mockData'

const money = (n) => `$${n.toLocaleString()}`

export default function ActiveLoansTable() {
  const [loans, setLoans] = useState(activeLoans)
  const repay = (id) => setLoans((l) => l.map((x) => (x.id === id ? { ...x, left: Math.max(0, x.left - x.installment) } : x)))
  const sum = (k) => loans.reduce((a, l) => a + l[k], 0)

  return (
    <Card className="overflow-x-auto !p-3 sm:!p-6">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead>
          <tr className="text-brand-700">{['SL No', 'Loan Money', 'Left to repay', 'Duration', 'Interest rate', 'Installment', 'Repay'].map((h) => <th key={h} className="whitespace-nowrap px-3 pb-4 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody className="row-stagger">
          {loans.map((l, i) => (
            <tr key={l.id} className="border-t border-ink-100 transition hover:bg-ink-50/70">
              <td className="px-3 py-4">{String(i + 1).padStart(2, '0')}.</td>
              <td className="px-3">{money(l.money)}</td>
              <td className="px-3"><p className="font-medium tabular-nums">{money(l.left)}</p><div title="Repaid so far" className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-ink-100"><div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300 transition-all duration-700" style={{ width: `${Math.round((1 - l.left / l.money) * 100)}%` }} /></div></td>
              <td className="px-3">{l.months} Months</td>
              <td className="px-3">{l.rate}%</td>
              <td className="whitespace-nowrap px-3">{money(l.installment)} / month</td>
              <td className="px-3">
                <button onClick={() => repay(l.id)} disabled={l.left === 0}
                  className="rounded-full border border-ink-300 px-5 py-1.5 text-sm font-medium transition hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700 active:scale-95 disabled:cursor-default disabled:border-brand-200 disabled:bg-brand-50 disabled:text-brand-600">
                  {l.left === 0 ? 'Paid' : 'Repay'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-ink-100 font-semibold text-coral-500">
            <td className="px-3 py-4">Total</td><td className="px-3">{money(sum('money'))}</td><td className="px-3">{money(sum('left'))}</td><td /><td />
            <td className="whitespace-nowrap px-3">{money(sum('installment'))} / month</td><td />
          </tr>
        </tfoot>
      </table>
    </Card>
  )
}
