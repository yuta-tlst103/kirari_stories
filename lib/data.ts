export type Category = {
  id: string
  name: string
  slug: string
  subcategories?: string[]
}

export type Article = {
  id: string
  title: string
  slug: string
  category: Category
  image: string
  publishedAt: string
  excerpt?: string
  content?: string
}

export const categories: Category[] = [
  { 
    id: "fashion", 
    name: "ファッション", 
    slug: "fashion",
    subcategories: ["すべて", "トレンド", "コーデ", "ブランド"]
  },
  { 
    id: "beauty", 
    name: "ビューティー", 
    slug: "beauty",
    subcategories: ["すべて", "メイク", "スキンケア", "ヘアアレンジ"]
  },
  { 
    id: "life", 
    name: "ライフ", 
    slug: "life",
    subcategories: ["すべて", "グルメ", "トラベル", "インテリア"]
  },
  { 
    id: "school", 
    name: "スクール", 
    slug: "school",
    subcategories: ["すべて", "勉強法", "部活", "友達"]
  },
  { 
    id: "entertainment", 
    name: "エンタメ", 
    slug: "entertainment",
    subcategories: ["すべて", "音楽", "映画・ドラマ", "アイドル"]
  },
  { 
    id: "column", 
    name: "コラム", 
    slug: "column",
    subcategories: ["すべて", "恋愛", "お悩み相談", "占い"]
  },
]

export const articles: Article[] = [
  // Featured articles for hero
  {
    id: "1",
    title: "2026年春のトレンドカラーはパステルラベンダー！取り入れ方を徹底解説",
    slug: "spring-trend-color-2026",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    publishedAt: "2026-03-07",
    excerpt: "今年の春はパステルラベンダーがトレンド！コーデへの取り入れ方から、おすすめアイテムまで詳しくご紹介します。",
    content: `
## パステルラベンダーが今年のトレンド

2026年春、ファッション業界で最も注目されているカラーがパステルラベンダーです。この優しい色合いは、春らしい軽やかさと上品さを兼ね備えています。

### 取り入れ方のポイント

1. **トップスから始める**
   - ラベンダーカラーのブラウスやニットは、顔周りを明るく見せてくれます
   
2. **小物でアクセント**
   - バッグやスカーフなど、小物から取り入れるのもおすすめ

3. **ホワイトと合わせる**
   - 白との相性は抜群！清潔感のあるコーデが完成します

> 「今年はパステルカラーを主役にしたコーデがトレンド。特にラベンダーは肌なじみが良く、誰でも取り入れやすい色です」- ファッションスタイリスト

### おすすめアイテム

春物の新作が続々と登場中。お気に入りのアイテムを見つけて、トレンドを先取りしましょう！
    `
  },
  {
    id: "2",
    title: "韓国コスメ新作特集！この春絶対チェックしたい10アイテム",
    slug: "korean-cosmetics-spring-2026",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    publishedAt: "2026-03-06",
    excerpt: "韓国コスメの最新トレンドをお届け！春メイクにぴったりの新作アイテムを厳選してご紹介。"
  },
  {
    id: "3",
    title: "新学期のスタートダッシュ！成績アップする勉強法5選",
    slug: "study-tips-new-semester",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop",
    publishedAt: "2026-03-05",
    excerpt: "新学期に向けて、効率的な勉強法をマスターしよう！"
  },
  // Fashion articles
  {
    id: "4",
    title: "プチプラで作る！春の1週間コーデまとめ",
    slug: "spring-week-coordinate",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "5",
    title: "今すぐ買いたい！人気ブランドの春物新作バッグ",
    slug: "spring-bags-2026",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "6",
    title: "制服に合わせたい！春のカーディガンコーデ",
    slug: "cardigan-coordinate",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "7",
    title: "足元から春を感じて！2026年トレンドシューズ特集",
    slug: "trend-shoes-2026",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
  // Beauty articles
  {
    id: "8",
    title: "透明感メイクの作り方！韓国アイドル風テクニック",
    slug: "transparent-makeup",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "9",
    title: "春の敏感肌対策！スキンケアルーティン完全ガイド",
    slug: "spring-skincare",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "10",
    title: "簡単可愛い！3分でできるヘアアレンジ10選",
    slug: "easy-hair-arrange",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "11",
    title: "学校でもバレない！ナチュラルメイクのコツ",
    slug: "natural-school-makeup",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
  // Life articles
  {
    id: "12",
    title: "映えスイーツ特集！東京で話題のカフェ5選",
    slug: "tokyo-sweets-cafe",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "13",
    title: "おしゃれな勉強机の作り方！集中できる部屋づくり",
    slug: "study-desk-decoration",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "14",
    title: "友達と行きたい！春休みおすすめスポット",
    slug: "spring-vacation-spots",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "15",
    title: "お小遣いで買える！かわいい文房具コレクション",
    slug: "cute-stationery",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
  // School articles
  {
    id: "16",
    title: "先輩に聞いた！部活と勉強を両立するコツ",
    slug: "club-study-balance",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "17",
    title: "クラス替えで友達を作る！コミュニケーション術",
    slug: "make-new-friends",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "18",
    title: "文化祭を成功させる！企画アイデア20選",
    slug: "school-festival-ideas",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "19",
    title: "受験生必見！モチベーションを保つ方法",
    slug: "exam-motivation",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
  // Entertainment articles
  {
    id: "20",
    title: "今季絶対観たい！話題の春ドラマ特集",
    slug: "spring-drama-2026",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "21",
    title: "2026年ブレイク予想！注目の若手俳優5人",
    slug: "breakout-actors-2026",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "22",
    title: "春フェス情報まとめ！行きたいライブイベント",
    slug: "spring-music-festival",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "23",
    title: "推し活グッズの収納術！きれいに飾るアイデア",
    slug: "oshi-goods-storage",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
  // Column articles
  {
    id: "24",
    title: "好きな人と話せない...そんな時のアドバイス",
    slug: "love-advice-shy",
    category: categories[5],
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=500&fit=crop",
    publishedAt: "2026-03-04"
  },
  {
    id: "25",
    title: "3月の星座占い！あなたの運勢は？",
    slug: "march-horoscope",
    category: categories[5],
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=500&fit=crop",
    publishedAt: "2026-03-03"
  },
  {
    id: "26",
    title: "友達関係のお悩み相談室：距離感の保ち方",
    slug: "friendship-advice",
    category: categories[5],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop",
    publishedAt: "2026-03-02"
  },
  {
    id: "27",
    title: "自分に自信を持つための10のヒント",
    slug: "self-confidence-tips",
    category: categories[5],
    image: "https://images.unsplash.com/photo-1494178270175-e96de2971df9?w=800&h=500&fit=crop",
    publishedAt: "2026-03-01"
  },
]

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(article => article.category.slug === categorySlug)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug)
}

export function getFeaturedArticles(): Article[] {
  return articles.slice(0, 3)
}

export function getPickupArticles(): Article[] {
  return articles.slice(0, 6)
}

export function getRelatedArticles(article: Article, limit: number = 4): Article[] {
  return articles
    .filter(a => a.category.slug === article.category.slug && a.id !== article.id)
    .slice(0, limit)
}

/** おすすめ記事ドロワー用：ランダムな記事を返す（除外slug指定可） */
export function getRandomArticles(limit: number = 3, excludeSlug?: string): Article[] {
  const filtered = excludeSlug
    ? articles.filter((a) => a.slug !== excludeSlug)
    : [...articles]
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, limit)
}
