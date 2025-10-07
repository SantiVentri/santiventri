import HeroSection from "@/components/sections/hero-section/hero-section";
import AboutMeSection from "@/components/sections/aboutme-section/aboutme-section";
import SkillsSection from "@/components/sections/skills-section/skills-section";
import ProjectsSection from "@/components/sections/projects-section/projects-section";
import CTASection from "@/components/sections/cta-section/cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
}
