import { Card, Chip, Link, buttonVariants } from "@heroui/react";

const PROJECTS = [
  {
    title: "Event Platform",
    description:
      "A modern event platform with maps, authentication, and admin dashboard.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Role-based admin dashboard with authentication and analytics.",
    tech: ["HeroUI", "React", "Firebase Auth"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Builder",
    description:
      "A platform that allows users to create and publish portfolios easily.",
    tech: ["Next.js", "MongoDB", "Zod"],
    live: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-default-500 max-w-xl mx-auto">
            A selection of projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card key={project.title} className="transition hover:shadow-lg">
              {/* Image */}
              <Card.Content className="p-0">
                <div className="h-44 bg-linear-to-br from-primary/20 to-cyan-400/20" />
              </Card.Content>

              {/* Header */}
              <Card.Header>
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>{project.description}</Card.Description>
              </Card.Header>

              {/* Tech stack */}
              <Card.Content>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Chip key={t} size="sm">
                      {t}
                    </Chip>
                  ))}
                </div>
              </Card.Content>

              {/* Actions */}
              <Card.Footer className="flex gap-3">
                <Link
                  href={project.live}
                  className={buttonVariants({ size: "sm", variant: "primary" })}
                >
                  Live
                </Link>

                <Link
                  href={project.github}
                  className={buttonVariants({
                    size: "sm",
                    variant: "secondary",
                  })}
                >
                  GitHub
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
