import IconBadge from '../ui/IconBadge'
import Amount from '../ui/Amount'

export default function TransactionItem({ title, date, amount, icon, tone }) {
  return (
    <div className="flex items-center gap-3">
      <IconBadge icon={icon} tone={tone} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="text-xs text-ink-500">{date}</p>
      </div>
      <Amount value={amount} className="text-sm" />
    </div>
  )
}
