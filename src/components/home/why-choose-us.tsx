export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Developer",
      description:
        "Delivering quality real estate projects with transparency and customer satisfaction.",
      icon: "🏆",
    },
    {
      title: "Prime Locations",
      description:
        "Carefully selected locations with excellent connectivity and future growth potential.",
      icon: "📍",
    },
    {
      title: "Legal Documentation",
      description:
        "Every property comes with clear legal documentation and hassle-free ownership.",
      icon: "📄",
    },
    {
      title: "Investment Growth",
      description:
        "High appreciation potential, making every investment secure and rewarding.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We do not just sell properties—we help you build your future
            with trust, transparency, and long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}