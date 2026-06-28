"use client";

import { useState } from "react";
import { updateProject } from "@/core/lib/project";

interface Props {
  project: {
    id: string;
    title: string;
    description: string;
    location_text: string;
    total_units: number;
    available_units: number;
    launch_date: string | null;
  };
}

export default function EditProjectForm({
  project,
}: Props) {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [location, setLocation] = useState(project.location_text);
  const [totalUnits, setTotalUnits] = useState(project.total_units);
  const [availableUnits, setAvailableUnits] = useState(project.available_units);
  const [launchDate, setLaunchDate] = useState(
    project.launch_date
      ? project.launch_date.substring(0, 10)
      : ""
  );

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await updateProject(project.id, {
        title,
        description,
        location_text: location,
        total_units: totalUnits,
        available_units: availableUnits,
        launch_date: launchDate,
      });

      alert("Project updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update project.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Total Units</label>
        <input
          type="number"
          value={totalUnits}
          onChange={(e) =>
            setTotalUnits(Number(e.target.value))
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Available Units</label>
        <input
          type="number"
          value={availableUnits}
          onChange={(e) =>
            setAvailableUnits(Number(e.target.value))
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Launch Date</label>
        <input
          type="date"
          value={launchDate}
          onChange={(e) =>
            setLaunchDate(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Update Project
      </button>
    </form>
  );
}