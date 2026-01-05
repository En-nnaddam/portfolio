import { Card, Chip } from "@heroui/react"

const SKILLS = {
  frontend: [
    "React",
    "Tailwind CSS",
    "HeroUI",
    "HTML",
    "CSS",
  ],
  backend: [
    "Node.js",
    "MongoDB",
    "Mongoose",
    "Firebase Auth",
    "REST APIs",
  ],
  tools: [
    "Git",
    "GitHub",
    "Vercel",
    "VS Code",
    "Zod",
    "React Query",
  ],
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-default-500 max-w-xl mx-auto">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <Card.Header>
              <Card.Title>Frontend</Card.Title>
              <Card.Description>
                UI & client-side development
              </Card.Description>
            </Card.Header>

            <Card.Content>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map((skill) => (
                  <Chip key={skill} variant="primary">
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Backend */}
          <Card>
            <Card.Header>
              <Card.Title>Backend</Card.Title>
              <Card.Description>
                Server & databases
              </Card.Description>
            </Card.Header>

            <Card.Content>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map((skill) => (
                  <Chip key={skill} variant="secondary">
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Tools */}
          <Card>
            <Card.Header>
              <Card.Title>Tools</Card.Title>
              <Card.Description>
                Workflow & productivity
              </Card.Description>
            </Card.Header>

            <Card.Content>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill) => (
                  <Chip key={skill} variant="soft">
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  )
}
