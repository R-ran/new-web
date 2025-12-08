'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InquiryDialog } from "@/components/inquiry-dialog"
import { ProductCard } from "@/components/products/product-card"

const productTypes = [
  {
    id: "pe-tarpaulin-1",
    name: "Fire Resistant Scaffold Sheeting",
    description: "This is a high-quality PE tarpaulin designed for construction applications. Fire-resistant tarps are designed to be resistant to fire, tear, mildew, and chemicals, making them ideal for construction sites and flammable facilities.",
    image: "/ai-technology-quality-control.jpg",
    price: 1200,
    category: "PE Tarpaulin",
  },
  {
    id: "pe-tarpaulin-2",
    name: "Flame Retardant Scaffold Sheeting",
    description: "Flame retardant PE tarpaulin is treated with special chemicals to prevent the spread of flames. They are suitable for construction, flammable facilities, and transportation applications where fire safety is critical.",
    image: "/ai-technology-quality-control.jpg",
    price: 1500,
    category: "PE Tarpaulin",
  },
  {
    id: "pe-tarpaulin-3",
    name: "Scaffolding Tarpaulin",
    description: "Designed specifically for construction scaffolding protection, these tarps offer excellent weather resistance and durability. Ideal for construction sites and humid areas where moisture protection is essential.",
    image: "/ai-technology-quality-control.jpg",
    price: 800,
    category: "PE Tarpaulin",
  },
  {
    id: "pe-tarpaulin-4",
    name: "HDPE Reinforced Green Plastic Sheets",
    description: "Heavy-duty HDPE reinforced tarps with enhanced strength and durability. These tarps are designed for demanding applications including greenhouse markets, industrial use, and long-term outdoor protection.",
    image: "/ai-technology-quality-control.jpg",
    price: 2000,
    category: "PE Tarpaulin",
  },
]

export default function PETarpaulinPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <InquiryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/ai-technology-quality-control.jpg"
          alt="PE Tarpaulin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <h1 className="text-5xl font-bold uppercase text-foreground">PE Tarpaulin</h1>
        </div>
        
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}
          <Link href="/products" className="text-slate-700 hover:text-primary">Products</Link>
           {" > "}
          <Link href="/products/pe-tarpaulin" className="text-slate-700 hover:text-primary">PE Tarpaulin</Link>
        </div>
      </section>

      {/* What are PE Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">What are PE Tarpaulin?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            PE tarpaulin is a protective covering made from polyethylene material that is typically reinforced with
            fabric scrim to increase its strength and durability. The cover is designed to protect goods and spaces from
            damage, contamination, and adverse weather conditions.
          </p>
        </div>
      </section>

      {/* Types of PE Tarpaulin */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-foreground">Types of PE Tarpaulin</h2>
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

      {/* Benefits of PE Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Benefits of PE Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Using Holy Matrix PE tarps comes with a lot of advantages. These advantages include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>PE tarps require very little maintenance and are very easy to clean.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    The reinforced material used to design the tarp makes it durable as well as prolongs its service
                    life.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    The versatile protective cover is designed in different sizes and thicknesses making it adaptable to
                    various applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    PE tarps are created with resistance against wear and tear, which makes them suitable for multiple
                    uses.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Raw materials used to design the tarps are often treated to prevent the cover from getting attacked
                    by mold and rotting.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    PE tarps offer breathability in terms of the material used and this prevents moisture from building
                    up underneath it which may result in damaged or decaying goods.
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
              <Image
                src="/ai-technology-quality-control.jpg"
                alt="PE Tarpaulin benefits"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features of PE Tarpaulin */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/ai-technology-quality-control.jpg"
                alt="PE Tarpaulin features"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-foreground">Features of PE Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                The key features present in the Holy Matrix PE tarpaulin include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    A fully waterproof design that allows the tarp to prevent the cover from absorbing moisture.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Fabric scrim present in the tarp is used to strengthen the cover making it resistant to wear and
                    tear.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    This protective cover is fortified with safety features including UV and cold crack protection that
                    offer additional protection to objects underneath it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    The tarpaulin is treated to have an increased resistance to acid, oil, and mildew.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Specific categories of PE tarps are treated to make them flame-retardant for enhanced safety.
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

      {/* Where to use PE Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Where to use PE Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Holy Matrix PE tarps are designed with different sizes and weights offering plenty of options for
                varying applications. The protective covers are fashioned and fortified with many safety features making
                it ideal for high-risk and hazardous duties. They can be used for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Construction sites for protecting equipment, supplies, and heavy loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Covering trucks and securing goods being transported</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Scaffolding protection in construction and humid areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Acting as a protective surface in hazardous environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Agricultural applications including greenhouse markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Flammable facility protection and fire-resistant applications</span>
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
              <Image
                src="/ai-technology-quality-control.jpg"
                alt="PE Tarpaulin applications"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
