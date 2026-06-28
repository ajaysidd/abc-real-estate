import Link from "next/link";
import PropertyCard from "@/components/properties/property-card";
import { getProperties } from "@/core/lib/property";

export default async function FeaturedProperties() {
  const properties = await getProperties();

  const featured = properties.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured Properties
          </h2>

          <p className="text-gray-600 mt-2">
            Discover our latest premium listings.
          </p>
        </div>

        <Link
          href="/properties"
          className="text-green-700 font-semibold hover:underline"
        >
          View All →
        </Link>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {featured.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}

      </div>

    </section>
  );
}