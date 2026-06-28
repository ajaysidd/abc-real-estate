"use client";

import { deleteProject } from "@/core/lib/project";

interface Props {
  projectId: string;
}

export default function DeleteProjectButton({
  projectId,
}: Props) {
  async function handleDelete() {
    const confirmed = confirm(
      "Delete this project?"
    );

    if (!confirmed) return;

    try {
      await deleteProject(projectId);

      alert("Project deleted.");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to delete project.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}