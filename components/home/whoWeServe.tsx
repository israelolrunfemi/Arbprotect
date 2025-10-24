/**
 * WhoWeServe - Section highlighting target industries and use cases
 * Shows different sectors that benefit from ARBprotect solutions
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Building2, Factory, Hammer, Truck } from "lucide-react"

export default function WhoWeServe() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Comprehensive PPE solutions for factory and production environments.",
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Durable safety gear designed for construction site demands.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Protective equipment for warehouse and logistics operations.",
    },
    {
      icon: Hammer,
      title: "Maintenance",
      description: "Specialized PPE for maintenance and repair work.",
    },
  ]

  return (
    <SectionWrapper className="bg-background">
      <SectionTitle
        title="Who We Serve"
        subtitle="ARBprotect partners with businesses across multiple industries to ensure workplace safety."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => {
          const Icon = industry.icon
          return (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card text-center hover:border-primary transition-colors"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-lg font-sans font-bold text-secondary mb-2">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
