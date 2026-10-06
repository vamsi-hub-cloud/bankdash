import Card from './Card'
import IconBadge from './IconBadge'
import CountUp from './CountUp'

export default function StatCard({ label, value, icon, tone }) {
  return (
    <Card className="flex items-center gap-4 transition hover:-translate-y-0.5">
      <span className="transition duration-300 hover:rotate-6 hover:scale-110"><IconBadge icon={icon} tone={tone} size="lg" /></span>
      <div className="min-w-0">
        <p className="truncate text-sm text-ink-500">{label}</p>
        <p className="text-xl font-bold sm:text-2xl"><CountUp value={value} /></p>
      </div>
    </Card>
  )
}
