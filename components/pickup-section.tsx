import { ArticleCard } from "./article-card"
import { Article } from "@/lib/data"

type PickupSectionProps = {
  articles: Article[]
}

export function PickupSection({ articles }: PickupSectionProps) {
  const displayArticles = articles.slice(0, 5)

  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          PICKUP
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[12rem] gap-3 md:gap-6 items-stretch">
        {displayArticles.map((article, index) => (
          <div
            key={article.id}
            className={
              index === 0
                ? "col-span-2 lg:col-span-2 lg:row-span-2 h-full"
                : "h-full"
            }
          >
            <ArticleCard
              article={article}
              size="default"
              imageHeightClassName={index === 0 ? "h-48 lg:h-[22rem]" : "h-48"}
              equalHeight
              showExcerpt={index === 0}
              reserveExcerptSpace={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
