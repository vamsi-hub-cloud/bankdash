import { useState } from 'react'
import Card from '../ui/Card'
import IconBadge from '../ui/IconBadge'

export default function ServiceRow({ service }) {
  const [open, setOpen] = useState(false)
  return (
    <Card className="!p-4 transition hover:shadow-md">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 lg:grid-cols-[auto_1.2fr_repeat(3,1fr)_auto]">
        <IconBadge icon={service.icon} tone={service.tone} size="lg" />
        <div className="min-w-0"><p className="truncate text-sm font-semibold">{service.name}</p><p className="truncate text-sm text-ink-500">{service.sub}</p></div>
        {service.meta.map(([k, v]) => (
          <div key={k} className="hidden min-w-0 lg:block"><p className="text-sm font-semibold">{k}</p><p className="truncate text-sm text-ink-500">{v}</p></div>
        ))}
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="btn-outline !px-5 !py-2 !text-sm">{open ? 'Hide Details' : 'View Details'}</button>
      </div>
      {open && (
        <div className="mt-4 animate-rise rounded-2xl bg-ink-50 p-4 text-sm text-ink-700">
          <p>{service.about}</p>
          <dl className="mt-3 grid grid-cols-3 gap-3 lg:hidden">
            {service.meta.map(([k, v]) => <div key={k}><dt className="font-semibold">{k}</dt><dd className="text-ink-500">{v}</dd></div>)}
          </dl>
        </div>
      )}
    </Card>
  )
}
