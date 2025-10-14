import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/80">
      <div className="container py-6 text-sm flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={site.linkedin} className="underline" target="_blank">LinkedIn</a>
          <a href={site.github} className="underline"  target="_blank">GitHub</a>
          <a href={`mailto:${site.email}`} className="underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
