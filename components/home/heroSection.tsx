/**
 * HeroSection - Votra-inspired hero with background image slideshow
 * Text overlaid directly on background without glassmorphic card
 */

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Background slideshow images
  const backgroundImages = [
        '/manhelment.jpg',
        '/Close up hand holding hard hat site construction background ,engineer architecture helmet protect _ Premium Photo.jpg',
        '/manhelment.jpg',        
        '/Close up hand holding hard hat site construction background ,engineer architecture helmet protect _ Premium Photo.jpg',
        '/manhelment.jpg',

    ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white text-balance leading-tight mb-4">
            One Moment.  <span className="text-primary">One Mission. Total Protection</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
            Born from real experience, ARBprotect exists to make sure no worker, student, or technician faces danger unprotected.

          </p>

          {/* Stats Row */}
           <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-b border-white/20">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">1M+</p>
              <p className="text-sm text-white/80">Tons Shipped Annually</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">70+</p>
              <p className="text-sm text-white/80">Countries Served</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-white/80">On-Time Delivery Rate</p>
            </div>
          </div> 

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
              <Link href="/products" className="flex items-center gap-2">
                Explore Now <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-sans font-bold bg-transparent"
            >
              <Link href="#" className="flex items-center gap-2">
                <Play size={20} /> Play Video
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
