"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"
import { CounterUp } from "./counter-up"

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            About Me
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            Know Me More
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <h3 className="text-2xl font-bold mb-4 shadow-text">
              I'm <span className="text-primary">Md Hafizur Rahman</span>, a .NET Developer & Cybersecurity Specialist
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a passionate IT professional with expertise in <strong>.NET development</strong>, <strong>cybersecurity</strong>, and <strong>server administration</strong>. I specialize in building secure and scalable web and IoT solutions using <strong>ASP.NET Core</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong>, <strong>Microservices</strong>, and cloud platforms like <strong>AWS</strong> and <strong>Azure</strong>.
              </p>
              <p>
                With hands-on experience in development and IT operations, I bring a holistic approach to solving technology challenges. My background includes <strong>software engineering</strong>, <strong>ethical hacking</strong>, <strong>network security</strong>, and <strong>IoT hardware integration</strong>.
              </p>
              <p>
                I’ve worked across corporate IT support and engineering roles, handling everything from web platforms to <strong>PCBA-level repairs</strong>. I'm passionate about leveraging <strong>AI</strong> and <strong>automation</strong> to enhance efficiency, security, and user experience.
              </p>
              <p>
                I continuously improve my skills through platforms like <strong>TryHackMe</strong>, participating in <strong>CTF challenges</strong>, and researching emerging technologies.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/about" className="btn-primary hover-lift shadow-primary-hover">
                More About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-6">
            <AnimatedSection delay={100} direction="right">
              <Card className="bg-card hover:border-primary transition-colors hover-lift shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={2} suffix="+" />
                  </h4>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="right">
              <Card className="bg-card hover:border-primary transition-colors hover-lift shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={10} suffix="+" delay={200} />
                  </h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300} direction="right">
              <Card className="bg-card hover:border-primary transition-colors hover-lift shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={5} suffix="+" delay={400} />
                  </h4>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400} direction="right">
              <Card className="bg-card hover:border-primary transition-colors hover-lift shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={3} suffix="+" delay={600} />
                  </h4>
                  <p className="text-muted-foreground">Certifications</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
