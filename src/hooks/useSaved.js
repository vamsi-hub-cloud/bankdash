import { useState } from 'react'

// Returns [saved, flash] — call flash() after saving to show a short "Saved" state
export default function useSaved(ms = 2000) {
  const [saved, setSaved] = useState(false)
  const flash = () => { setSaved(true); setTimeout(() => setSaved(false), ms) }
  return [saved, flash]
}
