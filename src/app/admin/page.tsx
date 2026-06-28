import { getProperties } from "@/core/lib/property";
import { getProjects } from "@/core/lib/project";
import { getInquiries } from "@/core/lib/inquiry";

export default async function AdminDashboard() {
  const properties = await getProperties();
  const projects = await getProjects();
  const inquiries = await getInquiries();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Properties
          </h2>

          <p className="text-4xl font-bold mt-4">
            {properties.length}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="text-4xl font-bold mt-4">
            {projects.length}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Inquiries
          </h2>

          <p className="text-4xl font-bold mt-4">
            {inquiries.length}
          </p>
        </div>

      </div>
    </main>
  );
}