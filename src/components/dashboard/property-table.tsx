import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import DeletePropertyButton from "./delete-property-button";

type Property = {
  id: string;
  title: string;
  city: string;
  price: number;
  property_type: string;
  status: string;
};

interface Props {
  properties: Property[];
}

export default function PropertyTable({
  properties,
}: Props) {
  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed py-16 text-center">
        <h3 className="text-xl font-semibold">
          No properties found
        </h3>

        <p className="mt-2 text-gray-500">
          Start by adding your first property.
        </p>

        <Link
          href="/admin/properties/new"
          className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Add Property
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">
              Title
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              City
            </th>

            <th className="px-6 py-4 text-left font-semibold">
  Type
</th>

<th className="px-6 py-4 text-left font-semibold">
  Status
</th>

            <th className="px-6 py-4 text-left font-semibold">
              Price
            </th>

            <th className="px-6 py-4 text-center font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr
              key={property.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 font-medium">
                {property.title}
              </td>

              <td className="px-6 py-4">
                {property.city}
              </td>

              <td className="px-6 py-4">
  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
    {property.property_type.replaceAll("_", " ")}
  </span>
</td>       
 
             <td className="px-6 py-4">
  <span
    className={`rounded-full px-3 py-1 text-xs font-semibold ${
      property.status === "AVAILABLE"
        ? "bg-green-100 text-green-700"
        : property.status === "SOLD"
        ? "bg-red-100 text-red-700"
        : "bg-yellow-100 text-yellow-700"
    }`}
  >
    {property.status}
  </span>
</td>

              <td className="px-6 py-4 font-semibold text-green-700">
                ₹ {property.price.toLocaleString("en-IN")}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">

                  <Link
                    href={`/admin/properties/${property.id}/edit`}
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-blue-600 hover:bg-blue-50"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>

                  <DeletePropertyButton
                    propertyId={property.id}
                  />

                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}