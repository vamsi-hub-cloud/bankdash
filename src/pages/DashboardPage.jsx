import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import CreditCard from '../components/cards/CreditCard'
import TransactionItem from '../components/cards/TransactionItem'
import WeeklyActivityChart from '../components/charts/WeeklyActivityChart'
import ExpensePieChart from '../components/charts/ExpensePieChart'
import BalanceHistoryChart from '../components/charts/BalanceHistoryChart'
import WelcomeBanner from '../components/features/WelcomeBanner'
import QuickTransfer from '../components/features/QuickTransfer'
import { Link } from 'react-router-dom'
import { cards, recentTransactions, weekly, expenseShare, balanceHistory } from '../data/mockData'

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <WelcomeBanner />
      <Section title="My Cards" className="lg:col-span-2" action={<Link to="/credit-cards" className="text-sm font-semibold text-brand-700 hover:underline">See All</Link>}>
        <div className="grid gap-5 sm:grid-cols-2">
          <CreditCard {...cards[0]} /><CreditCard {...cards[2]} />
        </div>
      </Section>
      <Section title="Recent Transaction">
        <Card className="space-y-5">{recentTransactions.map((t) => <TransactionItem key={t.id} {...t} />)}</Card>
      </Section>
      <Section title="Weekly Activity" className="lg:col-span-2"><Card><WeeklyActivityChart data={weekly} /></Card></Section>
      <Section title="Expense Statistics"><Card><ExpensePieChart data={expenseShare} /></Card></Section>
      <Section title="Quick Transfer"><QuickTransfer /></Section>
      <Section title="Balance History" className="lg:col-span-2"><Card><BalanceHistoryChart data={balanceHistory} /></Card></Section>
    </div>
  )
}
