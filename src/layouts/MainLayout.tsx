import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <nav className="bg-white shadow-md px-6 py-4 flex space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/interest-calculator"
          className="text-gray-700 hover:text-blue-600 font-semibold"
        >
          Interest Calculator
        </Link>
      </nav>

      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
