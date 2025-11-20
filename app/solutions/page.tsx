import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
export const metadata = {
  title: "Solutions - Jinko Solar",
  description: "Comprehensive solar energy solutions for residential, commercial, and utility-scale projects",
}

export default function SolutionsPage() {
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
          <h1 className="mb-4 text-5xl font-bold text-balance">Solar Energy Solutions</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-300 text-balance">
            Tailored solar solutions for every application - from residential rooftops to massive utility-scale
            installations
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
          <Link href="/solutions" className="text-slate-700 hover:text-primary">
            Solutions
          </Link>  
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full max-w-xs space-y-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div>
              <h2 className="mb-4 border-l-4 border-primary pl-3 text-lg font-semibold uppercase text-foreground">
                Cases
              </h2>
              <div className="block rounded bg-muted/50 px-3 py-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">
                Solutions
              </div>
              
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

          {/* Products grid */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold uppercase tracking-[0.2em] text-foreground">All Solutions</h2>
            </div>

            <aside className="flex-1 min-w-0">
    <div className="sticky top-6 space-y-4">
      {/* 案例卡片 1 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/surface-power.jpg" 
                alt="Surface power plants installation case on ground field" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 - 自适应填满剩余空间 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Surface power plants</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-14</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Whether it's for your own use or transferred into grids, solar power generation offers a new way to generate revenue, but it still depends on whether you choose the right modules and the best partners.
              </p>
              
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 案例卡片 2 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/industrial-commercial.jpg" 
                alt="Industrial rooftop solar panel installation case" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Industrial and commercial distribution</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-11-26</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Do you want to invest in PV projects in the market with a high-performance system that maximizes your return on investment?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 案例卡片 3 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/residential-roof.jpg" 
                alt="Residential house rooftop solar installation case" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Residential house roof</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-11-26</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Whether it's for your own use or transferred into grids, solar power generation offers a new way to generate revenue...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 案例卡片 4 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/residential-roof.jpg" 
                alt="Residential house rooftop solar installation case" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Residential house roof</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-11-26</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Whether it's for your own use or transferred into grids, solar power generation offers a new way to generate revenue...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 案例卡片 5 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/residential-roof.jpg" 
                alt="Residential house rooftop solar installation case" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Residential house roof</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-11-26</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Whether it's for your own use or transferred into grids, solar power generation offers a new way to generate revenue...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 案例卡片 6 */}
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition hover:shadow-md cursor-pointer">
        <CardContent className="p-0">
          <div className="flex h-32">
            {/* 左侧图片 */}
            <div className="relative w-48 shrink-0">
              <Image 
                src="/images/cases/residential-roof.jpg" 
                alt="Residential house rooftop solar installation case" 
                fill 
                className="object-cover" 
                sizes="192px"
              />
            </div>
            
            {/* 右侧内容 */}
            <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-slate-800 pr-3 truncate">Residential house roof</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap shrink-0">2024-11-26</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Whether it's for your own use or transferred into grids, solar power generation offers a new way to generate revenue...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  </aside>  
            </div>
          </div>
          
        </section>
    </main>
  )
}
