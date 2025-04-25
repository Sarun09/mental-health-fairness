import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarToggle } from "@/components/sidebar-toggle"
import { SidebarProvider } from "@/components/sidebar-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FairMind AI - Fairness-Aware AI for Mental Health",
  description: "Developing bias-mitigating AI models for equitable mental health assessments",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SidebarProvider>
            <div className="flex h-screen">
              <AppSidebar />

              {/* Main content */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b flex items-center">
                  <SidebarToggle />
                  <h1 className="ml-4 text-xl font-semibold py-4">FairMind AI</h1>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
