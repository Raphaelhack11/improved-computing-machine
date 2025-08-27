import axios from "axios";

const API_URL = "https://profit-bliss-backend-1.onrender.com/"; // 🔴 replace with your backend URL

export const signup = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/signup`, { email, password });
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data;
};

export const getBalance = async (token) => {
  const res = await axios.get(`${API_URL}/dashboard/balance`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deposit = async (token, amount) => {
  const res = await axios.post(
    `${API_URL}/transactions/deposit`,
    { amount },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const withdraw = async (token, amount) => {
  const res = await axios.post(
    `${API_URL}/transactions/withdraw`,
    { amount },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const getTransactions = async (token) => {
  const res = await axios.get(`${API_URL}/transactions/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
