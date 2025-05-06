"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "IoT Device Management System",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects",
    },
    {
      title: "User Activity Monitoring System",
      category: "Security",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects",
    },
    {
      title: "IoT-Based Home Automation",
      category: "IoT",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects",
    },
    {
      title: "Travel Agency Website",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects",
    },
  ]

  return (
    <section className="py-20" id="projects">
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            Portfolio
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            Recent Work
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100} direction={index % 2 === 0 ? "up" : "down"}>
              <div className="group relative overflow-hidden rounded-lg hover-lift shadow-card-hover">
                <div className="aspect-square relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                    <span className="text-primary text-sm mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 shadow-text">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200 shadow-text">
                      {project.title}
                    </h3>
                    <Link
                      href={project.link}
                      className="text-white hover:text-primary transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-300 shadow-primary"
                    >
                      <ArrowRight className="h-6 w-6 animate-pulse-slow" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <AnimatedSection delay={400}>
            <Link href="/projects" className="btn-primary hover-lift shadow-primary-hover">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
