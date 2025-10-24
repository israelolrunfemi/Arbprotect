/**
 * Partner Page - Partnership opportunities and information
 * Server-rendered partnership page with CTA
 */

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Partner with Us | ARBprotect",
  description: "Join ARBprotect as a partner and grow your business with our premium PPE solutions.",
  keywords: "partnership, distributor, reseller, business opportunity, ARBprotect",
}

export default function PartnerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Expand your business with our high-margin PPE products and proven market demand.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get comprehensive training, marketing materials, and ongoing business support.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Offer your customers certified, high-quality PPE products they can trust.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Terms",
      description: "Competitive pricing, flexible payment terms, and customized partnership packages.",
    },
  ]

  return (
    <>
      {/* Page Header */}
      <SectionWrapper className="bg-gradient-to-br from-secondary to-neutral-800 text-accent pt-20 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-balance">Partner with ARBprotect</h1>
          <p className="text-lg text-accent/90">
            Grow your business by partnering with Nigeria's leading PPE supplier. Become a distributor or reseller
            today.
          </p>
        </div>
      </SectionWrapper>

      {/* Partnership Benefits */}
      <SectionWrapper className="bg-background">
        <SectionTitle
          title="Why Partner with Us?"
          subtitle="Join a network of successful partners across Nigeria and beyond."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-sans font-bold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Partnership Types */}
        <div className="border-t border-border pt-16">
          <SectionTitle title="Partnership Opportunities" centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Distributor */}
            <div className="p-8 rounded-lg border-2 border-primary bg-primary/5">
              <h3 className="text-2xl font-sans font-bold text-secondary mb-4">Distributor</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Bulk purchasing discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Exclusive territory rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Marketing support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Dedicated account manager</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
                <Link href="/contact?type=distributor">Become a Distributor</Link>
              </Button>
            </div>

            {/* Reseller */}
            <div className="p-8 rounded-lg border-2 border-border bg-card">
              <h3 className="text-2xl font-sans font-bold text-secondary mb-4">Reseller</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Competitive wholesale pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Flexible order quantities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Training and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">Quick order fulfillment</span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary/10 font-sans font-bold bg-transparent"
              >
                <Link href="/contact?type=reseller">Become a Reseller</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-secondary to-neutral-800 text-accent">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-balance">Ready to Grow Together?</h2>
          <p className="text-lg text-accent/90">
            Contact our partnership team to discuss how we can work together to expand your business.
          </p>
          <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
