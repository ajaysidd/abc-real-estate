import Image from "next/image";
import { getPropertyImages } from "@/core/lib/property";
import Link from "next/link";
import { getPropertyBySlug } from "@/core/lib/property";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const property = await getPropertyBySlug(slug);
  const images = await getPropertyImages(
  property.id
);

console.log("Property:", property);
console.log("Images:", images);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <Link
        href="/properties"
        className="text-blue-600 hover:underline"
      >
        ← Back to Properties
      </Link>

     {images.length > 0 && (
  <div className="mb-8">
    <Image
      src={images[0].url}
      alt={property.title}
      width={1200}
      height={700}
      className="rounded-xl w-full h-[450px] object-cover"
    />

    {images.length > 1 && (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {images.slice(1).map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={property.title}
            width={300}
            height={200}
            className="rounded-lg h-32 w-full object-cover"
          />
        ))}
      </div>
    )}
  </div>
)}

      <h1 className="text-4xl font-bold mt-4">
        {property.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {property.city}, {property.state}
      </p>

      <p className="mt-4">
        {property.description}
      </p>

      <p className="mt-6 text-2xl font-bold text-green-700">
        ₹ {property.price.toLocaleString("en-IN")}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong>Property Type:</strong>{" "}
          {property.property_type}
        </div>

        <div>
          <strong>Status:</strong>{" "}
          {property.status}
        </div>

        <div>
          <strong>Address:</strong>{" "}
          {property.address}
        </div>

        <div>
          <strong>Area:</strong>{" "}
          {property.area_sqft ?? "N/A"} sqft
        </div>
      </div>
    </main>
  );
}