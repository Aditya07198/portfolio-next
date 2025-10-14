"use client";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section">
      <div className="container">
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <motion.article
              key={idx}
              className="border rounded-xl p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{p.summary}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {p.stack.map((s: string) => (
                  <span
                    key={s}
                    className="text-xs border px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-3 text-sm flex gap-4">
                {p.link !== "#" && (
                  <a className="underline" href={p.link}>
                    Live
                  </a>
                )}
                {p.repo !== "#" && (
                  <a className="underline" href={p.repo}>
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
