import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful (frontend demo)");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full px-4 py-3 border rounded-lg" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input className="w-full px-4 py-3 border rounded-lg" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit" className="w-full py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:brightness-95">
            Log In
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          No account? <Link to="/signup" className="text-yellow-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
