"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system or stored theme
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);

    // Watch for theme changes (toggle button)
    const observer = new MutationObserver(() => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{site.name}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {site.role} · {site.tagline}
          </p>
          <div className="flex gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
            >
              View Projects
            </Link>
            <Link href="/resume" className="px-4 py-2 rounded-xl border">
              Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="justify-self-center md:justify-self-end"
        >
          <Image
            src={isDark ? "/AG_wobg_darktheme.png" : "/AG_wobg_lighttheme.png"}
            width={240}
            height={240}
            alt="Avatar"
            className="opacity-80 transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
