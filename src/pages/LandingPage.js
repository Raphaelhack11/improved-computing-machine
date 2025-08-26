import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Smart Crypto Investing with{" "}
            <span className="text-yellow-500">Profit Bliss</span>
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            A modern, secure, and transparent way to grow your assets. Clean UX,
            clear plans, and fast deposits/withdrawals.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-white font-semibold hover:brightness-95"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-xl border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-yellow-100 grid place-items-center shadow-inner">
            <span className="text-7xl">₿</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          {[
            ["Secure", "Best practices and transparent operations."],
            ["Fast", "Quick deposits and withdrawals."],
            ["Modern", "Clean fintech UI that inspires trust."]
          ].map(([title, desc]) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Profit Bliss. All rights reserved.
      </footer>
    </main>
  );
}
