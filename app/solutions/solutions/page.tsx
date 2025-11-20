import Link from "next/link"

export const metadata = {
  title: "Solutions Portfolio - Jinko Solar",
  description: "Explore Jinko Solar energy solutions tailored for utility, commercial, and residential projects.",
}

export default function SolutionsOverviewPage() {
  return (
    <main className="bg-white">
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold uppercase">Solutions Overview</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80">
            Integrated systems combining modules, storage, and digital services to accelerate the clean energy
            transition.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-muted/50 p-6">
              <h2 className="text-lg font-semibold text-foreground">Utility-Scale</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Bankable supply for gigawatt parks with advanced tracker compatibility, digital O&M, and energy storage
                integration.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-6">
              <h2 className="text-lg font-semibold text-foreground">Commercial & Industrial</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rooftop and carport systems tuned for high self-consumption, bundled with monitoring and financing
                options.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-6">
              <h2 className="text-lg font-semibold text-foreground">Residential</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Premium all-black aesthetics, hybrid inverters, and battery packages for seamless home energy management.
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-6">
              <h2 className="text-lg font-semibold text-foreground">After-Sales Services</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Remote monitoring, predictive maintenance, and warranty management delivered by regional service hubs.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Discuss custom configurations with our solution architects:&nbsp;
            <Link href="/contact" className="text-primary underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}

