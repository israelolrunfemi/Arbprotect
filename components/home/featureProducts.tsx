
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import products from "@/data/products.json"

export default function FeaturedProducts() {
  const featured = products.products.slice(0, 3)

  return (
    <SectionWrapper className="bg-muted">
      <SectionTitle
        title="Featured Products"
        subtitle="Explore our most popular PPE solutions trusted by businesses across Nigeria."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((product) => (
          <div
            key={product.id}
            className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative h-64 bg-muted overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-bold">
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-lg font-sans font-bold text-secondary mb-2">{product.name}</h3>
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

      {/* View All Button */}
      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
