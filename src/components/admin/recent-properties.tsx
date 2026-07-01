import Link from "next/link";
import { getRecentProperties } from "@/core/lib/property";

export default async function RecentProperties() {
  const properties = await getRecentProperties();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Recent Properties
        </h2>

        <Link
          href="/admin/properties"
          className="text-sm font-semibold text-green-600 hover:underline"
        >
          View All →
        </Link>
      </div>

      {properties.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No properties available.
        </p>
      ) : (
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Title</th>
                <th className="py-3">City</th>
                <th className="py-3">Price</th>
              </tr>
            </thead>

            <tbody>

              {properties.map((property) => (
                <tr
                  key={property.id}
                  className="border-b last:border-0"
                >
                  <td className="py-4 font-medium">
                    {property.title}
                  </td>

                  <td className="py-4">
                    {property.city}
                  </td>

                  <td className="py-4 font-semibold text-green-700">
                    ₹ {property.price.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}