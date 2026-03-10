import { Briefcase, GraduationCap, Palette, Wrench } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const EXPERIENCES = [
  {
    id: 1,
    company: "College of Engineering, Tamil Nadu",
    role: "BE Computer Science Engineering",
    startYear: 2024,
    endYear: null,
    description:
      "Bachelor of Engineering in Computer Science and Engineering. CGPA: 8.5. Expected graduation 2028. Studying Data Structures, Algorithms, OOP, SDLC, and full-stack development concepts.",
    icon: GraduationCap,
  },
  {
    id: 2,
    company: "Hackathon Events",
    role: "Hackathon Participant",
    startYear: 2024,
    endYear: null,
    description:
      "Collaborated within agile teams to design and implement innovative software solutions under strict deadlines. Contributed to debugging, testing, and feature validation ensuring functional accuracy and efficiency.",
    icon: Briefcase,
  },
  {
    id: 3,
    company: "Robomiracles, Coimbatore",
    role: "Industrial Visit",
    startYear: 2024,
    endYear: 2024,
    description:
      "Gained exposure to robotics systems, embedded systems, automation workflows, and real-time hardware-software integration.",
    icon: Wrench,
  },
  {
    id: 4,
    company: "UI/UX Design Competitions",
    role: "UI/UX Designer",
    startYear: 2024,
    endYear: null,
    description:
      "Designed interactive wireframes and prototypes using Figma, applying user-centered design principles to create intuitive and accessible interfaces.",
    icon: Palette,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 section-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          index="03"
          title="Education & Experience"
          subtitle="Background & activities"
        />

        <div className="mt-16 max-w-3xl">
          <div className="relative pl-4">
            {/* Timeline vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/80 via-primary/30 to-transparent" />

            {EXPERIENCES.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative pl-10 pb-12 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />

                  {/* Year range chip */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Icon size={13} className="text-primary" />
                    <span className="font-mono text-xs text-primary tracking-wider">
                      {exp.startYear} — {exp.endYear ? exp.endYear : "Present"}
                    </span>
                  </div>

                  {/* Role + Company */}
                  <div className="mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Divider (not on last) */}
                  {i < EXPERIENCES.length - 1 && (
                    <div className="absolute left-0 bottom-0 right-0 h-px bg-border/40" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
