import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { chartColors, tooltipStyle, axisProps } from '../../theme'

export default function DebitCreditChart({ data }) {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <BarChart data={data} barGap={6} barSize={16}>
          <XAxis dataKey="d" {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#f3f7f6' }} />
          <Bar dataKey="debit" name="Debit" fill={chartColors.brand} radius={6} />
          <Bar dataKey="credit" name="Credit" fill={chartColors.coral} radius={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
