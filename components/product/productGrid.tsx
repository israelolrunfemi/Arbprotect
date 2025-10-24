/**
 * ProductGrid - Grid display for products
 * Shows product cards in a responsive grid layout
 */

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  category: string
  price: string
  image: string
  description: string
  features: string[]
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Product Image */}
          <Link href={`/products/${product.id}`} className="block relative h-64 bg-muted overflow-hidden group">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-bold">
              {product.category}
            </div>
          </Link>

          {/* Product Info */}
          <div className="p-6">
            <Link href={`/products/${product.id}`} className="group">
              <h3 className="text-lg font-sans font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-sans font-bold text-primary">{product.price}</span>
              <Button asChild size="sm" className="bg-secondary text-accent hover:bg-secondary/90">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
