"use client";

const RESUME_PDF_PATH = "/Adityakumar_Galiara_Resume.pdf";

export function ResumeViewer() {
  return (
    <div className="space-y-4">
      <div className="border rounded-xl overflow-hidden h-[80vh] bg-slate-50 dark:bg-slate-900/40">
        <iframe
          src={RESUME_PDF_PATH}
          className="w-full h-full"
          title="Resume PDF Viewer"
        />
      </div>

      <a href={RESUME_PDF_PATH} download className="inline-block underline">
        Download Resume (.pdf)
      </a>
    </div>
  );
}
