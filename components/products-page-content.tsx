'use client'

import { useMemo, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  { name: "PE Tarpaulin", href: "/products/pe-tarpaulin" },
  { name: "Netting", href: "/products/netting" },
  { name: "Snow Tarp", href: "/products/snow-tarp" },
  { name: "Other Tarpaulin", href: "/products/other-tarpaulin" },
  { name: "Jumbo Bag", href: "/products/jumbo-bag" },
]

// const ITEMS_PER_PAGE = 6
// const TOTAL_PAGES = 8

// const PRODUCTS = Array.from({ length: TOTAL_PAGES * ITEMS_PER_PAGE }).map((_, index) => {
//   const variantNames = ["Tiger Neo", "Tiger Pro", "Swan", "Cheetah", "Eagle", "Panda"]
//   const variant = variantNames[index % variantNames.length]
//   const wattBase = 620 + (index % ITEMS_PER_PAGE) * 10 + Math.floor(index / ITEMS_PER_PAGE) * 5

//   return {
//     name: `Jinko Solar ${variant} ${wattBase}-${wattBase + 20}W`,
//     category: `Category ${String.fromCharCode(65 + (index % 26))}${index + 1}`,
//     wattRange: `${wattBase}-${wattBase + 20}W`,
//     image: "/ai-technology-quality-control.jpg",
//   }
// })


// export default function ProductsPageContent() {
//   const [currentPage, setCurrentPage] = useState(1)

//   const paginatedProducts = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE
//     return PRODUCTS.slice(start, start + ITEMS_PER_PAGE)
//   }, [currentPage])

// 改为手动定义的产品数组
const PRODUCTS = [
  {
    id: "product-1",
    name: "Fire Resistant Scaffold Sheeting ",
    category: "PE Tarpaulin",
    application: "Construction",
    image: "/ai-technology-quality-control.jpg",
    price: 1200,
  },
  {
    id: "product-2",
    name: "Shade Net",
    category: "Netting",
    application: "Solar Farm, Greenhouse, Construction",
    image: "/shade.png",
    price: 600,
  },
  {
    id: "product-3",
    name: "Heavy-Duty Snow Removal Tarp",
    category: "Snow Tarp",
    application: "Winter Protection, Construction",
    image: "/snow.jpg",
    price: 1500,
  },
  {
    id: "product-4",
    name: "PVC Tarpaulin Roll",
    category: "Other Tarpaulin",
    application: "Tent, Truck, Shading",
    image: "/other.png",
    price: 900,
  },
  {
    id: "product-5",
    name: "Jumbo Bag",
    category: "Jumbo Bag",
    application: "Bulk Material Storage, Transportation",
    image: "/jumbo-bag.png",
    price: 3000,
  },
  {
    id: "product-6",
    name: "Flame Retardant Scaffold Sheeting",
    category: "PE Tarpaulin",
    application: "Construction, Flammable facility, Transportation",
    image: "/ai-technology-quality-control.jpg",
    price: 1500,
  },
  {
    id: "product-7",
    name: "Scaffolding Tarpaulin ",
    category: "PE Tarpaulin",
    application: "Construction, Humid areas",
    image: "/ai-technology-quality-control.jpg",
    price: 800,
  },
  {
    id: "product-8",
    name: "HDPE Reinforced Green Plastic Sheets Strong Leno Tarpaulin",
    category: "PE Tarpaulin",
    application: "Germany Greenhouse Market",
    image: "/ai-technology-quality-control.jpg",
    price: 2000,
  },
  {
    id: "product-9",
    name: "Safety Net",
    category: "Netting",
    application: "Safety, Fencing, Packaging",
    image: "/safety.png",
    price: 800,
  },
  {
    id: "product-10",
    name: "Mesh Net",
    category: "Netting",
    application: "Safety, Fencing, Packaging",
    image: "/mesh.png",
    price: 450,
  },
]
// 根据实际产品数量计算分页
const ITEMS_PER_PAGE = 6
const TOTAL_PAGES = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE)
const pages = Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1)

export default function ProductsPageContent() {
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return PRODUCTS.slice(start, start + ITEMS_PER_PAGE)
  }, [currentPage])


  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0">
          <Image
            src="/shade.png"
            alt="Shade net"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto flex flex-col gap-6 px-4 py-20">
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.4em] text-primary">
              <span className="h-[1px] w-16 bg-primary" />
              Products
            </div>
            <h1 className="text-4xl font-bold uppercase tracking-[0.2em] text-foreground">ALL Products</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Discover our full portfolio of products designed for residential, commercial, and
              utility-scale projects around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground">
          Current position:{" "}
          <Link href="/" className="text-foreground/70 hover:text-primary">
            Home
          </Link>
          {" > "}
          <Link href="/products" className="text-foreground/70 hover:text-primary">
            Products
          </Link> 
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col gap-10 px-4 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full max-w-xs space-y-8 rounded-lg border border-border bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div>
              <h2 className="mb-4 border-l-4 border-primary pl-3 text-lg font-semibold uppercase text-foreground">
                Products
              </h2>
              <ul className="space-y-3 text-sm">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={category.href}
                      className="block rounded bg-muted/50 px-3 py-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 border-l-4 border-primary pl-3 text-lg font-semibold uppercase text-foreground">
                Contact
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
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
              <h2 className="text-2xl font-semibold uppercase tracking-[0.2em] text-foreground">All Products</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedProducts.map((product, index) => {
                const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index
                return (
                <Card key={`${product.id || product.name}-${globalIndex}`} className="overflow-hidden border border-border shadow-sm transition hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="330px" />
                    </div>
                    <div className="space-y-4 p-4">
                      <div>
                        <h3 className="mt-2 text-base font-semibold text-foreground">{product.name}</h3>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>Category: {product.category}</p>
                        <p>Application: {product.application}</p>
                      </div>
                      {product.price && (
                        <div className="flex items-center justify-between border-t pt-3">
                          <div className="text-xl font-bold text-primary">
                            ¥{product.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            MOQ: 1 piece
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                )
              })}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-sm">
              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 w-9 rounded-full border border-border text-xs font-semibold transition hover:border-primary hover:text-primary ${
                    page === currentPage ? "border-primary bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

