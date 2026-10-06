import { useLocation, Link } from 'react-router-dom'
import { Hourglass } from 'lucide-react'
import Card from '../components/ui/Card'

export default function ComingSoonPage() {
  const name = useLocation().pathname.replace('/', '').replace('-', ' ') || 'page'
  return (
    <Card className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 py-14 text-center">
      <span className="animate-float grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600"><Hourglass size={28} /></span>
      <h2 className="text-xl font-bold capitalize">{name} is next in line</h2>
      <p className="text-sm text-ink-500">This screen will be built with the next batch of designs.</p>
      <Link to="/" className="btn-primary mt-2">Back to dashboard</Link>
    </Card>
  )
}
