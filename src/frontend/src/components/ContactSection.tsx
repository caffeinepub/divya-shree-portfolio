import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitMessage } from "../hooks/useQueries";
import SectionHeader from "./SectionHeader";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending, isError, error } = useSubmitMessage();

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 10)
      next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    mutate(
      { name: form.name, email: form.email, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(INITIAL_FORM);
        },
      },
    );
  };

  return (
    <section id="contact" className="py-24 lg:py-32 section-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader index="04" title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — my inbox is always open. I'll get back to you
              within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono-custom mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:harshiniswrok@gmail.com"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    harshiniswrok@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono-custom mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919445686370"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +91-9445686370
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono-custom mb-0.5">
                    Location
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Madurai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative quote */}
            <blockquote className="mt-4 pl-5 border-l-2 border-primary/40">
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                "Code is not just instructions for machines — it is a craft that
                blends logic with creativity."
              </p>
              <cite className="text-xs text-primary not-italic mt-2 block">
                — Harshini S
              </cite>
            </blockquote>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-primary/30 bg-primary/5"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <CheckCircle2 className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thanks for reaching out. I'll respond within 24 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 border-border hover:border-primary/50 hover:text-primary text-muted-foreground"
                >
                  Send another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm text-foreground font-medium"
                    >
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={`bg-input border-border focus:border-primary/60 placeholder:text-muted-foreground/40 transition-colors ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm text-foreground font-medium"
                    >
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className={`bg-input border-border focus:border-primary/60 placeholder:text-muted-foreground/40 transition-colors ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm text-foreground font-medium"
                  >
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello…"
                    rows={5}
                    className={`bg-input border-border focus:border-primary/60 placeholder:text-muted-foreground/40 resize-none transition-colors ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {isError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                    <AlertCircle size={14} />
                    {error?.message ||
                      "Something went wrong. Please try again."}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 transition-all duration-200 glow-border"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
