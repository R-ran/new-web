'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/product-card"
import { InquiryDialog } from "@/components/inquiry-dialog"

const productTypes = [
  {
    id: "snow-tarp-1",
    name: "Heavy-Duty Snow Removal Tarp",
    description: "This is the highest-quality snow tarp designed for winter protection and construction applications. Heavy-duty snow tarps are designed to be resistant to extreme cold, moisture, and heavy snow loads.",
    image: "/snow.jpg",
    price: 1800,
    category: "雪布",
  },
  {
    id: "snow-tarp-2",
    name: "Winter Protection Tarp",
    description: "Specialized tarps designed for winter protection of equipment, construction sites, and outdoor storage. Features enhanced cold resistance and durability for harsh winter conditions.",
    image: "/snow.jpg",
    price: 1500,
    category: "雪布",
  },
  {
    id: "snow-tarp-3",
    name: "Snow-Resistant Construction Tarp",
    description: "Heavy-duty tarps specifically designed for construction sites during winter months. Provides excellent protection from snow, ice, and freezing temperatures while maintaining structural integrity.",
    image: "/snow.jpg",
    price: 1200,
    category: "雪布",
  },
  {
    id: "snow-tarp-4",
    name: "Cold Weather Protective Cover",
    description: "Advanced protective covers designed to withstand extreme cold temperatures and heavy snow accumulation. Ideal for long-term outdoor protection during winter seasons.",
    image: "/snow.jpg",
    price: 800,
    category: "雪布",
  },
]

export default function SnowTarpPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <InquiryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/snow.jpg" alt="Snow Tarp" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <h1 className="text-5xl font-bold uppercase text-foreground">Snow Tarp</h1>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">  
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}
          <Link href="/products" className="text-slate-700 hover:text-primary">Products</Link>
           {" > "}
          <Link href="/products/snow-tarp" className="text-slate-700 hover:text-primary">Snow Tarp</Link>
        </div>
      </section>

      {/* What are Snow Tarp */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">What are Snow Tarp?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Snow tarps are specialized protective covers designed to withstand extreme cold temperatures, heavy snow
            loads, and harsh winter conditions. These tarps are engineered with enhanced durability and cold-resistant
            materials to protect equipment, construction sites, and outdoor storage during winter months.
          </p>
        </div>
      </section>

      {/* Types of Snow Tarp */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-foreground">Types of Snow Tarp</h2>
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

      {/* Benefits of Snow Tarp */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Benefits of Snow Tarp</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Using Holy Matrix snow tarps comes with a lot of advantages. These advantages include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Excellent cold resistance that prevents cracking and damage in freezing temperatures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High load-bearing capacity to withstand heavy snow accumulation without tearing or deformation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Waterproof and moisture-resistant design that prevents water penetration and ice formation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Durable material construction that maintains flexibility even in extreme cold conditions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    UV protection that prevents material degradation from sun exposure during winter months.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Easy installation and removal, making it convenient for seasonal protection needs.
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
              <Image src="/snow.jpg" alt="Snow Tarp benefits" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>

      {/* Features of Snow Tarp */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image src="/snow.jpg" alt="Snow Tarp features" fill className="object-cover" sizes="600px" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-foreground">Features of Snow Tarp</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                The key features present in the Holy Matrix snow tarpaulin include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Cold crack resistance that prevents material failure in sub-zero temperatures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Reinforced edges and grommets for secure fastening and enhanced load distribution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Waterproof seams and construction that prevent moisture penetration and ice buildup.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High tensile strength material that resists tearing under heavy snow loads.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    UV stabilization treatment that protects against sun damage during winter exposure.
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

      {/* Where to use Snow Tarp */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Where to use Snow Tarp</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Holy Matrix snow tarps are designed with different sizes and weights offering plenty of options for
                varying winter applications. The protective covers are engineered with many safety features making it
                ideal for cold weather protection. They can be used for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Construction sites for protecting equipment and materials during winter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Outdoor storage protection for vehicles, machinery, and supplies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Swimming pool covers during winter months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Agricultural equipment and crop protection in cold climates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Temporary shelter and structure protection in winter conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Heavy-duty winter protection for industrial and commercial applications</span>
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
              <Image src="/snow.jpg" alt="Snow Tarp applications" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
