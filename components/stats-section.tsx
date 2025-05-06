"use client"

import { AnimatedCounter } from "./animated-counter"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"

export function StatsSection() {
  const stats = [
    { value: 2, title: "Years of Experience", suffix: "+" },
    { value: 10, title: "Projects Completed", suffix: "+" },
    { value: 5, title: "Technologies Mastered", suffix: "+" },
    { value: 3, title: "Certifications", suffix: "+" },
  ]

  return (
    <section className="py-16 bg-secondary">
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            My Numbers
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            Achievement Counts
          </AnimatedText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="p-6 rounded-lg bg-background/5 shadow-card-hover hover-lift">
                <AnimatedCounter
                  value={stat.value}
                  title={stat.title}
                  suffix={stat.suffix}
                  delay={index * 200}
                  className="shadow-text"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
