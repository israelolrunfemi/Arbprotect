/**
 * Not Found Page - 404 error page
 * Displayed when a page is not found
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

export default function NotFound() {
  return (
    <SectionWrapper className="bg-background py-32 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-6xl font-sans font-bold text-primary">404</h1>
        <h2 className="text-3xl font-sans font-bold text-secondary">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 font-sans font-bold bg-transparent"
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
