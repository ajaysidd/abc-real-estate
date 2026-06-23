import Link from "next/link";

type Property = {
  id: string;
  title: string;
  slug: string;
  description: string;
  city: string;
  state: string;
  price: number;
};

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Link href={`/properties/${property.slug}`}>
      <div className="border rounded-xl p-5 hover:shadow-lg transition">
        <h2 className="text-xl font-bold">
          {property.title}
        </h2>

        <p className="text-gray-500">
          {property.city}, {property.state}
        </p>

        <p className="mt-2 text-sm">
          {property.description}
        </p>

        <p className="mt-4 text-green-700 font-bold text-lg">
          ₹ {property.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}