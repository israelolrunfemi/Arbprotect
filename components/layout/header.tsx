/**
 * Header - Votra-inspired glassmorphic navigation header
 * Features frosted glass effect with centered navigation and floating design
 */

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileMenu from "./mobileMenu"

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/5.png" alt="ARBprotect" width={60} height={60} className="h-16 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-6 bg-black/30 rounded-full px-6 py-2">
              <Link href="/" className="text-sm font-medium text-white/90 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-white/90 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/products" className="text-sm font-medium text-white/90 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-primary transition-colors">
                Testimonials
              </Link>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden sm:inline-flex bg-white text-secondary hover:bg-white/90 font-sans font-bold rounded-full"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
