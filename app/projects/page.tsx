import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="container-margin py-12">
      <h1 className="text-4xl font-bold mb-8 shadow-text">Projects</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="iot">IoT</TabsTrigger>
          <TabsTrigger value="security">Cybersecurity</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <ProjectCard
            title="IoT Device Management System"
            description="A smart device control platform with AI-enabled planning for automation."
            technologies={[
              "ASP.NET Core",
              "APIs",
              "gRPC",
              "RabbitMQ",
              "JWT",
              "MongoDB",
              "MySQL",
              "MQTT",
              "Microservice",
            ]}
            features={[
              "MAC authentication",
              "Group/device/user management",
              "Real-time device status",
              "Automation scheduler",
            ]}
            impact="Laid the foundation for smart home/office automation; boosted energy efficiency and user convenience."
            category="web iot"
          />

          <ProjectCard
            title="TechCiph Business – Website"
            description="Developed a dynamic cybersecurity site using MongoDB and .NET Core MVC."
            technologies={[".NET Core MVC", "MongoDB", "Bootstrap"]}
            features={["Services module", "Blog system", "Feedback collection", "Testimonials", "Admin panel"]}
            category="web"
          />

          <ProjectCard
            title="Travel Agency – Website"
            description="Designed and developed a dynamic website for a travel agency."
            technologies={["ASP.NET Core MVC", "MongoDB", "Bootstrap 5"]}
            features={["Package browsing", "Online booking", "Inquiry form", "Admin management"]}
            category="web"
          />

          <ProjectCard
            title="User Activity Monitoring and Geo-Location Tracking System"
            description="Tracks user login/logout activities with IP-based location data."
            technologies={["ASP.NET Core MVC", "MongoDB", "GeoIP API Integration"]}
            features={[
              "Login/Logout Tracking",
              "Action and Event Logs",
              "Geo-location Capture based on IP",
              "Admin Dashboard",
            ]}
            impact="Improved platform security, user behavior analysis, and enabled smarter business decisions by understanding user locations and actions."
            category="web security"
          />

          <ProjectCard
            title="Cybersecurity Challenges & Ethical Hacking"
            description="Completed multiple TryHackMe rooms and CTF challenges."
            technologies={["Metasploit", "Burp Suite", "Kali Linux"]}
            features={[
              "Network security",
              "Vulnerability assessment",
              "Penetration testing",
              "Exploiting misconfigurations",
              "Privilege escalation",
              "Web application security",
            ]}
            category="security"
          />

          <ProjectCard
            title="IoT-Based Home Automation System"
            description="Built a complete smart home system using microcontrollers, sensors, and web APIs/MQTT."
            technologies={["Microcontrollers", "Sensors", "Web APIs", "MQTT"]}
            features={[
              "Secure remote control via RESTful API",
              "Mobile integration",
              "AI-powered automation",
              "Secure communication",
              "Device authentication",
            ]}
            category="iot"
          />
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          {/* Web development projects will be filtered here */}
        </TabsContent>

        <TabsContent value="iot" className="space-y-8">
          {/* IoT projects will be filtered here */}
        </TabsContent>

        <TabsContent value="security" className="space-y-8">
          {/* Security projects will be filtered here */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
