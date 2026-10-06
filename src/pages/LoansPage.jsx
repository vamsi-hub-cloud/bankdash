import Section from '../components/ui/Section'
import StatCard from '../components/ui/StatCard'
import ActiveLoansTable from '../components/features/ActiveLoansTable'
import { loanStats } from '../data/mockData'

export default function LoansPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{loanStats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <Section title="Active Loans Overview"><ActiveLoansTable /></Section>
    </div>
  )
}
