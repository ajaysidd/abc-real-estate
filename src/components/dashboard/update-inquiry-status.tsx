"use client";

import { supabase } from "@/core/lib/supabase-client";

export default function UpdateInquiryStatus({
  inquiryId,
  currentStatus,
}: {
  inquiryId: string;
  currentStatus: string;
}) {
  async function updateStatus(status: string) {
    await supabase
      .from("inquiries")
      .update({ status })
      .eq("id", inquiryId);

    window.location.reload();
  }

  return (
    <select
      defaultValue={currentStatus}
      onChange={(e) => updateStatus(e.target.value)}
      className="border rounded px-2 py-1"
    >
      <option value="NEW">NEW</option>
      <option value="CONTACTED">CONTACTED</option>
      <option value="CLOSED">CLOSED</option>
    </select>
  );
}