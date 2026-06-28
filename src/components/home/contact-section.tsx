import ContactForm from "@/components/forms/contact-form";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-5xl font-bold">
          Get In Touch
        </h2>

        <p className="text-gray-600 mt-3">
          Have questions? Send us a message and we will get back to you shortly.
        </p>

      </div>

      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>

    </section>
  );
}