import Link from "next/link";
import Image from "next/image";

type Property = {
  id: string;
  title: string;
  slug: string;
  description: string;
  city: string;
  state: string;
  price: number;
  image_url?: string;
};

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Link href={`/properties/${property.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <Image
          src={
            property.image_url ||
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
          }
          alt={property.title}
          width={600}
          height={350}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold">
            {property.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {property.city}, {property.state}
          </p>

          <p className="mt-3 line-clamp-2 text-gray-600">
            {property.description}
          </p>

          <p className="mt-5 text-2xl font-bold text-green-700">
            ₹ {property.price.toLocaleString("en-IN")}
          </p>

        </div>

      </div>
    </Link>
  );
}