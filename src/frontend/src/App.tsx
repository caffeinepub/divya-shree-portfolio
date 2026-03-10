import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import { useInitData } from "./hooks/useInitData";

function AppContent() {
  useInitData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.14 0.01 255)",
            border: "1px solid oklch(0.25 0.012 255)",
            color: "oklch(0.95 0.005 90)",
          },
        }}
      />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
