export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">ProfitBliss</h1>
          <nav className="space-x-6">
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Grow Your Wealth with Confidence
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          ProfitBliss helps you manage your investments, track growth, and
          achieve financial freedom with ease.
        </p>
        <a
          href="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
        >
          Get Started
        </a>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow py-4 text-center text-gray-500">
        © {new Date().getFullYear()} ProfitBliss. All rights reserved.
      </footer>
    </div>
  );
        }
