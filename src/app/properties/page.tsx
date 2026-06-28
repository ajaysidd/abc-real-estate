import PropertyCard from "@/components/properties/property-card";
import { getProperties } from "@/core/lib/property";

interface Props {
  searchParams: Promise<{
    search?: string;
    city?: string;
    propertyType?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function PropertiesPage({
  searchParams,
}: Props) {
  const filters =
    await searchParams;

  const properties =
    await getProperties(filters);

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Available Properties
      </h1>

      <form className="grid md:grid-cols-5 gap-4 mb-8">

        <input
          name="search"
          defaultValue={filters.search}
          placeholder="Search"
          className="border rounded-lg p-3"
        />

        <input
          name="city"
          defaultValue={filters.city}
          placeholder="City"
          className="border rounded-lg p-3"
        />

        <select
  name="propertyType"
  defaultValue={filters.propertyType}
  className="border rounded-lg p-3"
>
  <option value="">All Types</option>
  <option value="RESIDENTIAL_PLOT">Residential Plot</option>
  <option value="FARM_LAND">Farm Land</option>
  <option value="VILLA">Villa</option>
  <option value="APARTMENT">Apartment</option>
  <option value="COMMERCIAL">Commercial</option>
</select>

        <input
          name="minPrice"
          type="number"
          defaultValue={filters.minPrice}
          placeholder="Min Price"
          className="border rounded-lg p-3"
        />

        <input
          name="maxPrice"
          type="number"
          defaultValue={filters.maxPrice}
          placeholder="Max Price"
          className="border rounded-lg p-3"
        />

        <button
          className="bg-black text-white rounded-lg py-3"
        >
          Search
        </button>

      </form>

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