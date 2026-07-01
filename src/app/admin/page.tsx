import StatCard from "@/components/ui/stat-card";
import { getDashboardStats } from "@/core/lib/dashboard";
import {
  Building2,
  FolderKanban,
  MessageSquare,
  CircleAlert,
} from "lucide-react";
import RecentInquiries from "@/components/admin/recent-inquiries";
import RecentProperties from "@/components/admin/recent-properties";
import QuickActions from "@/components/admin/quick-actions";

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold">
          Dashboard Overview
        </h2>

        <p className="text-gray-500">
          Monitor your real estate business from one place.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Properties"
          value={stats.properties}
          icon={<Building2 size={28} />}
        />

        <StatCard
          title="Projects"
          value={stats.projects}
          icon={<FolderKanban size={28} />}
        />

        <StatCard
          title="Inquiries"
          value={stats.inquiries}
          icon={<MessageSquare size={28} />}
        />

        <StatCard
          title="New Leads"
          value={stats.newInquiries}
          icon={<CircleAlert size={28} />}
        />

      </div>
       
       <div className="grid gap-8 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <RecentInquiries />
  </div>

  <QuickActions />

</div>

<RecentProperties />

    </div>
  );
}