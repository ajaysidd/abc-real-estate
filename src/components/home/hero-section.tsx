import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Find Your
          <span className="text-green-400">
            {" "}
            Dream Property
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Premium plots, villas, apartments and
          investment opportunities across Telangana.
          Trusted by hundreds of happy customers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/properties"
            className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full font-semibold"
          >
            Browse Properties
          </Link>

          <Link
            href="/projects"
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-lg font-semibold"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </section>
  );
}