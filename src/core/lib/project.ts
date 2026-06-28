import { supabase } from "./supabase-client";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  console.log("Projects:", data);

  if (error) throw error;

  return data;
}

export async function getProjectBySlug(
  slug: string
) {
  console.log("Searching slug:", slug);

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug);

  console.log("Result:", data);
  console.log("Error:", error);

  if (error) throw error;

  return data?.[0];
}

export async function getProjectById(
  id: string
) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createProject(
  project: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updateProject(
  id: string,
  updates: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteProject(
  id: string
) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

