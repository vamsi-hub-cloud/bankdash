import { useState } from 'react'
import Toggle from '../ui/Toggle'
import SaveButton from '../ui/SaveButton'
import useSaved from '../../hooks/useSaved'

export default function SecurityForm() {
  const [twoFactor, setTwoFactor] = useState(true)
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [error, setError] = useState('')
  const [saved, flash] = useSaved()

  const submit = (e) => {
    e.preventDefault()
    if ((current || next) && (!current || next.length < 8)) return setError('Enter your current password and a new one with at least 8 characters.')
    setError(''); setCurrent(''); setNext(''); flash()
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-base font-bold">Two-factor Authentication</h3>
        <div className="flex items-center gap-4"><Toggle label="Two-factor authentication" checked={twoFactor} onChange={setTwoFactor} /><span className="text-sm">Enable or disable two factor authentication</span></div>
      </section>
      <section className="max-w-xl space-y-5">
        <h3 className="text-base font-bold">Change Password</h3>
        <label className="block space-y-2 text-sm font-medium">Current Password
          <input type="password" autoComplete="current-password" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="**********" className="input" /></label>
        <label className="block space-y-2 text-sm font-medium">New Password
          <input type="password" autoComplete="new-password" value={next} onChange={(e) => setNext(e.target.value)} placeholder="**********" className="input" /></label>
        {error && <p role="alert" className="text-sm text-coral-600">{error}</p>}
      </section>
      <div className="flex justify-end"><SaveButton saved={saved} /></div>
    </form>
  )
}
