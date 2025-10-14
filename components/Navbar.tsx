"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/50 dark:border-slate-800/80">
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          {site.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 text-sm">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                    : "hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/90 backdrop-blur-sm">
          <nav className="flex flex-col gap-1 p-3 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex justify-end pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
