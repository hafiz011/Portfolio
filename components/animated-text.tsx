"use client"

import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export function AnimatedText({ children, className, delay = 0, as: Component = "p" }: AnimatedTextProps) {
  const { ref, isVisible } = useAnimationOnScroll<HTMLDivElement>()

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-5",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
