/**
 * Navbar - Alternative navbar component with enhanced styling
 * Can be used as a variant for different page contexts
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  variant?: "default" | "dark"
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const bgClass = variant === "dark" ? "bg-secondary text-accent" : "bg-background text-foreground"
  const hoverClass = variant === "dark" ? "hover:text-primary" : "hover:text-primary"

  return (
    <nav className={`${bgClass} border-b border-border`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-sans font-bold text-xl">
          ARBprotect
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/products" className={`text-sm font-medium ${hoverClass} transition-colors`}>
            Products
          </Link>
          <Link href="/about" className={`text-sm font-medium ${hoverClass} transition-colors`}>
            About
          </Link>
          <Button asChild size="sm" className="bg-primary text-secondary hover:bg-primary/90">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
