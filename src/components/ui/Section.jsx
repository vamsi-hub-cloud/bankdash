export default function Section({ title, action, children, className = '' }) {
  return (
    <section className={`flex min-w-0 flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-ink-900">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}
