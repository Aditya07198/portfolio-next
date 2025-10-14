import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <ProjectsGrid />
      </div>
    </section>
  );
}
