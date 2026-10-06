export default function Amount({ value, className = '' }) {
  const positive = value > 0
  return (
    <span className={`font-semibold tabular-nums ${positive ? 'text-brand-600' : 'text-coral-500'} ${className}`}>
      {positive ? '+' : '-'}${Math.abs(value).toLocaleString()}
    </span>
  )
}
