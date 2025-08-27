// src/api/auth.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ✅ Signup
export async function signup(email, password) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
}

// ✅ Login
export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
}

// ✅ Get Balance (with token)
export async function getBalance(token) {
  const res = await fetch(`${API_URL}/auth/balance`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
}
