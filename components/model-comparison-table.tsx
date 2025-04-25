"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ModelComparisonTable() {
  const models = [
    {
      name: "Baseline Model",
      accuracy: 89,
      demographicParity: 62,
      equalOpportunity: 58,
      equalizedOdds: 55,
      technique: "None",
    },
    {
      name: "Reweighted Model",
      accuracy: 87,
      demographicParity: 78,
      equalOpportunity: 72,
      equalizedOdds: 68,
      technique: "Pre-processing",
    },
    {
      name: "Adversarial Model",
      accuracy: 85,
      demographicParity: 84,
      equalOpportunity: 79,
      equalizedOdds: 75,
      technique: "In-processing",
    },
    {
      name: "Threshold-Optimized",
      accuracy: 86,
      demographicParity: 81,
      equalOpportunity: 83,
      equalizedOdds: 77,
      technique: "Post-processing",
    },
    {
      name: "Ensemble Approach",
      accuracy: 88,
      demographicParity: 85,
      equalOpportunity: 82,
      equalizedOdds: 80,
      technique: "Combined",
    },
  ]

  const getBadgeColor = (technique: string) => {
    switch (technique) {
      case "Pre-processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "In-processing":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "Post-processing":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "Combined":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Technique</TableHead>
            <TableHead className="text-right">Accuracy</TableHead>
            <TableHead className="text-right">Demographic Parity</TableHead>
            <TableHead className="text-right">Equal Opportunity</TableHead>
            <TableHead className="text-right">Equalized Odds</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.name}>
              <TableCell className="font-medium">{model.name}</TableCell>
              <TableCell>
                <Badge className={getBadgeColor(model.technique)} variant="outline">
                  {model.technique}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{model.accuracy}%</TableCell>
              <TableCell className="text-right">{model.demographicParity}%</TableCell>
              <TableCell className="text-right">{model.equalOpportunity}%</TableCell>
              <TableCell className="text-right">{model.equalizedOdds}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Key Insights</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• The Ensemble Approach provides the best balance between accuracy and fairness</li>
          <li>• In-processing techniques show the largest improvement in demographic parity</li>
          <li>• Post-processing techniques excel at improving equal opportunity</li>
          <li>• All bias mitigation techniques trade some accuracy for improved fairness</li>
          <li>• The accuracy-fairness tradeoff is minimized in the Ensemble Approach</li>
        </ul>
      </div>
    </div>
  )
}
