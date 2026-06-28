import { getProjectBySlug } from "@/core/lib/project";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);

  return (
    <main className="max-w-5xl mx-auto p-8">
      <Link
        href="/projects"
        className="text-blue-600 hover:underline"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mt-8">
        {project.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {project.location_text}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div>
          <strong>Total Units:</strong>{" "}
          {project.total_units}
        </div>

        <div>
          <strong>Available Units:</strong>{" "}
          {project.available_units}
        </div>

        <div>
          <strong>Launch Date:</strong>{" "}
          {project.launch_date}
        </div>

        <div>
          <strong>Coordinates:</strong>{" "}
          {project.latitude}, {project.longitude}
        </div>
      </div>

      <p className="mt-8 text-lg leading-8">
        {project.description}
      </p>
    </main>
  );
}