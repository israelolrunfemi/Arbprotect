import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Lato } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/shared/whatsappButton"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${lato.variable} font-body bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
