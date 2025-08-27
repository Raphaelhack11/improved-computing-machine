export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Profit Bliss. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-brand-600">FAQ</a>
            <a href="#about" className="hover:text-brand-600">About</a>
            <a href="mailto:support@profitbliss.com" className="hover:text-brand-600">support@profitbliss.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
    }
