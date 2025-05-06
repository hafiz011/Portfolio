"use client"

import { useEffect, useState, useRef } from "react"
import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  title: string
  prefix?: string
  suffix?: string
  duration?: number
  delay?: number
  className?: string
}

export function AnimatedCounter({
  value,
  title,
  prefix = "",
  suffix = "",
  duration = 2000,
  delay = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useAnimationOnScroll<HTMLDivElement>()
  const countingDone = useRef(false)

  useEffect(() => {
    if (!isVisible || countingDone.current) return

    let startTime: number | null = null
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * value)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      } else {
        countingDone.current = true
      }
    }

    // Add delay before starting animation
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(countUp)
    }, delay)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timer)
    }
  }, [isVisible, value, duration, delay])

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground">{title}</p>
    </div>
  )
}
