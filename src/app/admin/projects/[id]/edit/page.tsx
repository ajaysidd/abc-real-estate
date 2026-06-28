import EditProjectForm from "@/components/forms/edit-project-form";
import { getProjectById } from "@/core/lib/project";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({
  params,
}: Props) {
  const { id } = await params;

  const project =
    await getProjectById(id);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Edit Project
      </h1>

      <EditProjectForm
        project={project}
      />
    </main>
  );
}