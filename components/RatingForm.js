"use client";
import { useState } from "react";

export default function RatingForm({ onRatingSubmitted }) {
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);

  const submitRating = async () => {
    if (selected === 0) return;

    setLoading(true);
    await fetch("/api/ratings", {
      method: "POST",
      body: JSON.stringify({ rating: selected }),
    });
    onRatingSubmitted(selected);
    setLoading(false);
  };

  return (
    <div className="text-center mt-4">
      <p className="mb-2">Beri rating website ini:</p>
      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`cursor-pointer text-2xl ${
              num <= selected ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => setSelected(num)}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={submitRating}
        disabled={loading || selected === 0}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        {loading ? "Mengirim..." : "Kirim Rating"}
      </button>
    </div>
  );
}
