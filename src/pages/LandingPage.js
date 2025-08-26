export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-indigo-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Profit Bliss</h1>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-gray-200">Features</a>
            <a href="#about" className="hover:text-gray-200">About</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to Profit Bliss
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          The smart way to manage your investments and grow your wealth.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-gray-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Profit Bliss. All rights reserved.
        </p>
      </footer>
    </div>
  );
    }
