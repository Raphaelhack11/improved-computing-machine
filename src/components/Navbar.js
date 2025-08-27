import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const authed = !!user;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-brand-500 text-white grid place-items-center font-black">PB</span>
          <span className="font-extrabold text-lg text-brand-700">Profit Bliss</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={`hover:text-brand-600 ${pathname==='/'?'text-brand-600':''}`}>Home</Link>
          <a href="#about" className="hover:text-brand-600">About</a>
          <Link to="/contact" className={`hover:text-brand-600 ${pathname==='/contact'?'text-brand-600':''}`}>Contact</Link>
          {authed && <Link to="/history" className="hover:text-brand-600">History</Link>}
          {authed && <Link to="/dashboard" className="hover:text-brand-600">Dashboard</Link>}
          {authed && <Link to="/admin" className="hover:text-brand-600">Admin</Link>}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {!authed ? (
            <>
              <Link to="/login" className="px-4 py-2 border rounded-lg hover:border-brand-500">Login</Link>
              <Link to="/signup" className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600">Sign up</Link>
            </>
          ) : (
            <button
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              onClick={() => { logout(); navigate("/"); }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

function ThemeToggle() {
  return (
    <button
      className="h-10 w-10 rounded-xl border grid place-items-center hover:border-brand-500"
      onClick={() => document.documentElement.classList.toggle("dark")}
      title="Toggle theme"
    >
      <span className="text-xl">🌙</span>
    </button>
  );
    }
