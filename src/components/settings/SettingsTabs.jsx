export default function SettingsTabs({ tabs, active, onChange }) {
  return (
    <div role="tablist" className="mb-8 flex gap-2 overflow-x-auto border-b border-ink-100 sm:gap-6">
      {tabs.map((t) => (
        <button key={t} role="tab" aria-selected={active === t} onClick={() => onChange(t)}
          className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition ${active === t ? 'border-brand-600 text-brand-700' : 'border-transparent text-ink-500 hover:text-ink-900'}`}>
          {t}
        </button>
      ))}
    </div>
  )
}
