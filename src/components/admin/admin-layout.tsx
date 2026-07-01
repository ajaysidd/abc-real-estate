import { ReactNode } from "react";
import AdminSidebar from "./admin-sidebar";
import AdminHeader from "./admin-header";

interface Props {
  children: ReactNode;
  title: string;
}

export default function AdminLayout({
  children,
  title,
}: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <AdminHeader title={title} />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}