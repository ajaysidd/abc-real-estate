import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <ContactForm />
    </main>
  );
}