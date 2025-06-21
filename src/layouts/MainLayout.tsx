import { Outlet } from "react-router-dom";
import { TopNav } from "../components/TopNav";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <TopNav />

      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
