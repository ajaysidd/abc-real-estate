import Link from "next/link";
import { getProperties } from "@/core/lib/property";
import PropertyTable from "@/components/dashboard/property-table";

interface Props {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function AdminPropertiesPage({
  searchParams,
}: Props) {
  const filters = await searchParams;

  const properties = await getProperties({
    search: filters.search,
  });

  return (
    <main className="max-w-7xl mx-auto p-8">

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Manage Properties
          </h1>

          <p className="mt-2 text-gray-500">
            Search and manage all properties.
          </p>
        </div>

        <Link
          href="/admin/properties/new"
          className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          + Add Property
        </Link>

      </div>

      <form className="mb-8">
        <input
          name="search"
          defaultValue={filters.search}
          placeholder="Search by title or city..."
          className="w-full rounded-xl border p-4 focus:border-green-600 focus:outline-none"
        />
      </form>

      <PropertyTable
        properties={properties ?? []}
      />

    </main>
  );
}