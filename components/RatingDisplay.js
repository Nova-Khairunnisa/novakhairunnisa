"use client";
import { useEffect, useState } from "react";

export default function RatingDisplay({ refreshTrigger }) {
  const [avg, setAvg] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/ratings")
      .then((res) => res.json())
      .then((data) => {
        setAvg(data.average);
        setCount(data.count);
      });
  }, [refreshTrigger]);

  return (
    <div className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
      Rating: <strong>{avg.toFixed(1)}</strong> (from {count} voters)
    </div>
  );
}
