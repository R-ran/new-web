"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/context/cart-context"

type NavChild = {
  label: string
  href: string
}

type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)
  const { getItemCount } = useCart()
  const itemCount = getItemCount()

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" },
      {
        label: "Products",
        href: "/products",
        children: [
          { label: "Tarpaulin", href: "/products/pe-tarpaulin" },
          { label: "Netting", href: "/products/netting" },
          { label: "Snow Tarp", href: "/products/snow-tarp" },
          { label: "Other Tarpaulin", href: "/products/other-tarpaulin" },
          { label: "Jumbo Bag", href: "/products/jumbo-bag" },
        ],
      },
      {
        label: "About Us", href: "/about",
      },
      {
        label: "Solutions",
        href: "/solutions",
        children: [{ label: "Solutions", href: "/solutions/solutions" }],
      },
      {
        label: "News", href: "/news",
      },
      { label: "Contact Us", href: "/contact" },
    ],
    []
  )

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label))
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setActiveMobileDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-bold text-foreground">Company Name</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative flex items-center">
                <Link
                  href={item.href}
                  className="flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full z-20 mt-1 w-52 origin-top scale-95 rounded-md border bg-white p-3 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/cart" className="relative flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
            <ShoppingBag className="h-5 w-5" />
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="rounded p-1 transition-colors hover:text-primary"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeMobileDropdown === item.label ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && activeMobileDropdown === item.label && (
                  <div className="mt-2 flex flex-col gap-2 border-l pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t pt-4">
              <Link
                href="/cart"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={closeMobileMenu}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
                {itemCount > 0 && (
                  <span className="h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
