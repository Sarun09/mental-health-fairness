"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const generateData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]

  // Start with lower fairness scores that improve over time
  let demographicParity = 55
  let equalOpportunity = 50
  let equalizedOdds = 45

  return months.map((month) => {
    // Gradually improve fairness metrics over time
    demographicParity += Math.random() * 5 - 1 // Mostly increasing
    equalOpportunity += Math.random() * 6 - 1.5 // Mostly increasing
    equalizedOdds += Math.random() * 4 - 0.5 // Mostly increasing

    // Keep values within reasonable bounds
    demographicParity = Math.min(Math.max(demographicParity, 50), 90)
    equalOpportunity = Math.min(Math.max(equalOpportunity, 45), 85)
    equalizedOdds = Math.min(Math.max(equalizedOdds, 40), 80)

    return {
      month,
      "Demographic Parity": Math.round(demographicParity),
      "Equal Opportunity": Math.round(equalOpportunity),
      "Equalized Odds": Math.round(equalizedOdds),
    }
  })
}

export function BiasMetricsChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Demographic Parity"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Equal Opportunity"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Equalized Odds"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
