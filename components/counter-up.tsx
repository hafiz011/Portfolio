"use client"

import { useEffect, useState, useRef } from "react"
import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll"

interface CounterUpProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CounterUp({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CounterUpProps) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useAnimationOnScroll<HTMLSpanElement>()
  const countingDone = useRef(false)

  useEffect(() => {
    if (!isVisible || countingDone.current) return

    let startTime: number | null = null
    let animationFrame: number

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)

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
  }, [isVisible, end, duration, delay])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
