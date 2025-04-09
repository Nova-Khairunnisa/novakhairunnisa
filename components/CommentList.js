import { useEffect, useState } from "react";

export default function CommentList({ newComment }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal fetch komentar");
        return res.json();
      })
      .then((data) => setComments(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setComments([]);
      });
  }, []);

  useEffect(() => {
    if (newComment) {
      setComments((prev) => [newComment, ...prev]);
    }
  }, [newComment]);

  return (
    <div className="space-y-4 mt-4">
      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm">Belum ada komentar.</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {comment.message}
            </p>
            <p className="text-xs text-gray-400">{comment.createdAt}</p>
          </div>
        ))
      )}
    </div>
  );
}
