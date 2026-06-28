"use client";

import { useState } from "react";
import { createProject } from "@/core/lib/project";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [availableUnits, setAvailableUnits] = useState("");
  const [launchDate, setLaunchDate] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      await createProject({
        title,
        slug: title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-"),
        description,
        location_text: location,
        total_units: Number(totalUnits),
        available_units: Number(
          availableUnits
        ),
        launch_date: launchDate,
      });

      alert("Project created successfully!");

      setTitle("");
      setDescription("");
      setLocation("");
      setTotalUnits("");
      setAvailableUnits("");
      setLaunchDate("");
    } catch (error) {
      console.error(error);
      alert("Failed to create project.");
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
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label>Total Units</label>
        <input
          type="number"
          value={totalUnits}
          onChange={(e) =>
            setTotalUnits(e.target.value)
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
            setAvailableUnits(e.target.value)
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
        Save Project
      </button>
    </form>
  );
}