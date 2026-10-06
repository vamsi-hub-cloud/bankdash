import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import IconBadge from '../components/ui/IconBadge'
import Amount from '../components/ui/Amount'
import CreditCard from '../components/cards/CreditCard'
import DebitCreditChart from '../components/charts/DebitCreditChart'
import { accountStats, lastTransactions, cards, debitCredit, invoices } from '../data/mockData'

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{accountStats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="Last Transaction" className="lg:col-span-2">
          <Card className="space-y-4">
            {lastTransactions.map((t) => (
              <div key={t.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 md:grid-cols-[auto_1.4fr_1fr_1fr_1fr_auto]">
                <IconBadge icon={t.icon} tone={t.tone} />
                <div className="min-w-0"><p className="truncate text-sm font-semibold">{t.title}</p><p className="text-xs text-ink-500">{t.date}</p></div>
                <Amount value={t.amount} className="text-sm md:order-last" />
                <span className="hidden text-sm text-ink-500 md:block">{t.type}</span>
                <span className="hidden text-sm text-ink-500 md:block">{t.card}</span>
                <span className={`hidden text-sm md:block ${t.status === 'Pending' ? 'text-gold-600' : 'text-ink-500'}`}>{t.status}</span>
              </div>
            ))}
          </Card>
        </Section>
        <Section title="My Card" action={<Link to="/credit-cards" className="text-sm font-semibold text-brand-700 hover:underline">See All</Link>}>
          <CreditCard {...cards[0]} balance={5756} />
        </Section>
        <Section title="Debit & Credit Overview" className="lg:col-span-2">
          <Card>
            <p className="mb-4 text-sm text-ink-500"><b className="text-ink-900">$7,560</b> Debited & <b className="text-ink-900">$5,420</b> Credited in this Week</p>
            <DebitCreditChart data={debitCredit} />
            <div className="mt-3 flex justify-end gap-4 text-xs text-ink-500">
              <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-brand-600" />Debit</span>
              <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-coral-500" />Credit</span>
            </div>
          </Card>
        </Section>
        <Section title="Invoices Sent">
          <Card className="space-y-4">
            {invoices.map((v) => (
              <div key={v.name} className="flex items-center gap-4">
                <IconBadge icon={v.icon} tone={v.tone} size="lg" />
                <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{v.name}</p><p className="text-xs text-ink-500">{v.when}</p></div>
                <span className="text-sm font-semibold text-ink-700">{v.amount}</span>
              </div>
            ))}
          </Card>
        </Section>
      </div>
    </div>
  )
}
