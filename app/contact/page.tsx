/**
 * Contact Page - Contact form and company information
 * Server-rendered with contact form and business details
 */

import type { Metadata } from "next"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import ContactForm from "@/components/contact/contactForm"
import ContactInfo from "@/components/contact/contactInfo"

export const metadata: Metadata = {
  title: "Contact Us | ARBprotect",
  description: "Get in touch with ARBprotect for inquiries, bulk orders, or partnership opportunities.",
  keywords: "contact, inquiries, bulk orders, partnership, ARBprotect",
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <SectionWrapper className="bg-gradient-to-br from-secondary to-neutral-800 text-accent pt-20 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-balance">Get in Touch</h1>
          <p className="text-lg text-accent/90">
            Have questions about our PPE products? Want to place a bulk order? We are here to help.
          </p>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
