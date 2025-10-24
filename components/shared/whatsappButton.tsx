/**
 * WhatsAppButton - Floating WhatsApp CTA button
 * Client-side component for WhatsApp integration
 */

"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappNumber = "+2341234567890"
  const message = "Hi ARBprotect, I would like to inquire about your PPE products."

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-secondary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
