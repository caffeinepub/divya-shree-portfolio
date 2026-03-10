import { useEffect, useRef } from "react";
import { useActor } from "./useActor";

const HARSHINI_BIO =
  "Highly motivated Computer Science Engineering student (CGPA: 8.5) with strong analytical, problem-solving, and programming skills. IELTS Score: 9.7/9 demonstrating exceptional English proficiency. Proficient in Python, C, and C++ with solid foundations in Data Structures, Algorithms, OOP, and SDLC. Experienced in building modular, scalable applications and responsive web interfaces. Seeking a Software Developer Internship to contribute to innovative engineering solutions and product development.";

const HARSHINI_SKILLS = [
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

const HARSHINI_PROJECTS = [
  {
    title: "Student Task Management System",
    description:
      "A modular console-based task management system built using Object-Oriented Programming principles. Features persistent storage via file handling, efficient data structures for task organization, and structured error handling for high reliability.",
    techStack: ["Python", "OOP", "File Handling", "Data Structures"],
    url: null,
  },
  {
    title: "Responsive Portfolio Website",
    description:
      "A fully responsive portfolio website compatible across mobile and desktop platforms. Built with semantic HTML5 and structured CSS3 for clean, accessible UI. Follows frontend development best practices and accessibility standards.",
    techStack: ["HTML5", "CSS3", "Responsive Design"],
    url: null,
  },
];

const HARSHINI_EXPERIENCES = [
  {
    company: "College of Engineering, Tamil Nadu",
    role: "BE Computer Science Engineering",
    startYear: 2024,
    endYear: null,
    description:
      "Bachelor of Engineering in Computer Science and Engineering. CGPA: 8.5. Expected graduation 2028. Studying Data Structures, Algorithms, OOP, SDLC, and full-stack development concepts.",
  },
  {
    company: "Hackathon Events",
    role: "Hackathon Participant",
    startYear: 2024,
    endYear: null,
    description:
      "Collaborated within agile teams to design and implement innovative software solutions under strict deadlines. Contributed to debugging, testing, and feature validation ensuring functional accuracy and efficiency.",
  },
  {
    company: "Robomiracles, Coimbatore",
    role: "Industrial Visit",
    startYear: 2024,
    endYear: 2024,
    description:
      "Gained exposure to robotics systems, embedded systems, automation workflows, and real-time hardware-software integration.",
  },
  {
    company: "UI/UX Design Competitions",
    role: "UI/UX Designer",
    startYear: 2024,
    endYear: null,
    description:
      "Designed interactive wireframes and prototypes using Figma, applying user-centered design principles to create intuitive and accessible interfaces.",
  },
];

export function useInitData() {
  const { actor, isFetching } = useActor();
  const initialized = useRef(false);

  useEffect(() => {
    if (!actor || isFetching || initialized.current) return;

    async function seedData() {
      if (!actor) return;
      try {
        // Check if data already exists
        const [existingProjects, existingExperiences, existingAbout] =
          await Promise.all([
            actor.getProjects(),
            actor.getExperiences(),
            actor.getAbout(),
          ]);

        // Seed bio and skills if empty
        if (!existingAbout.bio) {
          await actor.updateBio(HARSHINI_BIO);
        }
        if (existingAbout.skills.length === 0) {
          for (const skill of HARSHINI_SKILLS) {
            await actor.addSkill(skill);
          }
        }

        // Seed projects if empty
        if (existingProjects.length === 0) {
          for (const p of HARSHINI_PROJECTS) {
            await actor.addProject(p.title, p.description, p.techStack, p.url);
          }
        }

        // Seed experiences if empty
        if (existingExperiences.length === 0) {
          for (const e of HARSHINI_EXPERIENCES) {
            await actor.addExperience(
              e.company,
              e.role,
              BigInt(e.startYear),
              e.endYear !== null ? BigInt(e.endYear) : null,
              e.description,
            );
          }
        }
      } catch (err) {
        console.error("Failed to seed initial data:", err);
      }
    }

    initialized.current = true;
    seedData();
  }, [actor, isFetching]);
}
