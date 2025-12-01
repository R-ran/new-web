import { getAllNewsSlugs, getNewsBySlug } from '@/lib/news'
import { MarkdownRenderer } from '@/components/markdown/markdown-renderer'
import { NewsContactForm } from '@/components/news-contact-form'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params
  const { slug } = resolvedParams
  const news = getNewsBySlug(slug)

  if (!news) {
    return {
      title: 'News Not Found',
    }
  }

  return {
    title: news.title,
    description: news.excerpt,
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params
  const { slug } = resolvedParams
  const news = getNewsBySlug(slug)

  if (!news) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">News not found</h1>
        <Link href="/news" className="text-primary hover:underline">
          Back to News
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-white">
      <section className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground">
          Current position:{" "}
          <Link href="/" className="text-foreground/70 hover:text-primary">
            Home
          </Link>
          {" > "}
          <Link href="/news" className="text-foreground/70 hover:text-primary">
            News
          </Link>
          {" > "}
          <span className="text-foreground">{news.title}</span>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row">
          <aside className="w-full max-w-xs space-y-8 rounded-lg border border-border bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div>
              <h2 className="mb-4 border-l-4 border-primary pl-3 text-lg font-semibold uppercase text-foreground">
                News
              </h2>
              <Link
                href="/news"
                className="block rounded bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                All News
              </Link>
            </div>
            <div>
              <h2 className="mb-4 border-l-4 border-primary pl-3 text-lg font-semibold uppercase text-foreground">
                Contact Us
              </h2>
              <NewsContactForm />
            </div>
          </aside>

          <article className="flex-1">
            <div className="mb-8">
              <div className="mb-4 text-sm text-muted-foreground">{news.date}</div>
              <h1 className="mb-4 text-4xl font-bold">{news.title}</h1>
              {news.excerpt && (
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{news.excerpt}</p>
              )}
              {news.image && (
                <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}
            </div>

            <div className="prose prose-slate max-w-none markdown-content">
              <MarkdownRenderer content={news.content} />
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

