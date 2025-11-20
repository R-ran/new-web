import Link from "next/link"
import Image from "next/image"
import { Mail, Facebook, ArrowUpRight, Phone, MapPin, Search, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#6B5238] text-white">
      {/* Search banner */}
            <div className="border-b border-white/10">
        <div className="container mx-auto flex flex-col items-start gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded border border-white/20">
              <Mail className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xl font-semibold uppercase tracking-wide">Sign Up Get Latest Updates</p>
              <p className="mt-1 text-xs text-white/70">
                We will continue to provide you with quality products and dedicated service
              </p>
            </div>
          </div>
          <form className="flex w-full max-w-sm items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm shadow-sm md:max-w-md">
            <Search className="h-4 w-4 text-white" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-transparent text-xs uppercase tracking-[0.3em] text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
                  className="rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-80"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-white/20 text-white">
                
              </div>
              <div>
                <p className="text-2xl font-bold uppercase tracking-wide">Company Name</p>
              </div>
            </div>
              <p className="text-xs leading-relaxed text-white/70">
              Company Profile
            </p>
            <div>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded bg-white/20 text-white transition-opacity hover:opacity-80"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded bg-white/20 text-white transition-opacity hover:opacity-80"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded bg-white/20 text-white transition-opacity hover:opacity-80"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "News", href: "/news" },
                { label: "Solutions", href: "/solutions" },
                { label: "Download", href: "/downloads" },
                { label: "About us", href: "/about" },
                { label: "Contact us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                    <Link href={item.href} className="group flex items-center gap-3 text-white/80 hover:text-white">
                    <span className="h-2 w-2 rounded-sm bg-white/50 transition-transform group-hover:scale-125" />
                    <span className="uppercase tracking-wide text-white/70 group-hover:text-white">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide">Contact</h3>
            <ul className="space-y-4 text-xs text-white/70">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Tel</p>
                  <p className="text-xs font-medium text-white">+86 133 xxx xxxx</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Email</p>
                  <p className="text-xs font-medium text-white">info@companyname.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Address</p>
                  <p className="text-xs font-medium text-white">
                    Company Address
                    <br />
                    Company Address,
                    <br />
                    Company City, Country
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end">
              <a
                href="#top"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-opacity hover:opacity-80"
                aria-label="Back to top"
              >
                <ArrowUpRight className="h-5 w-5 rotate-45" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-[10px] uppercase tracking-[0.5em] text-white/60">
          Copyright 2025 © Company Names
        </div>
      </div>
    </footer>
  )
}
