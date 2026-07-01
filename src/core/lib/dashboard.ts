import { supabase } from "./supabase-client";

export async function getDashboardStats() {
  const [
    properties,
    projects,
    inquiries,
    newInquiries,
  ] = await Promise.all([
    supabase
      .from("properties")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("projects")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("inquiries")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", "NEW"),
  ]);

  return {
    properties: properties.count ?? 0,
    projects: projects.count ?? 0,
    inquiries: inquiries.count ?? 0,
    newInquiries: newInquiries.count ?? 0,
  };
}