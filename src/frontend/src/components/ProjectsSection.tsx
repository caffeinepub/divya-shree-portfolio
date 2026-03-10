import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Student Task Management System",
    description:
      "A modular console-based task management system built using Object-Oriented Programming principles. Features persistent storage via file handling, efficient data structures for task organization, and structured error handling for high reliability.",
    techStack: ["Python", "OOP", "File Handling", "Data Structures"],
  },
  {
    id: 2,
    number: "02",
    title: "Responsive Portfolio Website",
    description:
      "A fully responsive portfolio website compatible across mobile and desktop platforms. Built with semantic HTML5 and structured CSS3 for clean, accessible UI. Follows frontend development best practices and accessibility standards.",
    techStack: ["HTML5", "CSS3", "Responsive Design"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 section-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader index="02" title="Selected Work" subtitle="Projects" />

        <div className="mt-16 space-y-6 max-w-4xl">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group flex gap-8 items-start border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-all duration-300"
            >
              {/* Number */}
              <span className="font-mono text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 leading-none pt-1 select-none min-w-[3rem]">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs px-2.5 py-0.5 bg-muted/60 text-muted-foreground border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
