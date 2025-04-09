// db.js

// KOMENTAR
let comments = [];

export function getComments() {
  return Promise.resolve(comments);
}

export function addComment(comment) {
  const newComment = {
    id: Date.now(),
    name: comment.name,
    message: comment.message,
    createdAt: new Date().toLocaleString("id-ID"),
  };
  comments.push(newComment);
  return Promise.resolve(newComment);
}

// RATING ⭐️
let ratings = [];

export function addRating(rating) {
  ratings.push(Number(rating)); // pastikan disimpan sebagai angka
  return Promise.resolve();
}

export function getRatings() {
  return Promise.resolve(ratings);
}
