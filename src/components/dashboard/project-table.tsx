import Link from "next/link";
import DeleteProjectButton from "./delete-project-button";

type Project = {
  id: string;
  title: string;
  location_text: string;
  available_units: number;
};

interface Props {
  projects: Project[];
}

export default function ProjectTable({
  projects,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th className="text-left p-3">Title</th>
          <th className="text-left p-3">Location</th>
          <th className="text-left p-3">
            Available Units
          </th>
          <th className="text-left p-3">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {projects.map((project) => (
          <tr
            key={project.id}
            className="border-b"
          >
            <td className="p-3">
              {project.title}
            </td>

            <td className="p-3">
              {project.location_text}
            </td>

            <td className="p-3">
              {project.available_units}
            </td>

            <td className="p-3 flex gap-4">
  <Link
    href={`/admin/projects/${project.id}/edit`}
    className="text-blue-600 hover:underline"
  >
    Edit
  </Link>

  <DeleteProjectButton
    projectId={project.id}
  />
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}