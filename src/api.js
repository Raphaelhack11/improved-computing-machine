// src/api.js
import API_BASE_URL from "./config";

// Signup
export async function signup(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// Login
export async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// Balance
export async function getBalance(token) {
  const res = await fetch(`${API_BASE_URL}/balance`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// Deposit
export async function deposit(amount, token) {
  const res = await fetch(`${API_BASE_URL}/deposit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}

// Withdraw
export async function withdraw(amount, token) {
  const res = await fetch(`${API_BASE_URL}/withdraw`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });
  return res.json();
}

// History
export async function getHistory(token) {
  const res = await fetch(`${API_BASE_URL}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
