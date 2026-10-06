import { useState } from 'react'
import Toggle from '../ui/Toggle'
import SaveButton from '../ui/SaveButton'
import useSaved from '../../hooks/useSaved'

const zones = ['(GMT-12:00) International Date Line West', '(GMT-08:00) Pacific Time (US & Canada)', '(GMT+00:00) London', '(GMT+05:30) Chennai, Kolkata, Mumbai', '(GMT+09:00) Tokyo']
const notes = [['digital', 'I send or receive digital currency'], ['merchant', 'I receive merchant order'], ['reco', 'There are recommendations for my account']]

export default function PreferencesForm() {
  const [currency, setCurrency] = useState('USD')
  const [zone, setZone] = useState(zones[0])
  const [on, setOn] = useState({ digital: true, merchant: false, reco: true })
  const [saved, flash] = useSaved()

  return (
    <form onSubmit={(e) => { e.preventDefault(); flash() }} className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">Currency
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="input">{['USD', 'EUR', 'GBP', 'INR', 'JPY'].map((c) => <option key={c}>{c}</option>)}</select></label>
        <label className="space-y-2 text-sm font-medium">Time Zone
          <select value={zone} onChange={(e) => setZone(e.target.value)} className="input">{zones.map((z) => <option key={z}>{z}</option>)}</select></label>
      </div>
      <fieldset className="space-y-4">
        <legend className="mb-4 text-base font-bold">Notification</legend>
        {notes.map(([k, label]) => (
          <div key={k} className="flex items-center gap-4"><Toggle label={label} checked={on[k]} onChange={(v) => setOn({ ...on, [k]: v })} /><span className="text-sm">{label}</span></div>
        ))}
      </fieldset>
      <div className="flex justify-end"><SaveButton saved={saved} /></div>
    </form>
  )
}
