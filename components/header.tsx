"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Portfolio", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-header"
          : "bg-transparent",
      )}
    >
      <div className="container-margin flex h-20 items-center justify-between">
        <div className={`flex items-center gap-2 ${mounted ? "animate-slide-down" : "opacity-0"}`}>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-primary">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl shadow-text">Md Hafizur Rahman</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-6",
                pathname === item.path ? "active-nav-item" : "text-foreground",
                mounted ? `animate-slide-down animate-delay-${(index + 1) * 100}` : "opacity-0",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-4 ${mounted ? "animate-slide-down animate-delay-700" : "opacity-0"}`}>
          <Link href="/resume" className="hidden md:flex">
            <Button className="btn-primary hover-lift shadow-primary-hover">
              Resume
              <Download className="h-4 w-4" />
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="hover-scale shadow-sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="shadow-xl">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary p-2",
                      pathname === item.path ? "text-primary" : "text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/resume" className="mt-4">
                  <Button className="btn-primary w-full hover-lift shadow-primary-hover">
                    Resume
                    <Download className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
