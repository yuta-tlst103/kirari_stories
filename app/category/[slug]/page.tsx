"use client"

import { use, useState } from "react"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/components/article-card"
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/data"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ARTICLES_PER_PAGE = 12

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const category = getCategoryBySlug(slug)
  const [activeSubcategory, setActiveSubcategory] = useState("すべて")
  const [currentPage, setCurrentPage] = useState(1)

  if (!category) {
    notFound()
  }

  const allArticles = getArticlesByCategory(slug)
  
  // For demo purposes, we'll show all articles regardless of subcategory
  // In a real app, you'd filter based on subcategory
  const filteredArticles = allArticles
  
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  )

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center">
            {category.name}
          </h1>
          <p className="mt-3 text-muted-foreground text-center max-w-2xl mx-auto">
            {category.name}に関する最新記事をお届けします
          </p>
        </div>
      </div>

      {/* Subcategory Filter */}
      {category.subcategories && (
        <div className="border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-30">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {category.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSubcategory(sub)
                    setCurrentPage(1)
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSubcategory === sub
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {paginatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {paginatedArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              記事が見つかりませんでした
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              前へ
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              次へ
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
