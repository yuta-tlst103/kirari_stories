'use client'

import { useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { getRandomArticles } from '@/lib/data'
import type { Article } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DISMISS_STORAGE_KEY = 'kirari-random-drawer-dismissed'
const SHOW_DELAY_MS = 2500
const SCROLL_THRESHOLD_PX = 200

function DrawerArticleItem({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex gap-3 rounded-xl p-2.5 -mx-2.5 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
    >
      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="64px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
          {article.category.name}
        </span>
        <h3 className="mt-1 font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
      </div>
    </Link>
  )
}

export function RandomPostDrawer() {
  const pathname = usePathname()
  const currentSlug =
    pathname?.startsWith('/article/') ? pathname.split('/').filter(Boolean)[1] : undefined

  const [recommendedArticles, setRecommendedArticles] = useState<Article[]>([])
  const [hasTriggered, setHasTriggered] = useState(false)
  const [dismissed, setDismissed] = useState(true) // start true so we don't flash; will re-check in useEffect
  const [isExiting, setIsExiting] = useState(false)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)

  const triggerShow = useCallback(() => {
    if (typeof window === 'undefined') return
    const wasDismissed = sessionStorage.getItem(DISMISS_STORAGE_KEY) === '1'
    if (!wasDismissed) setDismissed(false)
    setHasTriggered(true)
  }, [])

  useEffect(() => {
    setRecommendedArticles(getRandomArticles(3, currentSlug))
  }, [currentSlug])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const wasDismissed = sessionStorage.getItem(DISMISS_STORAGE_KEY) === '1'
    setDismissed(wasDismissed)

    const timer = setTimeout(triggerShow, SHOW_DELAY_MS)

    const onScroll = () => {
      if (window.scrollY >= SCROLL_THRESHOLD_PX) triggerShow()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [triggerShow])

  const handleClose = () => {
    setIsExiting(true)
    sessionStorage.setItem(DISMISS_STORAGE_KEY, '1')
    const t = setTimeout(() => {
      setDismissed(true)
      setIsExiting(false)
    }, 350)
    return () => clearTimeout(t)
  }

  const isVisible = hasTriggered && !dismissed && recommendedArticles.length > 0

  useEffect(() => {
    if (!isVisible) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setHasAnimatedIn(true))
    })
    return () => cancelAnimationFrame(id)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-label="おすすめ記事"
      className={cn(
        'fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm',
        'rounded-2xl shadow-xl',
        'bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/20',
        'dark:from-primary/20 dark:via-secondary/20 dark:to-accent/15',
        'border border-white/40 dark:border-white/10',
        'backdrop-blur-sm',
        'transition-all duration-500 ease-out',
        isExiting
          ? 'translate-y-4 translate-x-4 opacity-0 pointer-events-none'
          : hasAnimatedIn
            ? 'translate-y-0 translate-x-0 opacity-100'
            : 'translate-y-8 translate-x-4 opacity-0'
      )}
    >
      <div className="p-4 pb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-foreground/90">
            おすすめ記事
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleClose}
            className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/50"
            aria-label="閉じる"
          >
            <X className="size-4" />
          </Button>
        </div>
        <ul className="space-y-0.5">
          {recommendedArticles.map((article) => (
            <li key={article.id}>
              <DrawerArticleItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
