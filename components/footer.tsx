import Link from "next/link"

const categories = [
  { href: "/category/fashion", label: "ファッション" },
  { href: "/category/beauty", label: "ビューティー" },
  { href: "/category/life", label: "ライフ" },
  { href: "/category/school", label: "スクール" },
  { href: "/category/entertainment", label: "エンタメ" },
  { href: "/category/column", label: "コラム" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary">
                キラリストーリーズ
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              10代女子のためのトレンド情報メディア。
              ファッション、ビューティー、ライフスタイルなど、
              毎日をもっとキラキラさせる情報をお届けします。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">カテゴリー</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">その他</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  運営会社
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} キラリストーリーズ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
