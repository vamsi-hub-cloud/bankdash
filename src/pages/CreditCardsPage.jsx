import { useState } from 'react'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import CreditCard from '../components/cards/CreditCard'
import ExpenseDonutChart from '../components/charts/ExpenseDonutChart'
import CardList from '../components/features/CardList'
import AddCardForm from '../components/features/AddCardForm'
import CardSettings from '../components/features/CardSettings'
import { cards, cardList, bankShare } from '../data/mockData'

const tones = ['brand', 'sky', 'coral', 'gold']

export default function CreditCardsPage() {
  const [list, setList] = useState(cardList)
  const addCard = ({ type, name, last4 }) =>
    setList((l) => [{ id: Date.now(), type, bank: 'New Bank', number: `**** **** ${last4}`, name, tone: tones[l.length % 4] }, ...l])

  return (
    <div className="space-y-8">
      <Section title="My Cards"><div className="grid gap-5 md:grid-cols-3">{cards.map((c) => <CreditCard key={c.id} {...c} />)}</div></Section>
      <div className="grid gap-6 lg:grid-cols-3">
        <Section title="Card Expense Statistics"><Card><ExpenseDonutChart data={bankShare} /></Card></Section>
        <Section title="Card List" className="lg:col-span-2"><CardList items={list} /></Section>
        <Section title="Add New Card" className="lg:col-span-2"><AddCardForm onAdd={addCard} /></Section>
        <Section title="Card Setting"><CardSettings /></Section>
      </div>
    </div>
  )
}
