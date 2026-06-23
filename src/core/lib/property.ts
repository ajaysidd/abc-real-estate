import { supabase } from "./supabase-client";
export async function getProperties() {
 

  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

      console.log("Properties:", data);

  if (error) throw error;

  return data;
}


export async function getPropertyBySlug(slug: string) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data;
}

export async function getPropertyImages(
  propertyId: string
) {
  const { data, error } = await supabase
    .from("property_images")
    .select("*")
    .eq("property_id", propertyId)
    .order("display_order");

  if (error) throw error;

  return data;
}