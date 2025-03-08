import { Sidebar } from "@/components";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="w-full">
        { children }
      </div>
    </div>

  );
}