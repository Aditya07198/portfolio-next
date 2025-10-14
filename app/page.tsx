import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Page() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsGrid limit={3} />
      <ExperienceTimeline limit={3} />
    </>
  );
}
