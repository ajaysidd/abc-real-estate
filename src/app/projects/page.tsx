import ProjectCard from "@/components/projects/project-card";
import { getProjects } from "@/core/lib/project";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Our Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </main>
  );
}