import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="min-h-[70vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-5xl font-black text-brand-500">404</h1>
        <p className="text-gray-600 mt-2">Page not found</p>
        <Link to="/" className="mt-4 inline-block px-4 py-2 rounded-lg bg-brand-500 text-white">Go Home</Link>
      </div>
    </div>
  );
}
