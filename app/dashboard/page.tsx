import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BiasMetricsChart } from "@/components/bias-metrics-chart"
import { DemographicParityChart } from "@/components/demographic-parity-chart"
import { FairnessScorecard } from "@/components/fairness-scorecard"
import { ModelComparisonTable } from "@/components/model-comparison-table"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fairness Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <FairnessScorecard
          title="Overall Fairness Score"
          score={78}
          change={+5}
          description="Composite score across all fairness metrics"
        />
        <FairnessScorecard
          title="Demographic Parity"
          score={82}
          change={+3}
          description="Equal prediction rates across groups"
        />
        <FairnessScorecard
          title="Equal Opportunity"
          score={75}
          change={+8}
          description="Equal true positive rates across groups"
        />
      </div>

      <Tabs defaultValue="metrics" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="metrics">Fairness Metrics</TabsTrigger>
          <TabsTrigger value="demographics">Demographic Analysis</TabsTrigger>
          <TabsTrigger value="models">Model Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Fairness Metrics Over Time</CardTitle>
              <CardDescription>
                Tracking key fairness metrics after implementing bias mitigation techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BiasMetricsChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics">
          <Card>
            <CardHeader>
              <CardTitle>Demographic Parity Analysis</CardTitle>
              <CardDescription>Comparing prediction rates across different demographic groups</CardDescription>
            </CardHeader>
            <CardContent>
              <DemographicParityChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models">
          <Card>
            <CardHeader>
              <CardTitle>Model Comparison</CardTitle>
              <CardDescription>
                Comparing fairness metrics across different model architectures and mitigation techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModelComparisonTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bias Mitigation Impact</CardTitle>
            <CardDescription>Effect of bias mitigation techniques on model performance and fairness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Pre-processing Techniques</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Reweighting and resampling training data to balance representation
                </p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">65%</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">In-processing Techniques</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Adversarial debiasing and fairness constraints during model training
                </p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">78%</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Post-processing Techniques</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Adjusting decision thresholds to equalize error rates across groups
                </p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">82%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fairness-Accuracy Tradeoff</CardTitle>
            <CardDescription>Balancing model accuracy with fairness considerations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-center">
                Interactive chart showing the relationship between model accuracy and fairness metrics
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Original Model</span>
                <div className="flex items-center">
                  <span className="mr-2">Accuracy: 89%</span>
                  <span>Fairness: 62%</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Debiased Model</span>
                <div className="flex items-center">
                  <span className="mr-2">Accuracy: 87%</span>
                  <span>Fairness: 78%</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Optimized Model</span>
                <div className="flex items-center">
                  <span className="mr-2">Accuracy: 85%</span>
                  <span>Fairness: 84%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
