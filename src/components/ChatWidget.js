import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState(() => JSON.parse(localStorage.getItem("pb_chat") || "[]"));
  const endRef = useRef(null);

  useEffect(() => { localStorage.setItem("pb_chat", JSON.stringify(msgs)); }, [msgs]);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  function send() {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { id: Date.now(), from: "you", text }]);
    setText("");
    // You can POST to backend later: /api/support/message
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-brand-500 hover:bg-brand-600 text-white shadow-glossy"
        title="Chat with us"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl border shadow-glossy overflow-hidden">
          <div className="px-4 py-3 border-b font-semibold text-brand-700">Chat with us</div>
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
            {msgs.map((m) => (
              <div key={m.id} className={`max-w-[80%] p-2 rounded-xl ${m.from==='you'?'bg-brand-50 self-end ml-auto':'bg-gray-100'} `}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex p-3 gap-2 border-t">
            <input
              className="flex-1 border rounded-lg px-3 py-2"
              placeholder="Type message..."
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
            <button onClick={send} className="px-3 py-2 rounded-lg bg-brand-500 text-white">Send</button>
          </div>
        </div>
      )}
    </>
  );
        }
