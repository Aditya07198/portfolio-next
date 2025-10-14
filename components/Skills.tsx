import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="Cloud & DevOps" items={skills.cloud} />
          <SkillGroup title="Databases" items={skills.db} />
          <SkillGroup title="Tools" items={skills.tools} />
          <SkillGroup title="Other" items={skills.other} />
          <SkillGroup title="Architecture" items={skills.architecture} />
          <SkillGroup title="Software Engineering" items={skills.softwareEngineering} />
          <SkillGroup title="Agile" items={skills.agile} />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="text-sm border px-2 py-1 rounded-lg">{i}</li>
        ))}
      </ul>
    </div>
  );
}
