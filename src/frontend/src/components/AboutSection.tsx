import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useGetAbout } from "../hooks/useQueries";
import SectionHeader from "./SectionHeader";

const FALLBACK_SKILLS = [
  "Python",
  "C",
  "C++",
  "HTML5",
  "CSS3",
  "Data Structures",
  "Algorithms",
  "OOP",
  "SDLC",
  "Git",
  "GitHub",
  "SQL",
  "Figma",
  "VS Code",
];

const FALLBACK_BIO =
  "Highly motivated Computer Science Engineering student (CGPA: 8.5) with strong analytical, problem-solving, and programming skills. IELTS Score: 9.7/9 demonstrating exceptional English proficiency. Proficient in Python, C, and C++ with solid foundations in Data Structures, Algorithms, OOP, and SDLC. Experienced in building modular, scalable applications and responsive web interfaces. Seeking a Software Developer Internship to contribute to innovative engineering solutions.";

export default function AboutSection() {
  const { data, isLoading } = useGetAbout();

  const bio = data?.bio || FALLBACK_BIO;
  const skills = data?.skills?.length ? data.skills : FALLBACK_SKILLS;

  return (
    <section id="about" className="py-24 lg:py-32 section-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          index="01"
          title="About Me"
          subtitle="A little background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="pl-6">
                {isLoading ? (
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full bg-muted/60" />
                    <Skeleton className="h-4 w-5/6 bg-muted/60" />
                    <Skeleton className="h-4 w-4/5 bg-muted/60" />
                    <Skeleton className="h-4 w-full bg-muted/60" />
                    <Skeleton className="h-4 w-3/4 bg-muted/60" />
                  </div>
                ) : (
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {bio}
                  </p>
                )}
              </div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
            >
              {[
                { value: "8.5", label: "CGPA" },
                { value: "9.7", label: "IELTS Score" },
                { value: "2028", label: "Expected Grad" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-sm font-mono-custom text-primary mb-6 tracking-widest uppercase">
              Technologies & Tools
            </p>
            {isLoading ? (
              <div className="flex flex-wrap gap-3">
                {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => (
                  <Skeleton
                    key={k}
                    className="h-8 w-24 rounded-full bg-muted/60"
                  />
                ))}
              </div>
            ) : (
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                  hidden: {},
                }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge
                      className="px-4 py-1.5 text-sm font-medium bg-card border border-border hover:border-primary/60 hover:text-primary text-muted-foreground transition-all duration-200 cursor-default rounded-full glow-border-hover"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Availability block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 p-5 rounded-lg border border-primary/20 bg-primary/5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  Seeking Software Developer Internship
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                BE Computer Science Engineering student at College of
                Engineering, Tamil Nadu. Open to internship opportunities in
                software development and product engineering.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
