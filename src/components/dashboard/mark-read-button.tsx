"use client";

import { markInquiryAsRead } from "@/core/lib/inquiry";

export default function MarkReadButton({
  inquiryId,
}: {
  inquiryId: string;
}) {
  async function handleClick() {
    try {
      await markInquiryAsRead(inquiryId);

      alert("Marked as Read");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed.");
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 hover:underline"
    >
      Mark Read
    </button>
  );
}