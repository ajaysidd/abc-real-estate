import { getRecentInquiries } from "@/core/lib/inquiry";

export default async function RecentInquiries() {
  const inquiries = await getRecentInquiries();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Recent Inquiries
        </h2>

        <span className="text-sm text-gray-500">
          Latest 5
        </span>
      </div>

      {inquiries.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          No inquiries yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Name</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="border-b last:border-0"
                >
                  <td className="py-4">
                    {inquiry.name}
                  </td>

                  <td className="py-4">
                    {inquiry.phone}
                  </td>

                  <td className="py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        inquiry.status === "NEW"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {inquiry.status}
                    </span>
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