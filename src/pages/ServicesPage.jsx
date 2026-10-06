import Section from '../components/ui/Section'
import StatCard from '../components/ui/StatCard'
import ServiceRow from '../components/features/ServiceRow'
import { serviceHighlights, bankServices } from '../data/mockData'

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-3">
        {serviceHighlights.map((s) => <StatCard key={s.title} label={s.sub} value={s.title} icon={s.icon} tone={s.tone} />)}
      </div>
      <Section title="Bank Services List">
        <div className="space-y-3">{bankServices.map((s) => <ServiceRow key={s.id} service={s} />)}</div>
      </Section>
    </div>
  )
}
