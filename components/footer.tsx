"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Footer() {
  return (
    <footer className="bg-secondary py-12 shadow-lg">
      <div className="container-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection direction="up">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-primary">
                <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="object-cover" />
              </div>
              <span className="font-bold text-xl shadow-text">Elito.</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              .NET Developer & Cybersecurity Specialist with expertise in building secure, scalable web and IoT
              applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hover-scale shadow-sm"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hover-scale shadow-sm"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hover-scale shadow-sm"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <h3 className="text-xl font-bold mb-6 shadow-text">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <h3 className="text-xl font-bold mb-6 shadow-text">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover-lift">
                <Phone className="h-5 w-5 text-primary mt-1 animate-pulse-slow shadow-primary" />
                <span className="text-muted-foreground">Contact via form</span>
              </li>
              <li className="flex items-start gap-3 hover-lift">
                <Mail className="h-5 w-5 text-primary mt-1 animate-pulse-slow shadow-primary" />
                <span className="text-muted-foreground">Contact via form</span>
              </li>
              <li className="flex items-start gap-3 hover-lift">
                <MapPin className="h-5 w-5 text-primary mt-1 animate-pulse-slow shadow-primary" />
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </AnimatedSection>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Md Hafizur Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
