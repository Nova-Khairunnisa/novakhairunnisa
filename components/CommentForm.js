// components/CommentForm.js
"use client";
import { useState } from "react";

export default function CommentForm({ onCommentAdded }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name, text }),
    });

    if (res.ok) {
      const newComment = await res.json();
      onCommentAdded(newComment);
      setName("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-6">
      <input
        className="w-full p-2 border rounded"
        placeholder="Nama Anda"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Tulis komentar..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Kirim Komentar
      </button>
    </form>
  );
}
