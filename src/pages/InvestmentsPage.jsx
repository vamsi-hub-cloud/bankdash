import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import InvestmentLineChart from '../components/charts/InvestmentLineChart'
import InvestmentList from '../components/features/InvestmentList'
import TrendingStockTable from '../components/features/TrendingStockTable'
import { chartColors } from '../theme'
import { investStats, yearlyInvestment, monthlyRevenue } from '../data/mockData'

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-3">{investStats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Yearly Total Investment"><Card><InvestmentLineChart data={yearlyInvestment} color={chartColors.gold} /></Card></Section>
        <Section title="Monthly Revenue"><Card><InvestmentLineChart data={monthlyRevenue} color={chartColors.brand} smooth dots={false} /></Card></Section>
        <Section title="My Investment"><InvestmentList /></Section>
        <Section title="Trending Stock"><TrendingStockTable /></Section>
      </div>
    </div>
  )
}
