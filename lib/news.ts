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

// 从 markdown 内容中提取第一张图片
function extractFirstImage(content: string): string | null {
  // 匹配 markdown 图片语法: ![alt](url) 或 ![alt](url "title")
  // 支持多行格式和带引号的标题
  const imageRegex = /!\[[^\]]*\]\(([^\)]+)\)/
  const match = content.match(imageRegex)
  if (match && match[1]) {
    // 移除可能的引号和标题（如果 URL 后面有 "title"）
    const url = match[1].trim().split(/\s+/)[0].replace(/^["']|["']$/g, '')
    return url || null
  }
  return null
}

// 移除 markdown 内容中的第一个 h1 标题和第一张图片
// hasFrontmatterImage: 如果 frontmatter 有 image，则只移除 h1，保留内容中的图片
function cleanContent(content: string, hasFrontmatterImage: boolean = false): string {
  let cleaned = content
  
  // 移除第一个 h1 标题（# 开头，后面跟空格和标题文本）
  // 匹配模式：行首的 # 后面跟空格，然后是标题文本，直到行尾
  cleaned = cleaned.replace(/^#\s+.+$/m, '')
  
  // 只有在 frontmatter 没有 image 的情况下，才移除第一张图片
  // 如果 frontmatter 有 image，则保留内容中的图片（因为顶部显示的是 frontmatter 的图片）
  if (!hasFrontmatterImage) {
    // 移除第一张图片（![...](...) 格式，可能跨行）
    // 匹配模式：![任意文本](任意URL)，包括可能的换行
    cleaned = cleaned.replace(/^!\[[^\]]*\]\([^\)]+\)\s*/m, '')
    
    // 移除图片后的空行和可能的图片说明（如 "Image Source: ..."）
    cleaned = cleaned.replace(/^\s*Image\s+Source:.*$/mi, '')
  }
  
  // 清理开头的空行
  cleaned = cleaned.replace(/^\s*\n+/, '')
  
  // 清理多余的空行（3个或更多连续换行变成2个）
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')
  
  return cleaned.trim()
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
    
    // 提取第一张图片（优先使用 frontmatter 的 image，否则从内容中提取）
    const firstImage = data.image || extractFirstImage(content) || '/placeholder.jpg'
    const hasFrontmatterImage = !!data.image
    
    // 清理内容：移除第一个 h1，如果 frontmatter 没有 image 则也移除第一张图片
    const cleanedContent = cleanContent(content, hasFrontmatterImage)
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      image: firstImage,
      excerpt: data.excerpt || '',
      content: cleanedContent,
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

