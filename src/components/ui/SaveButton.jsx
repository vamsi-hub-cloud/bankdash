import { Check } from 'lucide-react'

export default function SaveButton({ saved, label = 'Save' }) {
  return (
    <button type="submit" className={`btn-primary w-full min-w-[180px] sm:w-auto ${saved ? '!bg-brand-500' : ''}`}>
      {saved ? <>Saved <Check size={16} /></> : label}
    </button>
  )
}
