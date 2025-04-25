import { ArrowDown, ArrowUp } from "lucide-react"

interface FairnessScorecardProps {
  title: string
  score: number
  change: number
  description: string
}

export function FairnessScorecard({ title, score, change, description }: FairnessScorecardProps) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <div className={`flex items-center ${change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
          {change >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      <div className="flex items-end space-x-2 mb-2">
        <span className="text-3xl font-bold">{score}%</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}
