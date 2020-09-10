export type SourceType = {
  id: string
  name: string
}

export type PostType = {
  author: string
  content: string
  description: string
  publishedAt: string
  url: string
  urlToImage: string
  title: string
  source: SourceType
}

export type ArticleType = {
  articles: Array<PostType>
  status: string
  totalResults: number
}