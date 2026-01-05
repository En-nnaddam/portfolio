import { Card } from "@heroui/react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute -top-40 -left-40 w-150 h-150 blur-[120px] bg-cyan-400/30 rounded-full"></div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-default-500 max-w-xl mx-auto">
            A short introduction about who I am and what I do.
          </p>
        </div>

        <Card>
          <Card.Content className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm <strong>Abdessamad Ennaddam</strong>, a full-stack web
              developer focused on building modern, scalable, and user-friendly
              web applications.
            </p>

            <p>
              I work mainly with <strong>React</strong>,{" "}
              <strong>Tailwind CSS</strong>, and modern backend tools like{" "}
              <strong>Node.js</strong> and <strong>MongoDB</strong>. I enjoy
              turning complex ideas into simple and performant digital
              experiences.
            </p>

            <p>
              I'm constantly learning, improving my skills, and working on
              projects that challenge me both technically and creatively.
            </p>
          </Card.Content>
        </Card>
      </div>
    </section>
  );
}
