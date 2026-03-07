import Link from "next/link"
import Image from "next/image"
import { Article } from "@/lib/data"

type ArticleCardProps = {
  article: Article
  size?: "default" | "small" | "large"
}

export function ArticleCard({ article, size = "default" }: ArticleCardProps) {
  const imageHeight = size === "large" ? "h-56 md:h-72" : size === "small" ? "h-32" : "h-40 md:h-48"
  
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
      <div className="p-4">
        <h3 className={`font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors ${
          size === "large" ? "text-lg" : size === "small" ? "text-sm" : "text-base"
        }`}>
          {article.title}
        </h3>
        {article.excerpt && size === "large" && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {article.excerpt}
          </p>
        )}
        <time className="mt-2 block text-xs text-muted-foreground">
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
