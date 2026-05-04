import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ProfileScrollStory } from "@/components/ProfileScrollStory";

export default function Page() {
  return (
    <>
      <Hero />
      <Skills />
      <ProfileScrollStory />
      <ProjectsGrid limit={3} />
      <ExperienceTimeline limit={3} />
    </>
  );
}
