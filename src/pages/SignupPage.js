import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../utils/api";

const REF_CODE = "tmdf28dns";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", phone: "", country: "United States", currency: "USD", ref: ""
  });
  const [refValid, setRefValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  function onChange(e) {
    const { name, value } = e.target;
    let next = { ...form, [name]: value };

    if (name === "country") {
      if (value === "Canada") next.currency = "CAD";
      else if (value === "United Kingdom") next.currency = "GBP";
      else if (value === "Germany") next.currency = "EUR";
      else next.currency = "USD";
    }
    setForm(next);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (form.ref && form.ref !== REF_CODE) {
      setRefValid(false);
      return;
    }
    setRefValid(true);
    try {
      setLoading(true);
      const data = await signup({ name: form.name, email: form.email, password: form.password });
      if (data.userId) {
        // store country/currency locally for now
        localStorage.setItem("pb_profile_extra", JSON.stringify({ phone: form.phone, country: form.country, currency: form.currency }));
        alert("Signup successful. Please login.");
        nav("/login");
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-white border rounded-2xl p-6 shadow-glossy">
        <h1 className="text-2xl font-bold text-brand-700 mb-4">Create account</h1>
        <div className="grid md:grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="border rounded-lg px-3 py-2" />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="border rounded-lg px-3 py-2" />
        </div>
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" className="mt-3 w-full border rounded-lg px-3 py-2" />
        <input name="password" value={form.password} onChange={onChange} placeholder="Password" type="password" className="mt-3 w-full border rounded-lg px-3 py-2" />

        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <select name="country" value={form.country} onChange={onChange} className="border rounded-lg px-3 py-2">
            <option>Canada</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Germany</option>
          </select>
          <input readOnly value={form.currency} className="border rounded-lg px-3 py-2 bg-gray-50" />
        </div>

        <div className="mt-3">
          <label className="text-sm text-gray-500">Referral code (optional)</label>
          <input
            name="ref" value={form.ref} onChange={onChange}
            className={`w-full border rounded-lg px-3 py-2 ${!refValid ? "border-red-500 animate-[wiggle_0.2s_ease-in-out_2]" : ""}`}
            placeholder="tmdf28dns"
          />
          {!refValid && <p className="text-red-600 text-sm mt-1">Invalid referral code</p>}
        </div>

        <button disabled={loading} className="mt-4 w-full rounded-lg bg-brand-500 text-white py-2 hover:bg-brand-600">
          {loading ? "Creating..." : "Sign up"}
        </button>
      </form>
    </div>
  );
  }
