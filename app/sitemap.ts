import { getBlogPosts } from 'app/categorias/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/categorias/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/categorias'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
