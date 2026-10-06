import { useMemo, useState } from 'react'
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'
import Card from '../ui/Card'
import Amount from '../ui/Amount'
import Pagination from '../ui/Pagination'
import { transactions } from '../../data/mockData'

const tabs = ['All Transactions', 'Income', 'Expense']
const PAGE_SIZE = 5

export default function TransactionsTable() {
  const [tab, setTab] = useState(0)
  const [page, setPage] = useState(1)

  const rows = useMemo(() => transactions.filter((t) => tab === 0 || (tab === 1 ? t.amount > 0 : t.amount < 0)), [tab])
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
  const visible = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="space-y-4">
      <div className="flex gap-6 overflow-x-auto border-b border-ink-100">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => { setTab(i); setPage(1) }}
            className={`-mb-px whitespace-nowrap border-b-2 px-2 py-3 text-sm font-semibold transition ${tab === i ? 'border-brand-600 text-brand-700' : 'border-transparent text-ink-500 hover:text-ink-900'}`}>
            {t}
          </button>
        ))}
      </div>
      <Card className="overflow-x-auto !p-2 sm:!p-5">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="text-ink-500">
              {['Description', 'Transaction ID', 'Type', 'Card', 'Date', 'Amount', 'Receipt'].map((h) => <th key={h} className="whitespace-nowrap px-3 py-3 font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody className="row-stagger">
            {visible.map((t) => (
              <tr key={t.id} className="border-t border-ink-100 transition hover:bg-ink-50/70">
                <td className="px-3 py-4"><span className="flex items-center gap-3 font-medium">
                  {t.amount < 0 ? <ArrowUpCircle size={22} className="text-coral-500" /> : <ArrowDownCircle size={22} className="text-brand-500" />}{t.desc}</span></td>
                <td className="px-3 text-ink-700">{t.id}</td>
                <td className="px-3 text-ink-700">{t.type}</td>
                <td className="px-3 text-ink-700">{t.card}</td>
                <td className="whitespace-nowrap px-3 text-ink-700">{t.date}</td>
                <td className="px-3"><Amount value={t.amount} /></td>
                <td className="px-3"><button className="btn-outline">Download</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Pagination page={page} pages={pages} onChange={setPage} />
    </div>
  )
}
