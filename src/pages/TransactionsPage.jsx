import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import CreditCard from '../components/cards/CreditCard'
import ExpenseBarChart from '../components/charts/ExpenseBarChart'
import TransactionsTable from '../components/features/TransactionsTable'
import { cards, monthlyExpense } from '../data/mockData'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="My Cards" className="lg:col-span-2" action={<Link to="/credit-cards" className="flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"><Plus size={16} />Add Card</Link>}>
          <div className="grid gap-5 sm:grid-cols-2"><CreditCard {...cards[1]} /><CreditCard {...cards[2]} /></div>
        </Section>
        <Section title="My Expense"><Card><ExpenseBarChart data={monthlyExpense} /></Card></Section>
      </div>
      <Section title="Recent Transactions"><TransactionsTable /></Section>
    </div>
  )
}
