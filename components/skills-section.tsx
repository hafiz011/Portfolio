"use client"

import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"
import { CounterUp } from "./counter-up"
import { useState, useEffect } from "react"

export function SkillsSection() {
  const [skillValues, setSkillValues] = useState<Record<string, number>>({})
  const [animationStarted, setAnimationStarted] = useState(false)

  const skillCategories = [
    {
      name: "Development",
      skills: [
        { name: "C#", level: 90 },
        { name: ".NET Core", level: 85 },
        { name: "ASP.NET Core MVC", level: 85 },
        { name: "Entity Framework", level: 80 },
      ],
    },
    {
      name: "Databases & Infrastructure",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Azure", level: 70 },
      ],
    },
  ]

  // Animate progress bars when they come into view
  useEffect(() => {
    const allSkills: Record<string, number> = {}

    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        allSkills[skill.name] = 0
      })
    })

    setSkillValues(allSkills)

    // Small delay before starting animations
    const timer = setTimeout(() => {
      setAnimationStarted(true)
      skillCategories.forEach((category) => {
        category.skills.forEach((skill, index) => {
          setTimeout(() => {
            setSkillValues((prev) => ({
              ...prev,
              [skill.name]: skill.level,
            }))
          }, index * 200)
        })
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-secondary" id="skills">
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            My Skills
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            My Expertise
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.name}
              className="space-y-8 p-6 rounded-lg shadow-card bg-background/5"
              delay={categoryIndex * 200}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <h3 className="text-2xl font-bold shadow-text">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>
                        {animationStarted ? (
                          <CounterUp end={skill.level} suffix="%" duration={1500} delay={index * 200} />
                        ) : (
                          "0%"
                        )}
                      </span>
                    </div>
                    <Progress
                      value={skillValues[skill.name] || 0}
                      className="h-2 bg-background transition-all duration-1000 ease-out shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
