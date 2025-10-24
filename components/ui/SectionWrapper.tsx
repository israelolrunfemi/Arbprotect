import type React from "react"
/**
 * SectionWrapper - Reusable section container component
 * Provides consistent padding and max-width for all sections
 */

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  )
}
