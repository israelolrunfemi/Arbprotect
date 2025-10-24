/**
 * WhyWeExist - Section with glassmorphic cards
 * Displays core values with icons and descriptions
 */

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Shield, Zap, Users } from "lucide-react"

export default function WhyWeExist() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize workplace safety with certified, high-quality PPE that meets international standards.",
    },
    {
      icon: Zap,
      title: "Reliability",
      description: "Consistent delivery and dependable products you can trust for your business operations.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support and personalized solutions tailored to your specific safety needs.",
    },
  ]

  return (
    <SectionWrapper className="bg-background">
      <SectionTitle
        title="Why We Exist"
        subtitle="ARBprotect is committed to protecting workers and businesses across Nigeria with premium safety solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="mb-4 p-3 w-fit rounded-lg bg-primary/20">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-sans font-bold text-secondary mb-3">{value.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{value.description}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
