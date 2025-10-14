export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-semibold mb-6">Resume</h1>
        <div className="border rounded-xl overflow-hidden h-[80vh]">
          <iframe src="/resume.pdf" className="w-full h-full" />
        </div>
        <a href="/resume.pdf" download className="inline-block mt-4 underline">
          Download PDF
        </a>
      </div>
    </section>
  );
}
