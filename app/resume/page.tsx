import { ResumeViewer } from "@/components/ResumeViewer";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-4">Resume</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
          Latest resume updated from May 2026 profile.
        </p>
        <ResumeViewer />
      </div>
    </section>
  );
}
