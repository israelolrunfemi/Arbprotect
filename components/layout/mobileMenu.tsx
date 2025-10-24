/**
 * MobileMenu - Mobile navigation menu with glassmorphic design
 * Client-side component for responsive mobile navigation
 */

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 md:hidden">
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-white hover:bg-white/10 hover:text-primary transition-colors rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4 bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </>
  )
}
