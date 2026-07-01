import Link from "next/link";
import {
  Building2,
  FolderKanban,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <Link
          href="/admin/properties/new"
          className="flex items-center gap-3 rounded-xl border p-4 hover:bg-gray-50"
        >
          <PlusCircle size={20} />
          Add Property
        </Link>

        <Link
          href="/admin/projects/new"
          className="flex items-center gap-3 rounded-xl border p-4 hover:bg-gray-50"
        >
          <FolderKanban size={20} />
          Add Project
        </Link>

        <Link
          href="/admin/inquiries"
          className="flex items-center gap-3 rounded-xl border p-4 hover:bg-gray-50"
        >
          <MessageSquare size={20} />
          View Inquiries
        </Link>

        <Link
          href="/admin/properties"
          className="flex items-center gap-3 rounded-xl border p-4 hover:bg-gray-50"
        >
          <Building2 size={20} />
          Manage Properties
        </Link>

      </div>

    </div>
  );
}