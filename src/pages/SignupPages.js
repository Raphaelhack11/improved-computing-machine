import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    referral: "",
    country: "",
    currency: "",
  });

  const countryCurrencyMap = {
    Canada: "CAD",
    "United States": "USD",
    "United Kingdom": "GBP",
    Germany: "EUR",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setForm({ ...form, country: value, currency: countryCurrencyMap[value] || "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (form.referral && form.referral !== "tmdf28dns") {
      alert("Invalid referral code");
      return;
    }
    alert("Signup successful! (frontend demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full px-4 py-3 border rounded-lg" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input className="w-full px-4 py-3 border rounded-lg" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <input className="w-full px-4 py-3 border rounded-lg" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
          <input className="w-full px-4 py-3 border rounded-lg" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <input className="w-full px-4 py-3 border rounded-lg" name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />

          <input className="w-full px-4 py-3 border rounded-lg" name="referral" placeholder="Referral Code (optional)" value={form.referral} onChange={handleChange} />

          <select className="w-full px-4 py-3 border rounded-lg" name="country" value={form.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="Canada">Canada (CAD)</option>
            <option value="United States">United States (USD)</option>
            <option value="United Kingdom">United Kingdom (GBP)</option>
            <option value="Germany">Germany (EUR)</option>
          </select>

          <input className="w-full px-4 py-3 border rounded-lg bg-gray-100" name="currency" placeholder="Currency" value={form.currency} readOnly />

          <button type="submit" className="w-full py-3 rounded-lg bg-yellow-500 text-white font-semibold hover:brightness-95">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-600 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}
