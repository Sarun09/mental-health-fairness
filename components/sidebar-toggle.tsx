"use client"

import { Menu } from "lucide-react"
import { useSidebar } from "./sidebar-context"

export function SidebarToggle() {
  const { toggle } = useSidebar()

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
      aria-label="Toggle Sidebar"
    >
      <Menu className="h-5 w-5" />
    </button>
  )
}
