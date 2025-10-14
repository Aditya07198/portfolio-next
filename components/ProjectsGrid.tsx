import { projects } from "@/lib/data";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <article key={idx} className="border rounded-xl p-4">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{p.summary}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((s: string) => (
                  <span key={s} className="text-xs border px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <div className="mt-3 text-sm flex gap-4">
                {p.link !== "#" && <a className="underline" href={p.link}>Live</a>}
                {p.repo !== "#" && <a className="underline" href={p.repo}>Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
