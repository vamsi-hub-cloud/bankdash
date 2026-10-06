import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ page, pages, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-1 text-sm font-medium text-brand-700">
      <button disabled={page === 1} onClick={() => onChange(page - 1)} className="flex items-center gap-1 rounded-xl px-3 py-2 hover:bg-brand-50 disabled:opacity-40">
        <ChevronLeft size={16} /> Previous
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
        <button key={n} onClick={() => onChange(n)} className={`h-9 w-9 rounded-xl transition ${n === page ? 'bg-brand-700 text-white shadow-soft' : 'hover:bg-brand-50'}`}>
          {n}
        </button>
      ))}
      <button disabled={page === pages} onClick={() => onChange(page + 1)} className="flex items-center gap-1 rounded-xl px-3 py-2 hover:bg-brand-50 disabled:opacity-40">
        Next <ChevronRight size={16} />
      </button>
    </div>
  )
}
