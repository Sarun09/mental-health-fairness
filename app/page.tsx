import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Fairness-Aware AI for Mental Health</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Developing bias-mitigating AI models to ensure equitable mental health assessments across diverse
              populations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/assessment">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Try Demo Assessment
                </Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Components</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Bias Detection</CardTitle>
                  <CardDescription>
                    Identify potential biases in mental health assessment data and models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our system continuously monitors for demographic disparities in assessment outcomes, identifying
                    potential biases related to age, gender, ethnicity, and socioeconomic factors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Bias Mitigation</CardTitle>
                  <CardDescription>Techniques to reduce unfairness in AI decision-making processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We implement pre-processing, in-processing, and post-processing techniques to mitigate biases while
                    maintaining model performance and clinical utility.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/mitigation">
                    <Button variant="ghost" className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Fairness Metrics</CardTitle>
                  <CardDescription>Quantitative measures to evaluate fairness across different groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our dashboard provides comprehensive fairness metrics including demographic parity, equal
                    opportunity, and treatment equality across different population segments.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/metrics">
                    <Button variant="ghost" className="flex items-center">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Fairness Matters in Mental Health AI</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Mental health assessments powered by AI have the potential to increase access to care, but they can
                    also perpetuate or amplify existing biases in healthcare.
                  </p>
                  <p className="text-gray-700">
                    Our framework ensures that AI systems make fair and equitable recommendations regardless of a
                    patient's background, leading to better outcomes for all populations.
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
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
                        Reduces disparities in diagnosis and treatment recommendations
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
                      <span className="text-gray-700">Ensures cultural sensitivity in assessment tools</span>
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
                      <span className="text-gray-700">Improves trust in AI-assisted mental healthcare</span>
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
                      <span className="text-gray-700">Promotes ethical use of AI in healthcare settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-bold">FairMind AI</h3>
              </div>
              <p className="text-gray-400">
                Developing fairness-aware AI models to reduce bias in mental health assessments.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentation" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-gray-400 hover:text-white">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/ethics" className="text-gray-400 hover:text-white">
                    Ethics Statement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 FairMind AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
