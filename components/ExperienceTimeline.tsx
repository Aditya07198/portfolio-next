import { experience } from "@/lib/data";

export function ExperienceTimeline({ limit }: { limit?: number }) {
  const items = limit ? experience.slice(0, limit) : experience;
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Experiences</h2>
        <ol className="relative border-s border-slate-200 dark:border-slate-800">
          {items.map((e, idx) => (
            <li key={idx} className="ms-6 mb-8">
              <span className="absolute -start-1.5 mt-1.25 h-3 w-3 rounded-full bg-slate-400"></span>
              <h3 className="font-medium">{e.title} · {e.company}</h3>
              <p className="text-sm text-slate-500">{e.location} · {e.start} – {e.end}</p>
              <ul className="list-disc ms-5 mt-2 text-sm space-y-1">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
