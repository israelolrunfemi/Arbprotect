/**
 * ProductFilter - Sidebar filter component for product categories
 * Server-rendered filter with category links
 */

import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProductFilterProps {
  categories: string[]
  selectedCategory: string
}

export default function ProductFilter({ categories, selectedCategory }: ProductFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-sans font-bold text-secondary">Filter by Category</h3>

      <div className="space-y-2">
        {/* All Products */}
        <Link
          href="/products"
          className={cn(
            "block px-4 py-2 rounded-lg transition-colors",
            selectedCategory === "all"
              ? "bg-primary text-secondary font-bold"
              : "text-foreground hover:bg-muted border border-border",
          )}
        >
          All Products
        </Link>

        {/* Categories */}
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${encodeURIComponent(category)}`}
            className={cn(
              "block px-4 py-2 rounded-lg transition-colors",
              selectedCategory === category
                ? "bg-primary text-secondary font-bold"
                : "text-foreground hover:bg-muted border border-border",
            )}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}
