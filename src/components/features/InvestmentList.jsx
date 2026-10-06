import Card from '../ui/Card'
import IconBadge from '../ui/IconBadge'
import { myInvestments } from '../../data/mockData'

export default function InvestmentList() {
  return (
    <div className="space-y-3">
      {myInvestments.map((v) => (
        <Card key={v.name} className="flex items-center gap-4 !py-4 transition hover:-translate-y-0.5">
          <IconBadge icon={v.icon} tone={v.tone} size="lg" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{v.name}</p>
            <p className="truncate text-xs text-ink-500">{v.kind}</p>
          </div>
          <div className="hidden text-sm sm:block"><p className="font-semibold">{v.value}</p><p className="text-xs text-ink-500">Investment Value</p></div>
          <div className="text-right text-sm sm:text-left"><p className={`font-semibold ${v.ret > 0 ? 'text-brand-600' : 'text-coral-500'}`}>{v.ret > 0 ? '+' : ''}{v.ret}%</p><p className="text-xs text-ink-500">Return Value</p></div>
        </Card>
      ))}
    </div>
  )
}
