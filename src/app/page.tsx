import { getProperties } from "@/core/lib/property";

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        HAYANAN Real Estate
      </h1>

      <div className="space-y-4">
        {properties?.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg p-4"
          >
            <h2 className="font-semibold">
              {property.title}
            </h2>

            <p>{property.description}</p>

            <p>
              ₹ {property.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}