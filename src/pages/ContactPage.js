import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);

  function onChange(e){ setForm({ ...form, [e.target.name]: e.target.value }); }
  function onSubmit(e){ e.preventDefault(); setSent(true); /* hook backend later */ }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700">Contact Us</h1>
      <p className="text-gray-600 mt-1">We typically reply within 24 hours.</p>

      {sent ? (
        <div className="mt-6 p-4 rounded-xl bg-green-50 text-green-700">Message sent! We’ll respond soon.</div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="border rounded-lg px-3 py-2" />
          <input name="email" value={form.email} onChange={onChange} placeholder="Your email" type="email" className="border rounded-lg px-3 py-2" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" className="border rounded-lg px-3 py-2"></textarea>
          <button className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600 w-max">Send</button>
        </form>
      )}
    </div>
  );
        }
