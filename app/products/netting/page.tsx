'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InquiryDialog } from "@/components/inquiry-dialog"
import { ProductCard } from "@/components/products/product-card"

const productTypes = [
  {
    id: "netting-1",
    name: "Shade Net",
    description: "High-quality shade netting designed for solar farms, greenhouses, and construction applications. Provides excellent UV protection and temperature control while allowing air circulation.",
    image: "/shade.png",
    price: 600,
    category: "Netting",
  },
  {
    id: "netting-2",
    name: "Safety Net",
    description: "Durable safety netting designed for construction sites, sports facilities, and industrial applications. Provides reliable protection and fall prevention with high strength and weather resistance.",
    image: "/mesh.png",
    price: 800,
    category: "Netting",
  },
  {
    id: "netting-3",
    name: "Mesh Net",
    description: "Versatile mesh netting suitable for packaging, fencing, and agricultural applications. Features excellent breathability and durability for various industrial and commercial uses.",
    image: "/mesh.png",
    price: 450,
    category: "Netting",
  },
  {
    id: "netting-4",
    name: "Agricultural Netting",
    description: "Specialized netting for agricultural applications including crop protection, bird control, and greenhouse covering. Designed to withstand outdoor conditions while protecting crops.",
    image: "/shade.png",
    price: 700,
    category: "Netting",
  },
]

export default function NettingPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <InquiryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/shade.png" alt="Netting" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <h1 className="text-5xl font-bold uppercase text-foregroun">Netting</h1>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}
          <Link href="/products" className="text-slate-700 hover:text-primary">Products</Link>
           {" > "}
          <Link href="/products/netting" className="text-slate-700 hover:text-primary">Netting</Link>
        </div>
      </section>

      {/* What are Netting */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">What are Netting?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Netting is a versatile mesh material made from various synthetic fibers designed for protection, safety, and
            environmental control. The material is engineered to provide strength, durability, and specific properties
            such as UV resistance, breathability, and weather protection for diverse applications.
          </p>
        </div>
      </section>

      {/* Types of Netting */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-foreground">Types of Netting</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productTypes.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onInquiry={() => setIsDialogOpen(true)}
              />
            ))}
          </div>
     
        </div>
      </section>

      {/* Benefits of Netting */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Benefits of Netting</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Using Holy Matrix netting comes with a lot of advantages. These advantages include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Netting provides excellent breathability while offering protection from external elements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    The reinforced material structure makes it durable and extends its service life significantly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Available in different mesh sizes, weights, and materials making it adaptable to various
                    applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    UV-resistant properties protect against sun damage and extend the lifespan of covered materials.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Lightweight yet strong, making it easy to install and handle while providing reliable protection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Weather-resistant design prevents damage from rain, wind, and other environmental factors.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Send Inquiry Now
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/shade.png" alt="Netting benefits" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>

      {/* Features of Netting */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image src="/mesh.png" alt="Netting features" fill className="object-cover" sizes="600px" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-foreground">Features of Netting</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                The key features present in the Holy Matrix netting include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High-strength synthetic fibers that provide excellent tensile strength and resistance to tearing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    UV stabilization treatment that protects against sun damage and color fading over time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Breathable mesh design that allows air circulation while providing protection from external
                    elements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Weather-resistant properties including resistance to water, mildew, and temperature variations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Customizable mesh sizes and weights to meet specific application requirements and performance
                    needs.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Send Inquiry Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to use Netting */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Where to use Netting</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Holy Matrix netting is designed with different specifications offering plenty of options for varying
                applications. The protective material is engineered with many safety features making it ideal for
                diverse uses. They can be used for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Solar farms for shading and temperature control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Greenhouse construction and crop protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Construction sites for safety barriers and fall protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Packaging and transportation for securing goods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Agricultural applications for bird control and crop protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Fencing and boundary marking in various industries</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Send Inquiry Now
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/shade.png" alt="Netting applications" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
