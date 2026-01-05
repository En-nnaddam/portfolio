import { buttonVariants, Chip, cn, Link } from "@heroui/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute -top-40 -right-40 w-150 h-150 bg-indigo-500/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl text-center px-6">
        <Chip className="mb-6" size="lg">Full-Stack Web Developer</Chip>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building{" "}
          <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            modern
          </span>{" "}
          &{" "}
          <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            scalable
          </span>{" "}
          web applications
        </h1>

        {/* Description */}
        <p className="text-default-500 text-lg md:text-xl mb-10">
          I design and develop high-performance web applications using Next.js,
          React, and modern backend technologies.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "h-10 no-underline"
            )}
          >
            Contact Me
          </Link>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "h-10"
            )}
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
