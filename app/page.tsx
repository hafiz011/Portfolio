"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, ArrowRightIcon } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const slides = [
    {
      title: "Md Hafizur Rahman",
      subtitle: "Hello,",
      role: ".NET Developer",
      description:
        "Enthusiastic and versatile IT professional with proven expertise in .NET development, cybersecurity, and server infrastructure.",
      image: "/slide-1.jpg?height=800&width=600",
    },
    {
      title: "Md Hafizur Rahman",
      subtitle: "Welcome,",
      role: "Cybersecurity Specialist",
      description:
        "Skilled in building secure, scalable web and IoT applications using .NET Core, MongoDB, and cloud platforms.",
      image: "/slide-2.jpg?height=800&width=600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const currentSlideData = slides[currentSlide]

  return (
    <>
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-8 z-10 -translate-y-1/2">
          <button onClick={prevSlide} className="slide-nav-btn hover-scale shadow-card-hover">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-8 z-10 -translate-y-1/2">
          <button onClick={nextSlide} className="slide-nav-btn hover-scale shadow-card-hover">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="container-margin grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <h2
              className={`section-subtitle shadow-text ${isLoaded ? "animate-slide-down animate-delay-100" : "opacity-0"}`}
            >
              {currentSlideData.subtitle}
            </h2>
            <h1
              className={`section-title shadow-text-lg ${isLoaded ? "animate-slide-up animate-delay-200" : "opacity-0"}`}
            >
              I Am {currentSlideData.title}.
            </h1>
            <p
              className={`text-xl text-primary font-medium shadow-text ${isLoaded ? "animate-slide-up animate-delay-300" : "opacity-0"}`}
            >
              {currentSlideData.role}
            </p>
            <p
              className={`text-muted-foreground max-w-lg ${isLoaded ? "animate-slide-up animate-delay-400" : "opacity-0"}`}
            >
              {currentSlideData.description}
            </p>
            <div className={`pt-4 ${isLoaded ? "animate-slide-up animate-delay-500" : "opacity-0"}`}>
              <Link href="/contact" className="btn-primary hover-lift shadow-primary-hover">
                Hire Me
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div
            className={`hidden lg:block relative h-[80vh] z-0 ${isLoaded ? "animate-fade-in animate-delay-300" : "opacity-0"}`}
          >
            <div className="absolute inset-0 shadow-xl rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
                <img
                  src={currentSlideData.image || "/placeholder.svg"}
                  alt="Hero"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjects />
    </>
  )
}
