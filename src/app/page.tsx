// Styles
// import styles from "./page.module.css";

// Sections
import HeroSection from "@/components/sections/hero-section/hero-section";
import AboutMeSection from "@/components/sections/aboutme-section/aboutme-section";
import SkillsSection from "@/components/sections/skills-section/skills-section";
import ProjectsSection from "@/components/sections/projects-section/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
