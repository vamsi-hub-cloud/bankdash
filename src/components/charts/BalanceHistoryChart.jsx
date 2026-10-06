import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { chartColors, tooltipStyle, axisProps } from '../../theme'

export default function BalanceHistoryChart({ data }) {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="bh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.brand} stopOpacity={0.28} />
              <stop offset="100%" stopColor={chartColors.brand} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartColors.grid} strokeDasharray="4 4" />
          <XAxis dataKey="m" {...axisProps} />
          <YAxis {...axisProps} width={36} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="v" name="Balance" stroke={chartColors.brand} strokeWidth={3} fill="url(#bh)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
