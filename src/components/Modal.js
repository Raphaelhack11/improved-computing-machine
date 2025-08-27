import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose, ctaText, onCta }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-glossy p-6 relative">
        <h3 className="text-xl font-bold text-brand-700 mb-2">{title}</h3>
        <div className="text-gray-600 mb-6">{children}</div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">Close</button>
          {onCta && (
            <button onClick={onCta} className="px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600">
              {ctaText || "OK"}
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
            }
