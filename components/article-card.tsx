import Link from "next/link"
import Image from "next/image"
import { Article } from "@/lib/data"
import { cn } from "@/lib/utils"

type ArticleCardProps = {
  article: Article
  size?: "default" | "small" | "large"
  className?: string
  imageHeightClassName?: string
  equalHeight?: boolean
  showExcerpt?: boolean
  reserveExcerptSpace?: boolean
}

export function ArticleCard({
  article,
  size = "default",
  className,
  imageHeightClassName,
  equalHeight = false,
  showExcerpt = size === "large",
  reserveExcerptSpace = false,
}: ArticleCardProps) {
  const imageHeight =
    imageHeightClassName ??
    (size === "large"
      ? "h-56 md:h-72"
      : size === "small"
        ? "h-32"
        : "h-40 md:h-48")
  
  return (
    <Link
      href={`/article/${article.slug}`}
      className={cn(
        "group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
        equalHeight && "h-full flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className={`relative ${imageHeight} overflow-hidden`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-sm">
            {article.category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn("p-4", equalHeight && "flex flex-col flex-1")}>
        <h3 className={`font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors ${
          size === "large" ? "text-lg" : size === "small" ? "text-sm" : "text-base"
        }`}>
          {article.title}
        </h3>
        {(showExcerpt || reserveExcerptSpace) && (
          <p
            className={cn(
              "mt-2 text-sm text-muted-foreground line-clamp-2",
              reserveExcerptSpace && "min-h-[2.5rem]",
              reserveExcerptSpace && !article.excerpt && "invisible"
            )}
          >
            {article.excerpt ?? "\u00A0"}
          </p>
        )}
        <time className={cn("mt-2 block text-xs text-muted-foreground", equalHeight && "mt-auto")}>
          {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </Link>
  )
}

export function ArticleCardHorizontal({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex gap-4 bg-card rounded-xl overflow-hidden p-3 hover:bg-secondary/30 transition-colors"
    >
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
          {article.category.name}
        </span>
        <h3 className="mt-1 font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <time className="mt-1 block text-xs text-muted-foreground">
          {new Date(article.publishedAt).toLocaleDateString('ja-JP', {
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </Link>
  )
}
