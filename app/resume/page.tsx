import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumePage() {
  return (
    <div className="container-margin py-12">
      <h1 className="text-4xl font-bold mb-2 shadow-text">Resume</h1>
      <p className="text-muted-foreground mb-8">My professional experience and qualifications</p>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Junior IT Officer (Support & Maintenance)</CardTitle>
              <CardDescription>Rupali Life Insurance Company Ltd | July 2023 – Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Maintained internal web applications and systems.</li>
                <li>Diagnosed and repaired PC hardware, motherboards, and related devices.</li>
                <li>Configured network services (FTP, DHCP, Proxy, VPN) and user permissions via AD.</li>
                <li>Managed VMware ESXi VMs and optimized LAN performance across departments.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Executive Engineer</CardTitle>
              <CardDescription>Carlcare Service | August 2021 – June 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Performed Level 1–4 PCBA repairs on mobile and electronic devices.</li>
                <li>Installed and maintained IT infrastructure and software systems.</li>
                <li>Handled escalated customer support cases and improved service workflows.</li>
                <li>Collaborated with client teams to refine hardware solutions.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>B.Sc. in Computer Science & Engineering</CardTitle>
              <CardDescription>Manarat International University | 2022 – 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Relevant Courses: Software Development, Cybersecurity, Database Systems</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Diploma in Electronics Engineering</CardTitle>
              <CardDescription>Ulipur Science and Technology Institute | 2015 – 2019</CardDescription>
            </CardHeader>
            <CardContent>
              <p>CGPA: 2.95/4.00</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Dakhil (SSC Equivalent)</CardTitle>
              <CardDescription>Balar Char Nasiria Fazil Madrasah | 2015</CardDescription>
            </CardHeader>
            <CardContent>
              <p>GPA: 4.06</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C#</Badge>
                    <Badge>C</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>.NET Core</Badge>
                    <Badge>ASP.NET Core MVC</Badge>
                    <Badge>Entity Framework</Badge>
                    <Badge>Identity</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Bootstrap</Badge>
                    <Badge>React</Badge>
                    <Badge>Responsive UI</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MongoDB</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Query Optimization</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">DevOps/Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Azure</Badge>
                    <Badge>Docker</Badge>
                    <Badge>systemd</Badge>
                    <Badge>Bash</Badge>
                    <Badge>VMware ESXi</Badge>
                    <Badge>Nginx</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Cybersecurity</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Network Security</Badge>
                    <Badge>Vulnerability Assessment</Badge>
                    <Badge>Identity Management</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Networking</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>FTP</Badge>
                    <Badge>DHCP</Badge>
                    <Badge>Proxy</Badge>
                    <Badge>SMTP</Badge>
                    <Badge>VPN</Badge>
                    <Badge>Tor</Badge>
                    <Badge>Active Directory</Badge>
                    <Badge>Firewall Configs</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">IoT & Hardware</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Sensor Integration</Badge>
                    <Badge>Microcontrollers</Badge>
                    <Badge>PCBA Repair (L1–L4)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Bengali</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Server Administration (Windows, Linux & AWS) – PencillBox Institute</li>
                <li>PCBA Repair (Level 1–4) – Dream Technology Institute</li>
                <li>Electrical & House Wiring – Ministry of Youth and Sports</li>
                <li>TryHackMe CTF Participation – Self-paced ethical hacking practice</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
