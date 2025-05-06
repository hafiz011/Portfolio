import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Lock, Server } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit">
                .NET Developer & Cybersecurity Specialist
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Md Hafizur Rahman</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Building secure, scalable web and IoT applications with expertise in .NET development, cybersecurity,
                and server infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button size="lg">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <Code className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-semibold">Web Development</h3>
                  <p className="text-sm text-muted-foreground">ASP.NET Core, MongoDB, React, and more</p>
                </div>
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <Server className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-semibold">Server Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">AWS, Azure, Docker, VMware ESXi</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <Lock className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="font-semibold">Cybersecurity</h3>
                  <p className="text-sm text-muted-foreground">
                    Network Security, Vulnerability Assessment, Ethical Hacking
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-6 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12 mb-4 text-primary"
                  >
                    <path d="M5 12a7 7 0 0 1 7-7" />
                    <path d="M12 5a7 7 0 1 1-7 7" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="m8 16 1.5-1.5" />
                    <path d="M14.5 9.5 16 8" />
                    <path d="m8 8 1.5 1.5" />
                    <path d="M14.5 14.5 16 16" />
                  </svg>
                  <h3 className="font-semibold">IoT Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Sensor Integration, Microcontrollers, Smart Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
