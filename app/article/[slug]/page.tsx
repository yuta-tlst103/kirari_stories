import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getArticleBySlug, getRelatedArticles } from "@/lib/data"
import { ArticleCard } from "@/components/article-card"
import { ShareButtons } from "@/components/share-buttons"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "記事が見つかりません | キラリストーリーズ",
    }
  }

  return {
    title: `${article.title} | キラリストーリーズ`,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      images: [article.image],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const { slug } = use(params)
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article, 4)
  const articleUrl = `https://kirari-stories.com/article/${slug}`

  // Sample content if article doesn't have content
  const defaultContent = `
## ${article.title}

この記事では、${article.category.name}に関する最新情報をお届けします。

### ポイント1

毎日の生活に取り入れやすいアイデアをご紹介。トレンドを押さえながらも、自分らしさを大切にしましょう。

### ポイント2

友達との共有も楽しい！SNSでシェアして、みんなの意見も聞いてみてください。

> 「自分らしく輝くことが一番大切」- 編集部より

### まとめ

いかがでしたか？この記事が少しでも参考になれば嬉しいです。他にも気になる記事があれば、ぜひチェックしてみてくださいね。
  `

  const content = article.content || defaultContent

  return (
    <article className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              HOME
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/category/${article.category.slug}`}
              className="hover:text-primary transition-colors"
            >
              {article.category.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full aspect-video md:aspect-[21/9] max-h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>

      {/* Article Header */}
      <div className="mx-auto max-w-4xl px-4 -mt-24 relative z-10">
        <div className="bg-card rounded-2xl shadow-lg p-6 md:p-10">
          {/* Category Badge */}
          <Link
            href={`/category/${article.category.slug}`}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {article.category.name}
          </Link>

          {/* Title */}
          <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <time>
              {new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-strong:text-foreground">
          {content.split("\n").map((line, index) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold mt-8 mb-4 text-foreground"
                >
                  {line.replace("## ", "")}
                </h2>
              )
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl font-bold mt-6 mb-3 text-foreground"
                >
                  {line.replace("### ", "")}
                </h3>
              )
            }
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-primary pl-4 my-6 text-muted-foreground italic"
                >
                  {line.replace("> ", "")}
                </blockquote>
              )
            }
            if (line.trim()) {
              return (
                <p key={index} className="my-4 text-foreground/80 leading-relaxed">
                  {line}
                </p>
              )
            }
            return null
          })}
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-border">
          <ShareButtons title={article.title} url={articleUrl} />
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              関連記事
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
