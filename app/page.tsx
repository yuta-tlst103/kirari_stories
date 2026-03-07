import { HeroCarousel } from "@/components/hero-carousel"
import { PickupSection } from "@/components/pickup-section"
import { CategorySection } from "@/components/category-section"
import {
  getFeaturedArticles,
  getPickupArticles,
  getArticlesByCategory,
  categories,
} from "@/lib/data"

export default function HomePage() {
  const featuredArticles = getFeaturedArticles()
  const pickupArticles = getPickupArticles()

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel articles={featuredArticles} />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Pickup Section */}
        <PickupSection articles={pickupArticles} />

        {/* Category Sections */}
        {categories.map((category) => {
          const categoryArticles = getArticlesByCategory(category.slug)
          return (
            <CategorySection
              key={category.id}
              category={category}
              articles={categoryArticles}
            />
          )
        })}
      </div>
    </div>
  )
}
