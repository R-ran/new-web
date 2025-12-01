import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface NewsPost {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  content: string
}

const newsDirectory = path.join(process.cwd(), 'content/news')

export function getAllNewsSlugs(): string[] {
  if (!fs.existsSync(newsDirectory)) {
    console.error(`News directory does not exist: ${newsDirectory}`)
    return []
  }
  
  const fileNames = fs.readdirSync(newsDirectory)
  const slugs = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
  
  return slugs
}

export function getNewsBySlug(slug: string): NewsPost | null {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.error(`News file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      image: data.image || '/placeholder.jpg',
      excerpt: data.excerpt || '',
      content,
    }
  } catch (error) {
    console.error(`Error reading news post ${slug}:`, error)
    return null
  }
}

export function getAllNews(): NewsPost[] {
  const slugs = getAllNewsSlugs()
  const allNews = slugs
    .map((slug) => getNewsBySlug(slug))
    .filter((news): news is NewsPost => news !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  
  return allNews
}

