import { ArticleCard } from "./article-card"
import { Article } from "@/lib/data"

type PickupSectionProps = {
  articles: Article[]
}

export function PickupSection({ articles }: PickupSectionProps) {
  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          PICKUP
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            size={index === 0 ? "large" : "default"}
          />
        ))}
      </div>
    </section>
  )
}
