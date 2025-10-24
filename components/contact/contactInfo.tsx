
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-sans font-bold text-secondary">Contact Information</h2>

      {/* Phone */}
      <div className="flex gap-4">
        <div className="p-3 rounded-lg bg-primary/10 h-fit">
          <Phone className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-secondary mb-1">Phone</h3>
          <a href="tel:+2341234567890" className="text-primary hover:underline">
            +234 (0) 123 456 7890
          </a>
          <p className="text-sm text-muted-foreground mt-1">Available Monday - Friday</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex gap-4">
        <div className="p-3 rounded-lg bg-primary/10 h-fit">
          <Mail className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-secondary mb-1">Email</h3>
          <a href="mailto:info@arbprotect.com" className="text-primary hover:underline">
            info@arbprotect.com
          </a>
          <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-4">
        <div className="p-3 rounded-lg bg-primary/10 h-fit">
          <MapPin className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-secondary mb-1">Address</h3>
          <p className="text-foreground">Lagos, Nigeria</p>
          <p className="text-sm text-muted-foreground mt-1">Visit our showroom by appointment</p>
        </div>
      </div>

      {/* Business Hours */}
      <div className="flex gap-4">
        <div className="p-3 rounded-lg bg-primary/10 h-fit">
          <Clock className="text-primary" size={24} />
        </div>
        <div>
          <h3 className="font-sans font-bold text-secondary mb-1">Business Hours</h3>
          <p className="text-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-foreground text-sm">Saturday: 10:00 AM - 4:00 PM</p>
          <p className="text-foreground text-sm">Sunday: Closed</p>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-sm text-foreground mb-3">
          Need quick assistance? Chat with us on WhatsApp for instant support.
        </p>
        <a
          href="https://wa.me/2341234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-lg bg-primary text-secondary font-bold hover:bg-primary/90 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
}
