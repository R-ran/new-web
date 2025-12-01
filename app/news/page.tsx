import Link from "next/link"
import Image from "next/image"
import { getAllNews } from "@/lib/news"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "News - Jinko Solar",
  description: "Latest news and updates from Jinko Solar",
}

export default function NewsPage() {
  const allNews = getAllNews()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(/placeholder.svg?height=400&width=1920&query=solar+panels+on+roof+and+ground)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-balance">News</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-300 text-balance">
            Latest news and updates from Jinko Solar
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">
            Home
          </Link>
          {" > "}
          <Link href="/news" className="text-slate-700 hover:text-primary">
            News
          </Link>  
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full max-w-xs space-y-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
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
                Contact
              </h2>
              <div className="space-y-3 text-sm text-slate-600">
                <p>Tel: +86 133 xxxx xxxx</p>
                <p>WhatsApp: +86 133 xxxx xxxx</p>
                <p>Email: info@companyname.com</p>
                <p>
                  Add：Company Address
                  <br />
                  Company Address, Company City, Country
                </p>
              </div>
            </div>
          </aside>

          {/* News grid */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold uppercase tracking-[0.2em] text-foreground">All News</h2>
            </div>

            <div className="space-y-6">
              {allNews.map((news) => (
                <Link key={news.slug} href={`/news/${news.slug}`} className="block">
                  <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex h-32">
                        {/* 左侧图片 */}
                        <div className="relative w-48 shrink-0">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover"
                            sizes="192px"
                          />
                        </div>
                        
                        {/* 右侧内容 */}
                        <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">{news.title}</h3>
                            <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">{news.date}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                            {news.excerpt}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
