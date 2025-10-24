/**
 * About Page - PPE-inspired design with glassmorphic elements
 * Features mission, vision, values, and company timeline
 */

import type { Metadata } from "next"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Award, Users, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ARBprotect",
  description:
    "Learn about ARBprotect, Nigeria's leading PPE supplier. Our mission, values, and commitment to workplace safety.",
  keywords: "about ARBprotect, company history, mission, values, PPE supplier Nigeria",
}

export default function AboutPage() {
  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "ARBprotect established with a vision to revolutionize workplace safety in Nigeria",
    },
    { year: "2017", title: "Expansion", description: "Expanded product range to include 500+ certified PPE items" },
    {
      year: "2019",
      title: "Recognition",
      description: "Received industry recognition for quality and customer service",
    },
    {
      year: "2023",
      title: "Growth",
      description: "Serving 1000+ businesses across Nigeria with premium safety solutions",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We only supply certified, high-quality PPE that meet international standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your safety and satisfaction are our top priorities in every interaction.",
    },
    {
      icon: Globe,
      title: "Reliability",
      description: "Consistent delivery and dependable service you can count on.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our products and services for better protection.",
    },
  ]

  return (
    <>
      <section className="relative w-full min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/industrial-ppe-safety-equipment-warehouse.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 text-balance">
              About <span className="text-primary">ARBprotect</span>
            </h1>
            <p className="text-lg text-white/90">
              Committed to protecting workers and businesses across Nigeria with premium PPE solutions since 2015.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <h2 className="text-3xl font-sans font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              To provide accessible, high-quality Personal Protective Equipment that protects workers and saves lives
              across Nigeria.
            </p>
            <p className="text-foreground/80">
              We believe that every worker deserves access to reliable safety equipment, regardless of industry or
              location.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <h2 className="text-3xl font-sans font-bold text-primary mb-4">Our Vision</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              To be the most trusted PPE supplier in West Africa, known for quality, reliability, and customer
              excellence.
            </p>
            <p className="text-foreground/80">
              We aim to create a safer workplace environment for every business we serve.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-border pt-16">
          <SectionTitle title="Our Core Values" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-sans font-bold text-secondary mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/80">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-muted">
        <SectionTitle title="Our Journey" subtitle="Key milestones in ARBprotect's growth and success" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-sans font-bold">
                  {index + 1}
                </div>
                {index < milestones.length - 1 && <div className="w-1 h-16 bg-primary/30 mt-2" />}
              </div>
              <div className="pb-8">
                <p className="text-sm font-bold text-primary mb-1">{milestone.year}</p>
                <h3 className="text-xl font-sans font-bold text-secondary mb-2">{milestone.title}</h3>
                <p className="text-foreground/80">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
