import { BarChart, Bar, XAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { chartColors, tooltipStyle, axisProps } from '../../theme'

export default function ExpenseBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.v))
  return (
    <div className="h-44">
      <ResponsiveContainer>
        <BarChart data={data} barSize={26}>
          <XAxis dataKey="m" {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={false} formatter={(v) => `$${v.toLocaleString()}`} />
          <Bar dataKey="v" name="Expense" radius={12}>
            {data.map((d) => <Cell key={d.m} fill={d.v === max ? chartColors.brand : '#e3efec'} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
