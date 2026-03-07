"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Article } from "@/lib/data"

type HeroCarouselProps = {
  articles: Article[]
}

export function HeroCarousel({ articles }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }, [articles.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
  }, [articles.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative w-full bg-muted">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none overflow-hidden">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      {article.category.name}
                    </span>
                    <h2 className="mt-3 text-xl md:text-3xl lg:text-4xl font-bold text-card leading-tight line-clamp-2">
                      {article.title}
                    </h2>
                    {article.excerpt && (
                      <p className="mt-2 text-sm md:text-base text-card/80 line-clamp-2 hidden sm:block">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.preventDefault()
              handleInteraction()
              goToPrev()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 hover:bg-card shadow-lg transition-colors"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleInteraction()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/80 hover:bg-card shadow-lg transition-colors"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleInteraction()
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-card/60 hover:bg-card"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
