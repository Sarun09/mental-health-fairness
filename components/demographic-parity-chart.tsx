"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const generateData = () => {
  return [
    {
      name: "Original Model",
      White: 72,
      Black: 58,
      Hispanic: 61,
      Asian: 69,
      Other: 63,
    },
    {
      name: "Debiased Model",
      White: 74,
      Black: 71,
      Hispanic: 72,
      Asian: 75,
      Other: 73,
    },
  ]
}

export function DemographicParityChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-1">Positive Prediction Rate by Demographic Group</h3>
        <p className="text-xs text-gray-500">
          Comparing prediction rates across demographic groups before and after bias mitigation
        </p>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => [`${value}%`, ""]} />
            <Legend />
            <Bar dataKey="White" fill="#10b981" />
            <Bar dataKey="Black" fill="#3b82f6" />
            <Bar dataKey="Hispanic" fill="#8b5cf6" />
            <Bar dataKey="Asian" fill="#ec4899" />
            <Bar dataKey="Other" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Observations</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Original model shows significant disparities in prediction rates across demographic groups</li>
          <li>• Debiased model achieves much more consistent prediction rates (demographic parity)</li>
          <li>• Improvement is most significant for Black and Hispanic groups</li>
          <li>• Overall prediction rates are slightly higher in the debiased model</li>
        </ul>
      </div>
    </div>
  )
}
