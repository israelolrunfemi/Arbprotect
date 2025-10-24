/**
 * Home Page - Main landing page for ARBprotect
 * Imports and displays all home page sections
 */

import type { Metadata } from "next"
import HeroSection from "@/components/home/heroSection"
import WhyWeExist from "@/components/home/whyWeExist"
import FeaturedProducts from "@/components/home/featureProducts"
import WhoWeServe from "@/components/home/whoWeServe"
import PartnerCTA from "@/components/home/partnerCTA"

export const metadata: Metadata = {
  title: "ARBprotect - Premium PPE Solutions in Nigeria",
  description:
    "Leading supplier of high-quality Personal Protective Equipment (PPE) in Nigeria. Industrial safety gear, workwear, and protective solutions for businesses.",
  keywords: "PPE, protective equipment, safety gear, Nigeria, workwear, industrial safety",
  openGraph: {
    title: "ARBprotect - Premium PPE Solutions",
    description: "Leading supplier of high-quality Personal Protective Equipment in Nigeria",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyWeExist />
      <FeaturedProducts />
      <WhoWeServe />
      <PartnerCTA/>
    </>
  )
}
