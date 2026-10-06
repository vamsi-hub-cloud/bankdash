import { getIcon } from './icons'

const tones = {
  brand: 'bg-brand-50 text-brand-600',
  coral: 'bg-coral-50 text-coral-500',
  gold: 'bg-gold-50 text-gold-600',
  sky: 'bg-sky-50 text-sky-600',
}

export default function IconBadge({ icon, tone = 'brand', size = 'md' }) {
  const Icon = getIcon(icon)
  const box = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11'
  return (
    <span className={`grid shrink-0 place-items-center rounded-2xl ${box} ${tones[tone]}`}>
      <Icon size={size === 'lg' ? 24 : 20} strokeWidth={2} />
    </span>
  )
}
