"use client";

import { LogOut, UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/core/lib/supabase-client";

interface Props {
  title: string;
}

export default function AdminHeader({
  title,
}: Props) {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-sm text-gray-500">
          Welcome back, Admin
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <UserCircle2
            size={36}
            className="text-green-600"
          />

          <div>
            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              admin
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}