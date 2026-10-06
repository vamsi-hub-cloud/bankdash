import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { chartColors, tooltipStyle } from '../../theme'

const colors = [chartColors.ink, chartColors.gold, chartColors.coral, chartColors.brand]

export default function ExpensePieChart({ data }) {
  return (
    <div>
      <div className="h-56">
        <ResponsiveContainer>
          <PieChart>
            <Tooltip contentStyle={tooltipStyle} formatter={(v) => `${v}%`} />
            <Pie data={data} dataKey="value" nameKey="name" outerRadius="95%" paddingAngle={3} stroke="none" cornerRadius={6}>
              {data.map((_, i) => <Cell key={i} fill={colors[i]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-ink-700">
        {data.map((d, i) => (
          <li key={d.name} className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[i] }} />{d.name} <b className="ml-auto">{d.value}%</b></li>
        ))}
      </ul>
    </div>
  )
}
