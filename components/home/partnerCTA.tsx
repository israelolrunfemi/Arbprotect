
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

export default function PartnerCTA() {
  return (
    <SectionWrapper className="bg-gradient-to-r from-secondary to-neutral-800 text-accent">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-balance">
          Ready to Protect Your Workforce?
        </h2>
        <p className="text-lg text-accent/90">
          Get in touch with our team to discuss bulk orders, partnerships, or custom PPE solutions tailored to your
          business needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 font-sans font-bold bg-transparent"
          >
            <Link href="/partner">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
