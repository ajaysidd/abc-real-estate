import { supabase } from "./supabase-client";
export async function getProperties(
  filters?: {
    search?: string;
    city?: string;
    propertyType?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: number;
    pageSize?: number;
  }
) {
  let query = supabase
    .from("properties")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (filters?.search) {
    query = query.or(
      `title.ilike.%${filters.search}%,city.ilike.%${filters.search}%`
    );
  }

  if (filters?.city) {
    query = query.eq(
      "city",
      filters.city
    );
  }

  if (filters?.propertyType) {
    query = query.eq(
      "property_type",
      filters.propertyType
    );
  }

  if (filters?.minPrice) {
    query = query.gte(
      "price",
      Number(filters.minPrice)
    );
  }

  if (filters?.maxPrice) {
    query = query.lte(
      "price",
      Number(filters.maxPrice)
    );
  }

const page = filters?.page ?? 1;
const pageSize = filters?.pageSize ?? 10;

query = query.range(
  (page - 1) * pageSize,
  page * pageSize - 1
);

  const { data, error } =
    await query;

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

export async function getPropertyById(
  id: string
) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function updateProperty(
  id: string,
  updates: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("properties")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteProperty(
  id: string
) {
  const { error } = await supabase
    .from("properties")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}

export async function deletePropertyImage(
  imageId: string
) {
  const { error } = await supabase
    .from("property_images")
    .delete()
    .eq("id", imageId);

  if (error) throw error;

  return true;
}

export async function getRecentProperties(limit = 5) {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) throw error;

  return data;
}