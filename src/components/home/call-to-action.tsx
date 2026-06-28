import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-green-700 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <h2 className="text-4xl font-bold">
          Ready to Find Your Dream Property?
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Browse our latest properties and premium projects,
          or contact us for personalized assistance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/properties"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Properties
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}