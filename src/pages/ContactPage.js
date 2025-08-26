export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Need help? Send us a message and we’ll get back to you.
      </p>
      <form className="space-y-4">
        <input className="w-full px-4 py-3 border rounded-lg" placeholder="Your Name" />
        <input className="w-full px-4 py-3 border rounded-lg" placeholder="Email" type="email" />
        <textarea className="w-full px-4 py-3 border rounded-lg" rows="4" placeholder="Message"></textarea>
        <button type="button" className="px-5 py-3 rounded-lg bg-yellow-500 text-white hover:brightness-95">
          Send Message
        </button>
      </form>
    </div>
  );
}
