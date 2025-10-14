"use client";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export function ExperienceTimeline({ limit }: { limit?: number }) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-10">Experience</h2>

        <div className="relative ml-5">
          {/* Animated vertical line */}
          <div
            className="absolute left-[9px] w-px bg-slate-300 dark:bg-slate-700 origin-top"
            style={{ top: "20px", bottom: "32px" }}
          ></div>
          <motion.div
            className="w-full h-full"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          />

          {items.map((e, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-[4px] top-[8px] h-3 w-3 rounded-full bg-slate-500 dark:bg-slate-400 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              />

              {/* Content */}
              <div className="relative z-20">
                <h3 className="font-semibold text-base">
                  {e.title} · {e.company}
                </h3>
                <p className="text-sm text-slate-500 mb-2">
                  {e.location} · {e.start} – {e.end}
                </p>
                <ul className="list-disc ml-5 text-sm space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
