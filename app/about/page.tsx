import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About Us - Jinko Solar",
  description: "Learn about Jinko Solar, one of the world's largest solar panel manufacturers",
}

export default function AboutPage() {
  return (
    <main>
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
          <h1 className="mb-4 text-5xl font-bold text-balance">About us</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-300 text-balance">
            Learn about Jinko Solar, one of the world's largest solar panel manufacturers
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-4 text-xs text-slate-500">
          Current position:{" "}
          <Link href="/" className="text-slate-700 hover:text-primary">
            Home
          </Link>
          {" > "}
          <Link href="/about" className="text-slate-700 hover:text-primary">
            About us
          </Link> 
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground">
            Welcome to Holy Matrix - Leading supplier of fabric structures and tarpaulins
          </h2>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Company Facts</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Holy Matrix is a leading supplier of fabric structures and tarpaulins, serving customers in the
                  building and industrial sector. Our modern product range is designed for various climates and
                  applications, providing reliable storage solutions and protective coverings.
                </p>
                <p>
                  We focus on quality, safety, and environmental responsibility in all our products. Our international
                  concept for logistics and acquisition ensures that we can meet the diverse needs of our global
                  customer base.
                </p>
                <p>
                  With a history dating back to the mid-last century, we have built a reputation for functional, durable
                  fabric structures and tarpaulins that stand the test of time.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ai-technology-quality-control.jpg"
                alt="Fabric structure"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Certifications</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Holy Matrix is certified in accordance with international quality standards. We are a certified
                  manufacturer issuing performance declarations and CE marks for our products.
                </p>
                <p>
                  Our commitment to quality assurance ensures that all our fabric structures and tarpaulins meet the
                  highest standards for safety, durability, and performance. We maintain rigorous quality control
                  processes throughout our manufacturing and supply chain.
                </p>
                <p>
                  The requirement for CE marking became mandatory for our product categories, and we ensure full
                  compliance with all relevant regulations and standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex h-32 w-32 items-center justify-center rounded-lg border-2 border-border bg-white p-6 shadow-md">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">CE</div>
                  <div className="mt-1 text-xs text-muted-foreground">Certified</div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-white p-6 shadow-md">
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">ISO Certified</div>
                  <div className="mt-1 text-sm text-muted-foreground">Quality Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">History</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Holy Matrix has a long-standing commitment to providing functional, durable fabric structures and
                  tarpaulins. Our company history reflects decades of experience in the industry, with a focus on
                  innovation and quality.
                </p>
                <p>
                  Over the years, we have completed thousands of projects, serving customers across various industries
                  including construction, agriculture, logistics, and industrial applications. Our expertise in fabric
                  structures and protective coverings has made us a trusted partner for businesses worldwide.
                </p>
                <p>
                  With more than 50 years of combined experience and over 17,000 completed assignments, we continue to
                  build on our legacy of excellence, adapting to new technologies and market demands while maintaining
                  our core values of quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ai-technology-quality-control.jpg"
                alt="Company history"
                fill
                className="object-cover grayscale"
                sizes="600px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
