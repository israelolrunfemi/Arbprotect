/**
 * Footer - Site footer with links, contact info, and company info
 * Server-rendered footer with responsive layout
 */

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary text-accent">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">ARBprotect</h3>
            <p className="text-sm text-accent/80 mb-4">Leading supplier of premium PPE solutions in Nigeria.</p>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-accent hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-accent/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-accent/80 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-accent/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-sans font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@arbprotect.com" className="text-accent/80 hover:text-primary transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <a href="tel:+2341234567890" className="text-accent/80 hover:text-primary transition-colors">
                  +234 (0) 123 456 7890
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-accent/80 hover:text-primary transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-sm mb-4">Contact</h4>
            <p className="text-sm text-accent/80 mb-2">Lagos, Nigeria</p>
            <p className="text-sm text-accent/80 mb-2">Email: info@arbprotect.com</p>
            <p className="text-sm text-accent/80">Phone: +234 (0) 123 456 7890</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-accent/60">
            <p>&copy; {currentYear} ARBprotect. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
