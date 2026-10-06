import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { chartColors, tooltipStyle, axisProps } from '../../theme'

export default function WeeklyActivityChart({ data }) {
  return (
    <div className="h-72">
      <ResponsiveContainer>
        <BarChart data={data} barGap={6} barSize={12}>
          <CartesianGrid vertical={false} stroke={chartColors.grid} />
          <XAxis dataKey="day" {...axisProps} />
          <YAxis {...axisProps} width={32} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#f3f7f6' }} />
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: 12, paddingBottom: 12 }} />
          <Bar dataKey="deposit" name="Deposit" fill={chartColors.mint} radius={20} />
          <Bar dataKey="withdraw" name="Withdraw" fill={chartColors.brand} radius={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
