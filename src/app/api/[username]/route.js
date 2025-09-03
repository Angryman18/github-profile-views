import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// --- Helper: Get count from Redis ---
async function getCount(username) {
  try {
    const count = await redis.get(`profile_views:${username}`);
    return count ? parseInt(count, 10) : 0;
  } catch (err) {
    console.error("Redis get error:", err);
    return 0;
  }
}

// --- Helper: Set count in Redis ---
async function setCount(username, count) {
  try {
    await redis.set(`profile_views:${username}`, count);
    return true;
  } catch (err) {
    console.error("Redis set error:", err);
    return false;
  }
}

// --- Helper: Increment count in Redis ---
async function incrementCount(username) {
  try {
    const newCount = await redis.incr(`profile_views:${username}`);
    return newCount;
  } catch (err) {
    console.error("Redis increment error:", err);
    // Fallback: get current count and increment manually
    const currentCount = await getCount(username);
    const newCount = currentCount + 1;
    await setCount(username, newCount);
    return newCount;
  }
}

// --- SVG Generator ---
function generateSVG(count) {
  const countStr = String(count);

  return `<?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" width="240" height="110">
  <style>
    @font-face { 
    font-family: &apos;JetBrains Mono&apos;; 
    font-style: normal; 
    font-weight: 700; 
    font-weight: bold;
    src: url(&apos;https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbf2o-flEEny0FZ6hZz5hs6vWJi6wY.woff2&apos;) format(&apos;woff2&apos;); }
    
    @font-face { 
    font-family: &apos;Oswald&apos;; 
    font-style: normal; 
    font-weight: 700; 
    font-weight: bold;
    src: url(&apos;https://fonts.gstatic.com/s/oswald/v48/TK3iWkUHHAIjg75cFRf3bXL8LICs1vA.woff2&apos;) format(&apos;woff2&apos;); }
    
    .label { font-family: &apos;JetBrains Mono&apos;, monospace; font-size: 22px; font-weight: 700; fill: #e5e7eb; letter-spacing: 2px; text-transform: uppercase; } .counter { font-family: &apos;JetBrains Mono&apos;, monospace; font-size: 44px; font-weight: 700; fill: #ffffff; }
  </style>
<!--Background-->
  <rect width="100%" height="100%" rx="20" ry="20" fill="#1e293b" stroke="#334155" stroke-width="3">
  </rect>
<!--Label-->
  <text x="50%" y="36" class="label" text-anchor="middle" dominant-baseline="middle"> Profile Views
 </text>
<!--Counter-->
  <text x="50%" y="75" class="counter" text-anchor="middle" dominant-baseline="middle"> ${countStr}
 </text>
</svg>`;
}

// --- Route Handler ---
export async function GET(req, { params }) {
  const { username = "" } = (await params) ?? {};

  // validate
  if (!username || username.length > 39) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  // load counts
  const counts = await getCount(username);

  // increment
  const newCount = await incrementCount(username);

  // build svg
  const svg = generateSVG(newCount);

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
