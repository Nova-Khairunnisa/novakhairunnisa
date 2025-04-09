// app/api/comments/route.js
import { getComments, addComment } from "../../../db";

export async function GET() {
  try {
    const comments = await getComments();
    return Response.json(comments);
  } catch (err) {
    console.error("API GET error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, message } = await req.json();
    const newComment = await addComment({ name, message });
    return Response.json(newComment);
  } catch (err) {
    console.error("API POST error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
