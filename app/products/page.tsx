/**
 * Products Page - Main products listing page with filtering
 * Server-rendered with category filtering
 */

import type { Metadata } from "next"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import ProductFilter from "@/components/product/productFilter"
import ProductGrid from "@/components/product/productGrid"
import products from "@/data/products.json"

export const metadata: Metadata = {
  title: "Products | ARBprotect",
  description: "Browse our complete range of PPE products including safety helmets, gloves, protective gear, and more.",
  keywords: "PPE products, safety equipment, protective gear, workwear, Nigeria",
}

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const selectedCategory = params.category || "all"

  const filteredProducts =
    selectedCategory === "all" ? products.products : products.products.filter((p) => p.category === selectedCategory)

  const categories = Array.from(new Set(products.products.map((p) => p.category))).sort()

  return (
    <>
      {/* Page Header */}
      <SectionWrapper className="bg-gradient-to-br from-secondary to-neutral-800 text-accent pt-20 md:pt-24 pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-balance">Our Products</h1>
          <p className="text-lg text-accent/90">
            Explore our comprehensive range of certified PPE solutions designed for workplace safety and protection.
          </p>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1">
            <ProductFilter categories={categories} selectedCategory={selectedCategory} />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <ProductGrid products={filteredProducts} />
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
