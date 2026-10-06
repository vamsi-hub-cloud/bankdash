import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { chartColors, tooltipStyle, axisProps } from '../../theme'

export default function InvestmentLineChart({ data, color = chartColors.gold, smooth = false, dots = true }) {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke={chartColors.grid} strokeDasharray="4 4" />
          <XAxis dataKey="y" {...axisProps} />
          <YAxis {...axisProps} width={48} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => `$${v.toLocaleString()}`} />
          <Line type={smooth ? 'monotone' : 'linear'} dataKey="v" stroke={color} strokeWidth={3}
            dot={dots ? { r: 4, fill: '#fff', stroke: color, strokeWidth: 2 } : false} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
