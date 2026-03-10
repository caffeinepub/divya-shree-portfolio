import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const WORDS = ["CS Engineering Student", "Python Developer", "Problem Solver"];

export default function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 gradient-mesh" />
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.82 0.18 195) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.82 0.18 195) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-24 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono-custom font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-none mb-4"
        >
          Harshini
          <span className="text-primary text-primary-glow"> S</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {WORDS.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                {word}
              </span>
              {i < WORDS.length - 1 && (
                <span className="text-primary text-xl font-bold">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 font-mono-custom"
        >
          &lt; Seeking Software Developer Internship /&gt;
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="outline"
            size="lg"
            data-ocid="hero.primary_button"
            onClick={() => {
              const resumeContent = `HARSHINI S
Madurai, Tamil Nadu
Email: harshiniswrok@gmail.com | Phone: +91-9445686370
LinkedIn: linkedin.com/in/harshini-s | GitHub: github.com/harshini-s

PROFESSIONAL SUMMARY
Highly motivated Computer Science Engineering student (CGPA: 8.5) with strong analytical, problem-solving, and programming skills. IELTS Score: 9.7/9 demonstrating exceptional English proficiency. Proficient in Python, C, and C++ with solid foundations in Data Structures, Algorithms, Object-Oriented Programming, and Software Development Life Cycle (SDLC). Experienced in building modular, scalable applications and responsive web interfaces. Adept at debugging, code optimization, and collaborative development using Git. Seeking a Software Developer Internship to contribute to innovative engineering solutions and product development.

TECHNICAL SKILLS
Programming Languages: Python, C, C++
Core Computer Science: Data Structures (Arrays, Linked Lists, Stacks, Queues), Algorithms (Searching, Sorting), OOP, Time & Space Complexity
Software Development: SDLC, Requirement Analysis, Debugging, Code Optimization, Modular Programming
Web Technologies: HTML5, CSS3, Responsive Web Design
Version Control: Git, GitHub (Branching, Commit Management, Repository Handling)
Tools: VS Code, Figma, MS Office
Database Fundamentals: Basic SQL, File Handling Systems
Soft Skills: Analytical Thinking, Logical Reasoning, Communication, Team Collaboration

PROJECTS
Student Task Management System | Python
- Developed a modular console-based task management system using Object-Oriented Programming principles.
- Implemented file handling mechanisms to enable persistent storage and retrieval of structured data.
- Utilized appropriate data structures to efficiently manage and organize tasks.
- Enhanced reliability through structured validation, debugging, and error handling techniques.
- Designed scalable architecture ensuring maintainability and extensibility.

Responsive Portfolio Website | HTML, CSS
- Designed and developed a fully responsive portfolio website compatible across mobile and desktop platforms.
- Applied semantic HTML5 and structured CSS3 for clean, accessible UI implementation.
- Improved navigation flow and user experience through optimized layout and responsive design techniques.
- Followed frontend development best practices and accessibility standards.

TECHNICAL EXPERIENCE
Hackathon Participant - Collaborated within agile teams to design and implement innovative software solutions under strict deadlines. Contributed to debugging, testing, and feature validation ensuring functional accuracy and efficiency.
Industrial Visit - Robomiracles, Coimbatore: Gained exposure to robotics systems, embedded systems, automation workflows, and real-time hardware-software integration.
UI/UX Design Competitions - Designed interactive wireframes and prototypes using Figma applying user-centered design principles.

CERTIFICATIONS
NPTEL - Python Programming

ACADEMIC DETAILS
Bachelor of Engineering - Computer Science and Engineering
College of Engineering, Tamil Nadu
Expected Graduation: 2028
CGPA: 8.5`;
              const blob = new Blob([resumeContent], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "Harshini_S_Resume.txt";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="border-border hover:border-primary/50 text-foreground hover:text-primary px-8 py-3 text-sm font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </Button>
          <Button
            size="lg"
            onClick={handleScrollToProjects}
            data-ocid="hero.secondary_button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-sm font-semibold glow-border transition-all duration-300"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleScrollToContact}
            data-ocid="hero.button"
            className="border-border hover:border-primary/50 text-foreground hover:text-primary px-8 py-3 text-sm font-semibold transition-all duration-300"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {[
            {
              icon: Github,
              label: "GitHub",
              href: "https://github.com/harshini-s",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://linkedin.com/in/harshini-s",
            },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={handleScrollToProjects}
          className="flex flex-col items-center gap-2 mx-auto text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono-custom tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.6,
              ease: "easeInOut",
            }}
          >
            <ArrowDown
              size={16}
              className="group-hover:text-primary transition-colors"
            />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
