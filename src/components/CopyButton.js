export default function CopyButton({ value }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(value)}
      className="px-3 py-1 rounded-lg bg-brand-500 text-white hover:bg-brand-600 text-sm"
    >
      Copy
    </button>
  );
}
