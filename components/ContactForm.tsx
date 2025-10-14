"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setOk(res.ok);
    setLoading(false);
    if (res.ok) form.reset();
  }

  return (
    <form onSubmit={submit} className="border rounded-xl p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" required className="w-full border rounded-lg px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" required className="w-full border rounded-lg px-3 py-2 bg-transparent" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea name="message" required rows={5} className="w-full border rounded-lg px-3 py-2 bg-transparent" />
      </div>
      <button disabled={loading} className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
        {loading ? "Sending..." : "Send message"}
      </button>
      {ok === true && <p className="text-sm text-green-600">Sent.</p>}
      {ok === false && <p className="text-sm text-red-600">Failed. Check console.</p>}
    </form>
  );
}
