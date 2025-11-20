import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, TrendingUp, Users, Award, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/placeholder.svg?height=600&width=1920&query=modern+solar+panel+manufacturing+facility)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl text-balance">
            Better Solar Solutions for Your Home
          </h1>
          <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto text-balance">
            High-efficiency solar panels with advanced technology. Save energy and reduce your electricity costs.
            Beautifully designed for your home.
          </p>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-balance">Recommended Products</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Fire Resistant Scaffold Sheeting",
                category: "PE Tarpaulin",
                application: "Construction",
                image: "/ai-technology-quality-control.jpg",
                href: "/products/pe-tarpaulin",
                label: "BEST SELLER",
              },
              {
                name: "Shade Net",
                category: "Netting",
                application: "Solar Farm, Greenhouse",
                image: "/shade.png",
                href: "/products/netting",
                label: "NEW ARRIVAL",
              },
              {
                name: "Heavy-Duty Snow Removal Tarp",
                category: "Snow Tarp",
                application: "Winter Protection",
                image: "/snow.jpg",
                href: "/products/snow-tarp",
                label: "POPULAR",
              },
              {
                name: "PVC Tarpaulin Roll",
                category: "Other Tarpaulin",
                application: "Tent, Truck, Shading",
                image: "/other.png",
                href: "/products/other-tarpaulin",
                label: "RELIABLE",
              },
              {
                name: "Jumbo Bag",
                category: "Jumbo Bag",
                application: "Bulk Material Storage",
                image: "/jumbo-bag.png",
                href: "/products/jumbo-bag",
                label: "EFFICIENT",
              },
              {
                name: "Flame Retardant Scaffold Sheeting",
                category: "PE Tarpaulin",
                application: "Construction, Transportation",
                image: "/ai-technology-quality-control.jpg",
                href: "/products/pe-tarpaulin",
                label: "PREMIUM",
              },
              {
                name: "Safety Net",
                category: "Netting",
                application: "Safety, Fencing",
                image: "/mesh.png",
                href: "/products/netting",
                label: "VALUE",
              },
              {
                name: "Scaffolding Tarpaulin",
                category: "PE Tarpaulin",
                application: "Construction, Humid areas",
                image: "/ai-technology-quality-control.jpg",
                href: "/products/pe-tarpaulin",
                label: "HIGH QUALITY",
              },
            ].map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute right-2 top-2 bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                      {product.label}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 font-bold text-lg">{product.name}</h3>
                    <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                      <p>Category: {product.category}</p>
                      <p>Application: {product.application}</p>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-balance">Jinko Solar Co., LTD.</h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                Founded in 2006, JinkoSolar is one of the world's largest and most innovative solar module
                manufacturers. We distribute our solar products and sell our solutions and services to a diversified
                international utility, commercial, and residential customer base worldwide.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <Card>
                  <CardContent className="p-4 flex items-start gap-3">
                    <Award className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-bold text-2xl">20GW+</div>
                      <div className="text-sm text-muted-foreground">Annual production</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-3">
                    <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-bold text-2xl">160+</div>
                      <div className="text-sm text-muted-foreground">Countries served</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More About Us
              </Button>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=600&width=800&query=large+scale+solar+farm+aerial+view)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-4xl font-bold text-balance">Our Technology</h2>
          <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
            Leading innovation in solar technology for maximum efficiency and reliability
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "High Efficiency",
                description:
                  "Advanced cell technology delivers industry-leading conversion efficiency up to 22.76%, maximizing energy output for your investment.",
              },
              {
                icon: Shield,
                title: "Superior Durability",
                description:
                  "Engineered to withstand extreme weather conditions with enhanced mechanical load resistance and superior corrosion protection.",
              },
              {
                icon: TrendingUp,
                title: "Smart Innovation",
                description:
                  "Incorporating the latest innovations including N-type technology and advanced junction designs for optimal performance.",
              },
            ].map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{tech.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=800&width=1000&query=solar+panels+installation+on+mountain)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-balance">Solutions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Residential Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make solar available for your home with our residential solar panels and complete home energy
                    systems. Reduce your energy bills and environmental impact.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Commercial & Industrial</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Powerful, cost-effective solar solutions for businesses. Our commercial systems are built for
                    performance, durability, and maximum ROI.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold">Utility-Scale Projects</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Large-scale solar solutions designed for utility companies and power producers. High power output
                    and proven reliability at massive scale.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Provide customers with the best service</h2>
          <p className="mb-12 text-muted-foreground max-w-2xl mx-auto">
            24/7 customer support and comprehensive after-sales service to ensure your satisfaction
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              {
                query: "customer+service+chat+conversation+mobile",
              },
              {
                query: "whatsapp+business+chat+interface",
              },
              {
                query: "customer+support+messaging+app",
              },
              {
                query: "wechat+business+customer+service",
              },
            ].map((item, index) => (
              <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-muted">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=600&width=450&query=${item.query})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              —— More About us
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              —— Call Us : +86 13327798649
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-balance">Our Partners</h2>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              {["LONGI", "JinkoSolar", "Trina Solar", "JA Solar", "Canadian Solar"].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="text-2xl font-bold text-muted-foreground">{partner}</div>
                </div>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=800&width=1000&query=massive+solar+panel+farm+field+aerial)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-balance">Latest News</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                image: "solar+panels+on+water+floating+farm",
                title: "Floating Solar Farm Project Completed",
                date: "March 15, 2025",
                excerpt:
                  "Our latest innovation in solar technology demonstrates the potential of floating solar installations...",
              },
              {
                image: "solar+panel+factory+production+line",
                title: "New Solar Panel Plant Announced",
                date: "March 10, 2025",
                excerpt:
                  "Expanding production capacity with state-of-the-art manufacturing facility to meet growing demand...",
              },
              {
                image: "solar+panels+sunset+golden+light",
                title: "Record-Breaking Efficiency Achieved",
                date: "March 5, 2025",
                excerpt:
                  "Our research team has achieved a new milestone in solar cell efficiency, pushing the boundaries...",
              },
            ].map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(/placeholder.svg?height=400&width=600&query=${news.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-muted-foreground">{news.date}</div>
                  <h3 className="mb-3 text-xl font-bold">{news.title}</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">{news.excerpt}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  )
}
