import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-6">Experience</h1>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
