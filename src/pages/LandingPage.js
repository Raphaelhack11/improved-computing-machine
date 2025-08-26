import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Profit Bliss</h1>
          <nav className="space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Grow Your Wealth with Profit Bliss
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Manage your investments, track growth, and achieve financial freedom
            with our secure and user-friendly platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Profit Bliss. All rights reserved.
        </div>
      </footer>
    </div>
  );
                }
