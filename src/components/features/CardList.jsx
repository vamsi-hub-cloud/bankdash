import Card from '../ui/Card'
import IconBadge from '../ui/IconBadge'

export default function CardList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((c) => (
        <Card key={c.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 !py-4 transition hover:-translate-y-0.5 sm:grid-cols-[auto_repeat(4,1fr)_auto]">
          <IconBadge icon="card" tone={c.tone} size="lg" />
          {[['Card Type', c.type], ['Bank', c.bank], ['Card Number', c.number], ['Name on Card', c.name]].map(([k, v], i) => (
            <div key={k} className={`${i === 0 ? '' : 'hidden sm:block'} min-w-0`}>
              <p className="truncate text-sm font-semibold">{k}</p>
              <p className="truncate text-sm text-ink-500">{v}</p>
            </div>
          ))}
          <button className="text-sm font-semibold text-brand-700 hover:underline">View Details</button>
        </Card>
      ))}
    </div>
  )
}
