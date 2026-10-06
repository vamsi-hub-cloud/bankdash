import { useEffect, useState } from 'react'

// Animates the number inside strings like "$12,750", "+5.80%", "1,250". Non-numeric text is shown as is.
export default function CountUp({ value, duration = 1100 }) {
  const m = String(value).match(/^([^\d-]*)([\d,]+(?:\.\d+)?)(.*)$/)
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : 0
  const decimals = m && m[2].includes('.') ? m[2].split('.')[1].length : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!m) return
    let raf, start
    const tick = (t) => {
      start = start ?? t
      const p = Math.min((t - start) / duration, 1)
      setN(target * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])

  if (!m) return <>{value}</>
  return <>{m[1]}{n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{m[3]}</>
}
