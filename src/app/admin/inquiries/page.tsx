import { getInquiries } from "@/core/lib/inquiry";
import InquiryTable from "@/components/dashboard/inquiry-table";

export default async function AdminInquiriesPage() {
  const inquiries = await getInquiries();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Manage Inquiries
      </h1>

      <InquiryTable inquiries={inquiries} />
    </main>
  );
}