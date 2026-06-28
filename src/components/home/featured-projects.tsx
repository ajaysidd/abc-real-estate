import Link from "next/link";
import ProjectCard from "@/components/projects/project-card";
import { getProjects } from "@/core/lib/project";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  const featured = projects?.slice(0, 3) ?? [];

  return (
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-600 mt-2">
              Explore our ongoing and completed developments.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-green-700 font-semibold hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}