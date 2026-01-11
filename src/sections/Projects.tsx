import { Card, Chip, Link, buttonVariants } from "@heroui/react";

const PROJECTS = [
  {
    title: "Real Estate Platform",
    description:
      "A full-stack real estate platform acting as a bridge between property owners, brokers, and clients. Includes role-based admin dashboard with permissions, authentication, and media storage.",
    tech: [
      "Next.js",
      "ShadCN UI",
      "TanStack Query",
      "MongoDB",
      "Firebase Auth & Storage",
    ],
    img: "realestate.webp",
    live: "https://properties-realestate.vercel.app/",
    github: "https://github.com/En-nnaddam/properties.realestate/",
  },
  {
    title: "Live Analytics Dashboard",
    description:
      "A live analytics platform that processes XML data every 15 minutes, stores it in a SQLite database, and displays real-time charts with advanced filtering.",
    tech: ["Next.js", "Shadcn ui", "SQLite", "Drizzle ORM", "XML Processing"],
    img: "analytics.webp",
    live: "#",
    github: "#",
  },
  {
    title: "PCFY - Tech Marketplace",
    description:
      "A full-stack tech marketplace selling electronics such as laptops, desktops, and gaming accessories with secure authentication and cloud storage.",
    tech: ["Next.js", "MongoDB", "AWS S3", "JWT Authentication"],
    img: "pcfy.webp",
    live: "https://pcfy.vercel.app",
    github: "https://github.com/En-nnaddam/pcfy",
  },
  {
    title: "AvakinDB",
    description:
      "A market and database platform that displays Avakin Life items with detailed information fetched from a live database. Backend and frontend are fully separated.",
    tech: ["React.js", "MongoDB", "Node.js", "Express"],
    img: "avakin.webp",
    live: "https://avakindb.com/",
    github: "https://github.com/En-nnaddam/lifeDtatabase-server",
  },
  {
    title: "IPTVspo",
    description:
      "A modern landing page for an IPTV service focused on performance, clean UI, and responsive design.",
    tech: ["Next.js", "Radix UI", "Tailwind CSS"],
    img: "iptvspo.webp",
    live: "https://iptvspo.com/",
    github: "https://github.com/En-nnaddam/iptv-spo",
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
                {project.img ? (
                  <img
                    src={project.img}
                    height={176}
                    width={312}
                    className="h-44"
                  />
                ) : (
                  <div className="h-44 bg-linear-to-br from-primary/20 to-cyan-400/20" />
                )}
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
