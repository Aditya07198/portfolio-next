import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-semibold mb-6">Contact</h1>
        <ContactForm />
      </div>
    </section>
  );
}
