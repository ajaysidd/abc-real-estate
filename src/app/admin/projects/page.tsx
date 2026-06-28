import Link from "next/link";
import { getProjects } from "@/core/lib/project";
import ProjectTable from "@/components/dashboard/project-table";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Manage Projects
        </h1>

        <Link
          href="/admin/projects/new"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Project
        </Link>
      </div>

      <ProjectTable
        projects={projects ?? []}
      />
    </main>
  );
}