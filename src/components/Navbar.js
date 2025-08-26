import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const navLink =
    "px-3 py-2 rounded-lg hover:text-yellow-500 transition-colors";
  const active = "text-yellow-500 font-semibold";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-yellow-500">
          Profit Bliss
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className={`${navLink} ${pathname === "/" ? active : ""}`}>Home</Link>
          <Link to="/about" className={`${navLink} ${pathname === "/about" ? active : ""}`}>About</Link>
          <Link to="/contact" className={`${navLink} ${pathname === "/contact" ? active : ""}`}>Contact</Link>
          <Link to="/dashboard" className={`${navLink} ${pathname === "/dashboard" ? active : ""}`}>Dashboard</Link>
          <Link to="/deposit" className={`${navLink} ${pathname === "/deposit" ? active : ""}`}>Deposit</Link>
          <Link to="/withdraw" className={`${navLink} ${pathname === "/withdraw" ? active : ""}`}>Withdraw</Link>
          <Link to="/history" className={`${navLink} ${pathname === "/history" ? active : ""}`}>History</Link>
          <Link to="/admin" className={`${navLink} ${pathname === "/admin" ? active : ""}`}>Admin</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-gray-100">Login</Link>
          <Link to="/signup" className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:brightness-95">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
