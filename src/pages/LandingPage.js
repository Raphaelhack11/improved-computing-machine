import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-800 leading-tight">
            Grow crypto wealth with <span className="text-brand-500">Profit Bliss</span>
          </h1>
          <p className="mt-4 text-gray-600">
            A sleek, modern dashboard for deposits, withdrawals, plans and transparent history.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/signup" className="px-5 py-3 rounded-xl bg-brand-500 text-white hover:bg-brand-600 shadow-glossy">
              Get Started
            </Link>
            <Link to="/login" className="px-5 py-3 rounded-xl border hover:border-brand-500">
              I already have an account
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-accent-400/20 text-accent-500">SSL Secured</span>
            <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-700">24/7 Support</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-brand-50 to-white border rounded-3xl p-6 shadow-glossy">
          <img alt="" src="https://images.unsplash.com/photo-1640340434866-9a3c7b4b3dba?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-brand-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-brand-800">About Us</h2>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Profit Bliss is a modern crypto investment interface. Transparent history, clear plans,
            and manual admin approvals keep everything in check. Location: 125 Market St, San Francisco, CA.
          </p>
        </div>
      </section>
    </main>
  );
    }
