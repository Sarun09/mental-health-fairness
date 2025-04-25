"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, FileText, Home, LayoutDashboard, Settings, Shield, X } from "lucide-react"
import { useSidebar } from "./sidebar-context"

export function AppSidebar() {
  const pathname = usePathname()
  const { isOpen, close } = useSidebar()

  const isActive = (path: string) => {
    return pathname === path ? "bg-gray-100" : ""
  }

  return (
    <>
      {/* Desktop sidebar - always visible on larger screens */}
      <div className="hidden md:block h-full w-64 bg-white border-r flex flex-col">
        <SidebarContent pathname={pathname} isActive={isActive} />
      </div>

      {/* Mobile sidebar - conditionally visible */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20" onClick={close} />

          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-emerald-600 mr-2" />
                <span className="text-lg font-bold">FairMind AI</span>
              </div>
              <button onClick={close} className="p-1 rounded-md hover:bg-gray-100">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <SidebarContent pathname={pathname} isActive={isActive} />
          </div>
        </div>
      )}
    </>
  )
}

// Extracted sidebar content to avoid duplication
function SidebarContent({ pathname, isActive }: { pathname: string; isActive: (path: string) => string }) {
  return (
    <>
      {/* Header for desktop */}
      <div className="p-4 border-b flex items-center md:flex hidden">
        <Shield className="h-6 w-6 text-emerald-600 mr-2" />
        <span className="text-lg font-bold">FairMind AI</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <h3 className="px-4 py-2 text-sm font-medium text-gray-500">Navigation</h3>
          <nav className="mt-2 flex flex-col gap-1">
            <Link
              href="/"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${isActive("/")}`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${isActive("/dashboard")}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/assessment"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${isActive("/assessment")}`}
            >
              <FileText className="h-4 w-4" />
              <span>Assessment</span>
            </Link>
            <Link
              href="/documentation"
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${isActive("/documentation")}`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Documentation</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-2 w-full px-4 py-2 text-sm rounded-md border hover:bg-gray-100">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
      </div>
    </>
  )
}
