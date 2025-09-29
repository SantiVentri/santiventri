// Styles
// import styles from "./page.module.css";

// Sections
import HeroSection from "@/components/sections/hero-section/hero-section";
import AboutMeSection from "@/components/sections/about-me/aboutme-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
    </main>
  );
}
