import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Profit Bliss</h1>
      <p className="text-gray-600 mb-6">Manage your money with ease</p>
      <div className="space-x-4">
        <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded">
          Sign Up
        </Link>
        <Link to="/login" className="px-4 py-2 bg-gray-200 text-blue-600 rounded">
          Login
        </Link>
      </div>
    </div>
  );
    }
