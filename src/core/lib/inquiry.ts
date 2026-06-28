import { supabase } from "./supabase-client";

export async function createInquiry(
  inquiry: Record<string, unknown>
) {
  const { data, error } = await supabase
    .from("inquiries")
    .insert(inquiry)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getInquiries() {
  const { data, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function markInquiryAsRead(
  id: string
) {
  const { error } = await supabase
    .from("inquiries")
    .update({
      status: "READ",
    })
    .eq("id", id);

  if (error) throw error;
}