import { Button } from "antd";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 text-center">
      <h1 className="text-4xl font-semibold mb-4 text-gray-900">
        Interest Calculator
      </h1>
      <p className="text-gray-600 mb-8">
        Quickly calculate your expected investment returns with simple inputs.
      </p>
      <Link to="/interest-calculator">
        <Button type="primary" size="large" className="w-full">
          Get Started
        </Button>
      </Link>
    </div>
  );
};
