"use client";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900/40">
      <div className="container">
        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, list], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <SkillGroup title={formatTitle(key)} items={list as string[]} />
            </motion.div>
          ))}
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
          <li key={i} className="text-sm border px-2 py-1 rounded-lg">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatTitle(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}
