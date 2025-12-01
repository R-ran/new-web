'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/product-card"
import { InquiryDialog } from "@/components/inquiry-dialog"

const productTypes = [
  {
    id: "other-tarpaulin-1",
    name: "PVC Tarpaulin Roll",
    description: "High-quality PVC tarpaulin available in rolls for various applications. These tarps are ideal for tents, truck covers, and shading applications with excellent durability and weather resistance.",
    image: "/other.png",
    price: 1500,
    category: "其他帆布",
  },
  {
    id: "other-tarpaulin-2",
    name: "Vinyl Coated Tarpaulin",
    description: "Vinyl coated tarps with enhanced strength and durability. Features increased resistance to heavy abrasion, UV rays, oil, mildew, and water. Suitable for construction, agricultural, and industrial applications.",
    image: "/other.png",
    price: 1200,
    category: "其他帆布",
  },
  {
    id: "other-tarpaulin-3",
    name: "Waterproof Tarpaulin",
    description: "Advanced waterproof tarps utilizing heat-sealed seams for complete waterproof protection. This property makes these tarps ideal for construction and industrial applications where complete moisture protection is required.",
    image: "/other.png",
    price: 800,
    category: "其他帆布",
  },
  {
    id: "other-tarpaulin-4",
    name: "Heavy Duty Industrial Tarp",
    description: "The highest-quality industrial tarps in terms of strength and durability. Heavy-duty tarps are designed for industrial applications involving heavy loads and contact with hazardous materials.",
    image: "/other.png",
    price: 500,
    category: "其他帆布",
  },
]

export default function OtherTarpaulinPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <InquiryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/other.png" alt="Other Tarpaulin" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <h1 className="text-5xl font-bold uppercase text-foregroun">Other Tarpaulin</h1>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">  
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}
          <Link href="/products" className="text-slate-700 hover:text-primary">Products</Link>
           {" > "}
          <Link href="/products/other-tarpaulin" className="text-slate-700 hover:text-primary">Other Tarpaulin</Link>
        </div>
      </section>

      {/* What are Other Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">What are Other Tarpaulin?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Other tarpaulins include various types of protective covers made from materials such as PVC, vinyl, and
            other synthetic materials. These tarps are designed to provide superior protection for goods and spaces,
            featuring enhanced properties like waterproofing, UV resistance, and chemical resistance for diverse
            industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* Types of Other Tarpaulin */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-foreground">Types of Other Tarpaulin</h2>
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

      {/* Benefits of Other Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Benefits of Other Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Using Holy Matrix other tarpaulins comes with a lot of advantages. These advantages include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Superior waterproof properties that provide complete protection from moisture and water damage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Enhanced durability and strength that withstands heavy loads and harsh environmental conditions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Excellent UV resistance that prevents material degradation and extends service life.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Chemical and oil resistance making them suitable for industrial and hazardous applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Versatile design available in various sizes, weights, and materials for different applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Low maintenance requirements and easy cleaning for long-term use and cost-effectiveness.
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
              <Image src="/other.png" alt="Other Tarpaulin benefits" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>

      {/* Features of Other Tarpaulin */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image src="/other.png" alt="Other Tarpaulin features" fill className="object-cover" sizes="600px" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-foreground">Features of Other Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                The key features present in the Holy Matrix other tarpaulin include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Fully waterproof seams and construction that prevent moisture absorption and water penetration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Reinforced fabric scrim that strengthens the cover making it resistant to wear, tear, and
                    punctures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Safety features including UV protection and cold crack resistance that offer additional protection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Increased resistance to acid, oil, mildew, and chemicals for industrial applications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Flame-retardant treatment available for specific categories requiring fire safety compliance.
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

      {/* Where to use Other Tarpaulin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Where to use Other Tarpaulin</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Holy Matrix other tarpaulins are designed with different sizes and weights offering plenty of options
                for varying applications. The protective covers are fashioned and fortified with many safety features
                making it ideal for high-risk and hazardous duties. They can be used for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Billboards and advertising displays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Chemical plants and industrial facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Construction for protecting equipment, supplies, and heavy loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Covering trucks and securing goods being transported</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Acting as a protective surface in hazardous environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Tent construction, shading, and temporary shelter applications</span>
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
              <Image src="/other.png" alt="Other Tarpaulin applications" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
