"use client";

const engineeringForte = [
  "Web Application",
  "Software",
  "Cloud",
  "DevOps",
  "Mobile App Development",
];

export function ProfileScrollStory() {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border p-6 md:p-8 bg-slate-50 dark:bg-slate-900/40">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-2">Career Journey</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Snapshot of my strongest engineering focus areas across enterprise delivery.
            </p>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200 mb-3">
              Engineering Forte
            </h3>
            <div className="flex flex-wrap gap-2">
              {engineeringForte.map((item) => (
                <span
                  key={item}
                  className="text-sm border rounded-full px-3 py-1 bg-white/80 dark:bg-slate-950/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
