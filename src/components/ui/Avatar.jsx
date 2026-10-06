import { useState } from 'react'
import { getAvatar } from '../../utils/avatars'

const palette = ['bg-brand-600', 'bg-coral-500', 'bg-gold-500', 'bg-sky-500']

// Pass imageKey (file name in src/assets/avatars, no extension) or src (any URL).
// Falls back to colored initials when there is no image.
export default function Avatar({ name, imageKey, src, size = 'h-11 w-11', index = 0 }) {
  const [failed, setFailed] = useState(false)
  const url = src || getAvatar(imageKey)

  if (url && !failed) {
    return <img src={url} alt={name} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} className={`shrink-0 rounded-full bg-ink-100 object-cover ${size}`} />
  }
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('')
  return (
    <span aria-label={name} className={`grid shrink-0 place-items-center rounded-full font-bold text-white ${size} ${palette[index % 4]}`}>
      {initials}
    </span>
  )
}
