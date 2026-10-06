import Card from '../ui/Card'
import { trendingStock } from '../../data/mockData'

export default function TrendingStockTable() {
  return (
    <Card className="overflow-x-auto">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead><tr className="text-brand-700">{['SL No', 'Name', 'Price', 'Return'].map((h) => <th key={h} className="pb-3 font-semibold">{h}</th>)}</tr></thead>
        <tbody className="row-stagger">
          {trendingStock.map((s) => (
            <tr key={s.no} className="border-t border-ink-100">
              <td className="py-3.5 text-ink-700">{s.no}</td><td className="font-medium">{s.name}</td><td>{s.price}</td>
              <td className={`font-semibold ${s.ret > 0 ? 'text-brand-600' : 'text-coral-500'}`}>{s.ret > 0 ? '+' : ''}{s.ret}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
