import { supabase } from "./supabase-client";

export async function uploadPropertyImage(
  file: File,
  fileName: string
) {
  const { data, error } = await supabase.storage
    .from("property-images")
    .upload(fileName, file);

  if (error) throw error;

  return data;
}

export function getImageUrl(path: string) {
  const { data } = supabase.storage
    .from("property-images") 
    .getPublicUrl(path);

  return data.publicUrl;
}