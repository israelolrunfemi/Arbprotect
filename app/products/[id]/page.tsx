/**
 * Product Details Page - Individual product page with full details
 * Server-rendered with dynamic routing
 */

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { MessageCircle } from "lucide-react"
import products from "@/data/products.json"

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = await params
  const product = products.products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return {
      title: "Product Not Found | ARBprotect",
    }
  }

  return {
    title: `${product.name} | ARBprotect`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, PPE, safety equipment`,
  }
}

export async function generateStaticParams() {
  return products.products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = await params
  const product = products.products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <SectionWrapper className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild>
          <Link href="/products">Back to Products</Link>
        </Button>
      </SectionWrapper>
    )
  }

  const relatedProducts = products.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <SectionWrapper className="bg-muted py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/products" className="text-primary hover:underline">
            Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href={`/products?category=${product.category}`} className="text-primary hover:underline">
            {product.category}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </SectionWrapper>

      {/* Product Details */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-muted border border-border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                {product.category}
              </div>
              <h1 className="text-4xl font-sans font-bold text-secondary mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-border py-6">
              <p className="text-sm text-muted-foreground mb-2">Price</p>
              <p className="text-4xl font-sans font-bold text-primary">{product.price}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-sans font-bold text-secondary mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-sans font-bold flex-1">
                <MessageCircle className="mr-2" size={20} />
                Request Quote
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 font-sans font-bold bg-transparent"
              >
                <Link href="/products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-sans font-bold text-secondary mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-sans font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold">{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>
    </>
  )
}
