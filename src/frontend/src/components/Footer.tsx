import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 section-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display text-lg font-bold text-foreground">
              HS<span className="text-primary">.</span>
            </span>
            <p className="text-xs text-muted-foreground">
              © {year} Harshini S. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-xs text-muted-foreground">
            {["about", "projects", "experience", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="capitalize hover:text-primary transition-colors"
              >
                {id}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: SiGithub,
                label: "GitHub",
                href: "https://github.com/harshini-s",
              },
              {
                icon: SiLinkedin,
                label: "LinkedIn",
                href: "https://linkedin.com/in/harshini-s",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
