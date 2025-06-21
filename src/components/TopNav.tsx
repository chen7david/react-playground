import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex space-x-6">
      <Link to="/">Home</Link>

      <Link
        to="/interest-calculator"
        className="text-gray-700 hover:text-blue-600 font-semibold"
      >
        Interest Calculator
      </Link>

      <Link
        to="/jackie"
        className="text-gray-700 hover:text-blue-600 font-semibold"
      >
        Jackie
      </Link>
    </nav>
  );
}
