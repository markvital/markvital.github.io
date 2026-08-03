"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Check, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-10 w-10" aria-hidden="true" />

  const activeTheme = theme ?? "system"
  const label = `Theme: ${activeTheme}`
  const ThemeIcon = resolvedTheme === "dark" ? Moon : Sun

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          aria-label={label}
          className="h-10 w-10 p-0"
          title={label}
          type="button"
          variant="ghost"
        >
          <ThemeIcon aria-hidden="true" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-50 min-w-32 rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 text-[var(--foreground)] shadow-md"
          sideOffset={8}
        >
          <DropdownMenu.RadioGroup onValueChange={setTheme} value={activeTheme}>
            <ThemeOption icon={Sun} label="Light" value="light" />
            <ThemeOption icon={Moon} label="Dark" value="dark" />
            <ThemeOption icon={Monitor} label="System" value="system" />
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

function ThemeOption({
  icon: Icon,
  label,
  value,
}: Readonly<{
  icon: typeof Sun
  label: string
  value: "light" | "dark" | "system"
}>) {
  return (
    <DropdownMenu.RadioItem
      className="relative flex cursor-default items-center gap-2 rounded-sm py-2 pr-8 pl-2 text-sm outline-none transition-colors focus:bg-[var(--surface-hover)] data-[state=checked]:bg-[var(--surface-muted)]"
      value={value}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
      <DropdownMenu.ItemIndicator className="absolute right-2 inline-flex items-center">
        <Check aria-hidden="true" className="h-4 w-4" />
      </DropdownMenu.ItemIndicator>
    </DropdownMenu.RadioItem>
  )
}
