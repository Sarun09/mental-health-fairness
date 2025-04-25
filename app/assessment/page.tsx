"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const questions = [
  {
    id: "q1",
    text: "Over the past 2 weeks, how often have you felt little interest or pleasure in doing things?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" },
    ],
  },
  {
    id: "q2",
    text: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" },
    ],
  },
  {
    id: "q3",
    text: "Over the past 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" },
    ],
  },
  {
    id: "q4",
    text: "Over the past 2 weeks, how often have you felt tired or had little energy?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" },
    ],
  },
  {
    id: "q5",
    text: "Over the past 2 weeks, how often have you had poor appetite or overeating?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" },
    ],
  },
]

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [freeText, setFreeText] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [fairnessSettings, setFairnessSettings] = useState({
    demographicParity: 80,
    equalOpportunity: 75,
    individualFairness: 85,
  })

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleFairnessSettingChange = (setting: keyof typeof fairnessSettings, value: number[]) => {
    setFairnessSettings((prev) => ({
      ...prev,
      [setting]: value[0],
    }))
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fairness-Aware Mental Health Assessment</h1>

      <Tabs defaultValue="assessment" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="fairness">Fairness Settings</TabsTrigger>
          <TabsTrigger value="about">About This Tool</TabsTrigger>
        </TabsList>

        <TabsContent value="assessment">
          {!submitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Depression Screening Questionnaire</CardTitle>
                <CardDescription>
                  This is a demonstration of a fairness-aware mental health assessment tool. All responses are processed
                  with bias mitigation techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>
                      Question {currentStep + 1} of {questions.length}
                    </span>
                    <span>Progress: {Math.round((currentStep / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{ width: `${(currentStep / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">{currentQuestion.text}</h3>
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                  >
                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                          <Label htmlFor={`${currentQuestion.id}-${option.value}`}>{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {currentStep === questions.length - 1 && (
                  <div className="mb-6">
                    <Label htmlFor="additional-info" className="block mb-2">
                      Is there anything else you'd like to share about how you've been feeling?
                    </Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Optional additional information..."
                      value={freeText}
                      onChange={(e) => setFreeText(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {currentStep === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-2" />
                <CardTitle>Assessment Completed</CardTitle>
                <CardDescription>Your responses have been processed using our fairness-aware AI model.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-medium mb-4">Assessment Results</h3>
                  <p className="mb-4">
                    Based on your responses, our fairness-aware AI model has generated the following assessment:
                  </p>
                  <div className="p-4 bg-white rounded border mb-4">
                    <p className="text-gray-700">
                      Your responses indicate mild symptoms that may be associated with depression. This is not a
                      diagnosis, but a screening result that suggests you might benefit from speaking with a mental
                      health professional for a complete evaluation.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      This is a demonstration of a fairness-aware AI assessment. In a real application, this would be
                      accompanied by resources and next steps tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                  <h3 className="text-lg font-medium mb-4">Fairness Considerations</h3>
                  <p className="mb-4 text-gray-700">
                    Our AI model has applied the following fairness techniques to ensure your assessment is free from
                    demographic biases:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Demographic parity: Ensuring similar prediction rates across different demographic groups
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Equal opportunity: Ensuring similar true positive rates across different demographic groups
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Culturally-sensitive language processing: Accounting for cultural differences in symptom
                        expression
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    These techniques help ensure that our assessment recommendations are equitable across different
                    populations, reducing the risk of algorithmic bias in mental health care.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setCurrentStep(0)
                    setAnswers({})
                    setFreeText("")
                  }}
                  variant="outline"
                  className="mr-4"
                >
                  Start Over
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">View Detailed Report</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="fairness">
          <Card>
            <CardHeader>
              <CardTitle>Fairness Settings</CardTitle>
              <CardDescription>
                Adjust the fairness parameters to control how the AI model balances different fairness metrics. These
                settings affect how the model processes your assessment responses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="demographic-parity">Demographic Parity</Label>
                    <span className="text-sm text-gray-500">{fairnessSettings.demographicParity}%</span>
                  </div>
                  <Slider
                    id="demographic-parity"
                    min={0}
                    max={100}
                    step={1}
                    value={[fairnessSettings.demographicParity]}
                    onValueChange={(value) => handleFairnessSettingChange("demographicParity", value)}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Ensures that the probability of a positive prediction is the same across all demographic groups.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="equal-opportunity">Equal Opportunity</Label>
                    <span className="text-sm text-gray-500">{fairnessSettings.equalOpportunity}%</span>
                  </div>
                  <Slider
                    id="equal-opportunity"
                    min={0}
                    max={100}
                    step={1}
                    value={[fairnessSettings.equalOpportunity]}
                    onValueChange={(value) => handleFairnessSettingChange("equalOpportunity", value)}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Ensures that the true positive rate is the same across all demographic groups.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="individual-fairness">Individual Fairness</Label>
                    <span className="text-sm text-gray-500">{fairnessSettings.individualFairness}%</span>
                  </div>
                  <Slider
                    id="individual-fairness"
                    min={0}
                    max={100}
                    step={1}
                    value={[fairnessSettings.individualFairness]}
                    onValueChange={(value) => handleFairnessSettingChange("individualFairness", value)}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Ensures that similar individuals receive similar predictions, regardless of protected attributes.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Fairness Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About This Assessment Tool</CardTitle>
              <CardDescription>
                Understanding how our fairness-aware AI works to reduce bias in mental health assessments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Purpose</h3>
                  <p className="text-gray-700">
                    This demonstration showcases how AI models can be designed to mitigate biases in mental health
                    assessments. Traditional assessment tools may contain cultural biases that lead to disparate
                    outcomes for different demographic groups. Our fairness-aware approach aims to provide more
                    equitable assessments across diverse populations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">How It Works</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Data Collection:</span> The model is trained on diverse datasets
                      that represent various demographic groups.
                    </li>
                    <li>
                      <span className="font-medium">Bias Detection:</span> We continuously monitor for potential biases
                      in the model's predictions across different groups.
                    </li>
                    <li>
                      <span className="font-medium">Bias Mitigation:</span> We apply pre-processing, in-processing, and
                      post-processing techniques to reduce unfairness.
                    </li>
                    <li>
                      <span className="font-medium">Fairness Evaluation:</span> We measure the model's performance using
                      multiple fairness metrics to ensure equitable outcomes.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Fairness Metrics</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Demographic Parity</h4>
                      <p className="text-sm text-gray-600">
                        Ensures that the probability of a positive prediction is the same across all demographic groups,
                        regardless of the true underlying distribution of positive cases.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Equal Opportunity</h4>
                      <p className="text-sm text-gray-600">
                        Ensures that the true positive rate (sensitivity) is the same across all demographic groups,
                        meaning individuals with a condition are equally likely to be identified regardless of their
                        demographic.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Equalized Odds</h4>
                      <p className="text-sm text-gray-600">
                        Ensures that both the true positive rate and false positive rate are the same across all
                        demographic groups, providing a stronger notion of fairness.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Individual Fairness</h4>
                      <p className="text-sm text-gray-600">
                        Ensures that similar individuals receive similar predictions, regardless of protected
                        attributes, focusing on fairness at the individual rather than group level.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                    Important Disclaimer
                  </h3>
                  <p className="text-gray-700">
                    This is a demonstration tool and not intended for clinical use. In a real-world application, any
                    AI-assisted mental health assessment would be:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Validated through rigorous clinical trials</li>
                    <li>Used as a support tool for trained clinicians, not as a replacement</li>
                    <li>Subject to ongoing monitoring and evaluation for bias</li>
                    <li>Compliant with relevant healthcare regulations and privacy laws</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
