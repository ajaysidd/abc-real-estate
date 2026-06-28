import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  location_text: string;
  total_units: number;
  available_units: number;
  image_url?: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <Image
          src={
            project.image_url ||
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0?q=80&w=1200&auto=format&fit=crop"
          }
          alt={project.title}
          width={600}
          height={350}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold">
            {project.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {project.location_text}
          </p>

          <p className="mt-3 line-clamp-2 text-gray-600">
            {project.description}
          </p>

          <div className="mt-5 flex justify-between text-sm">

            <span>
              Units: {project.total_units}
            </span>

            <span className="text-green-700 font-semibold">
              Available: {project.available_units}
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}