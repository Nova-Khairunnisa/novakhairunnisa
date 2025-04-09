// app/api/ratings/route.js
import { getRatings, addRating } from "../../../db";

export async function GET() {
  const ratings = await getRatings();
  const total = ratings.reduce((sum, r) => sum + r, 0);
  const average = ratings.length ? total / ratings.length : 0;
  return Response.json({ average, count: ratings.length });
}

export async function POST(req) {
  const { rating } = await req.json();
  await addRating(rating);
  return Response.json({ success: true });
}
