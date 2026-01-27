'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
            Atlas
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
            Sign in
          </button>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md">
            Start free
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
              How it works
            </Link>
            <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#faq" className="block text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <button className="block text-sm text-muted-foreground hover:text-foreground">
              Sign in
            </button>
            <Button className="w-full rounded-full">
              Start free
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
