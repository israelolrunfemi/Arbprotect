import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string): string {
  return price
}

export function getProductsByCategory(products: any[], category: string) {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function getCategories(products: any[]) {
  const categories = new Set(products.map((p) => p.category))
  return Array.from(categories).sort()
}
