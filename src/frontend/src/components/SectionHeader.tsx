import { motion } from "motion/react";

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  index,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center gap-4">
        <span className="font-mono-custom text-xs text-primary tracking-widest">
          {index} ——
        </span>
        {subtitle && (
          <span className="font-mono-custom text-xs text-muted-foreground tracking-widest uppercase">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
