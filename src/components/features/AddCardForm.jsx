import { useState } from 'react'
import Card from '../ui/Card'

const empty = { type: 'Classic', name: '', number: '', expiry: '' }

export default function AddCardForm({ onAdd }) {
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const digits = form.number.replace(/\D/g, '')
    if (!form.name.trim() || digits.length < 4 || !form.expiry) return setError('Fill in every field to add your card.')
    setError('')
    onAdd({ type: form.type, name: form.name.trim(), last4: digits.slice(-4) })
    setForm(empty)
  }

  return (
    <Card className="!p-6">
      <p className="mb-6 text-sm leading-7 text-ink-500">A credit card is a plastic card issued by a scheduled commercial bank to a cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.</p>
      <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">Card Type
          <select value={form.type} onChange={set('type')} className="input"><option>Classic</option><option>Gold</option><option>Platinum</option></select></label>
        <label className="space-y-2 text-sm font-medium">Name On Card
          <input value={form.name} onChange={set('name')} placeholder="My Cards" className="input" /></label>
        <label className="space-y-2 text-sm font-medium">Card Number
          <input value={form.number} onChange={set('number')} inputMode="numeric" maxLength={19} placeholder="**** **** **** ****" className="input" /></label>
        <label className="space-y-2 text-sm font-medium">Expiration Date
          <input type="date" value={form.expiry} onChange={set('expiry')} className="input" /></label>
        {error && <p role="alert" className="text-sm text-coral-600 sm:col-span-2">{error}</p>}
        <div><button className="btn-primary w-full sm:w-auto">Add Card</button></div>
      </form>
    </Card>
  )
}
