// ⛳️ IMPORTANT: set this to your deployed backend URL
const BASE_URL = "https://YOUR-BACKEND-URL/api"; 
// e.g. "https://profit-bliss-backend.vercel.app/api"

export function setBaseUrl(url) {
  // helper if you want to override at runtime
}

async function handle(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

export async function signup(payload) {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function login(payload) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function createTransaction(type, amount, token) {
  const res = await fetch(`${BASE_URL}/transactions/${type}`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ amount }),
  });
  return handle(res);
}

export async function getTransactions(token) {
  const res = await fetch(`${BASE_URL}/transactions`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return handle(res);
}

// Admin endpoints (backend needed)
export async function adminGetUsers(token) {
  const res = await fetch(`${BASE_URL}/admin/users`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return handle(res);
}
export async function adminGetTransactions(token) {
  const res = await fetch(`${BASE_URL}/admin/transactions`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  return handle(res);
}
export async function adminApprove(id, token) {
  const res = await fetch(`${BASE_URL}/admin/transactions/${id}/approve`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` }
  });
  return handle(res);
}
export async function adminReject(id, token) {
  const res = await fetch(`${BASE_URL}/admin/transactions/${id}/reject`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` }
  });
  return handle(res);
    }
