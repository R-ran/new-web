'use client'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/products/product-card"
import { InquiryDialog } from "@/components/inquiry-dialog"
import Link from "next/link"

const productTypes = [
  {
    id: "jumbo-bag-1",
    name: "Standard Jumbo Bag 1 Ton",
    description: "Heavy-duty jumbo bags designed for bulk material storage and transportation. These bags feature high load capacity, excellent durability, and secure closure systems for safe handling of various materials.",
    image: "/jumbo-bag.png",
    price: 3000,
    category: "大袋",
  },
  {
    id: "jumbo-bag-2",
    name: "Food Grade Jumbo Bag",
    description: "Food-grade certified jumbo bags suitable for storing and transporting food products, grains, and agricultural materials. Features safe, non-toxic materials and excellent protection properties.",
    image: "/jumbo-bag.png",
    price: 2500,
    category: "大袋",
  },
  {
    id: "jumbo-bag-3",
    name: "UV Resistant Jumbo Bag",
    description: "UV-resistant jumbo bags designed for outdoor storage applications. Features enhanced UV protection that prevents material degradation and extends service life in exposed conditions.",
    image: "/jumbo-bag.png",
    price: 2000,
    category: "大袋",
  },
  {
    id: "jumbo-bag-4",
    name: "Waterproof Jumbo Bag",
    description: "Waterproof jumbo bags with sealed construction that provides complete moisture protection. Ideal for storing materials that require protection from water, humidity, and environmental moisture.",
    image: "/jumbo-bag.png",
    price: 1000,
    category: "大袋",
  },
]

export default function JumboBagPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <InquiryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/jumbo-bag.png" alt="Jumbo Bag" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <h1 className="text-5xl font-bold uppercase text-foregroun">Jumbo Bag</h1>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">  
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}
          <Link href="/products" className="text-slate-700 hover:text-primary">Products</Link>
           {" > "}
          <Link href="/products/jumbo-bag" className="text-slate-700 hover:text-primary">Jumbo Bag</Link>
        </div>
      </section>

      {/* What are Jumbo Bag */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-4xl font-bold text-foreground">What are Jumbo Bag?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            Jumbo bags, also known as FIBC (Flexible Intermediate Bulk Container) bags, are large flexible containers
            designed for storing and transporting bulk materials. These bags are made from woven polypropylene fabric
            and are engineered to handle heavy loads while providing excellent protection and ease of handling for
            various industrial and commercial applications.
          </p>
        </div>
      </section>

      {/* Types of Jumbo Bag */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-foreground">Types of Jumbo Bag</h2>
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

      {/* Benefits of Jumbo Bag */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Benefits of Jumbo Bag</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Using Holy Matrix jumbo bags comes with a lot of advantages. These advantages include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High load capacity that can handle weights from 500kg to 2000kg, reducing handling and
                    transportation costs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Cost-effective solution for bulk material storage and transportation compared to traditional
                    containers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Space-efficient design that allows for easy stacking and storage when empty or filled.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Excellent protection against moisture, contamination, and environmental factors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Easy handling with lifting loops and secure closure systems for safe transportation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Reusable design that can be used multiple times, making it environmentally friendly and
                    economical.
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
              <Image src="/jumbo-bag.png" alt="Jumbo Bag benefits" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>

      {/* Features of Jumbo Bag */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image src="/jumbo-bag.png" alt="Jumbo Bag features" fill className="object-cover" sizes="600px" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-foreground">Features of Jumbo Bag</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                The key features present in the Holy Matrix jumbo bags include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    High-strength woven polypropylene fabric that provides excellent durability and load-bearing
                    capacity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Reinforced lifting loops and bottom for safe handling and secure load distribution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    UV protection treatment that prevents material degradation from sun exposure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Waterproof and moisture-resistant options available for materials requiring complete protection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Food-grade certified options available for safe storage and transportation of food products.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    Customizable sizes, weights, and closure systems to meet specific application requirements.
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

      {/* Where to use Jumbo Bag */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-foreground">Where to use Jumbo Bag</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Holy Matrix jumbo bags are designed with different specifications offering plenty of options for
                varying applications. The bags are engineered with many safety features making it ideal for bulk
                material handling. They can be used for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Bulk material storage in warehouses and distribution centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Transportation of grains, seeds, and agricultural products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Chemical and industrial material handling and storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Construction material storage including sand, gravel, and cement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Food product storage and transportation in food-grade bags</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>Mining and mineral product handling and storage</span>
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
              <Image src="/jumbo-bag.png" alt="Jumbo Bag applications" fill className="object-cover" sizes="600px" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
