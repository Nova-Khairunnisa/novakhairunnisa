"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Halo juga! Ada yang bisa dibantu?", fromUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="w-72 h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="p-3 font-bold border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white">
            Chatbot Nova
          </div>
          <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.fromUser
                    ? "bg-blue-500 text-white self-end ml-10"
                    : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white mr-10"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input
              className="flex-1 px-2 py-1 rounded border dark:bg-gray-900 dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="px-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleSend}
            >
              Kirim
            </button>
          </div>
        </div>
      )}
      <button
        className="mt-2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg"
        onClick={toggleChat}
      >
        💬
      </button>
    </div>
  );
}
