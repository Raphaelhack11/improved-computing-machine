import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { setUser, setToken } = useAuth();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await login({ email, password });
      if (data.token) {
        setToken(data.token);
        setUser(data.user);
        nav("/dashboard");
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-white border rounded-2xl p-6 shadow-glossy">
        <h1 className="text-2xl font-bold text-brand-700 mb-4">Login</h1>
        <input className="w-full border rounded-lg px-3 py-2 mb-3" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border rounded-lg px-3 py-2 mb-4" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button disabled={loading} className="w-full rounded-lg bg-brand-500 text-white py-2 hover:bg-brand-600">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
    }
