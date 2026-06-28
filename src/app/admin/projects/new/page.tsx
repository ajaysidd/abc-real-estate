import ProjectForm from "@/components/forms/project-form";

export default function NewProjectPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        New Project
      </h1>

      <ProjectForm />
    </main>
  );
}