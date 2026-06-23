import PropertyCard from "@/components/properties/property-card";
import { getProperties } from "@/core/lib/property";

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Available Properties
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </main>
  );
}