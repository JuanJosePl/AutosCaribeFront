import { Outlet } from "react-router-dom";
import SidebarAcademia from "../components/academy/SidebarAcademia";

export default function AcademyLayout() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <SidebarAcademia />

      {/* Main Content Area */}
      <div className="md:ml-80 min-h-screen">
        {/* Content with proper padding */}
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}