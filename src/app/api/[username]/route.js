import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const countsFile = path.join(process.cwd(), "view_counts.txt");

// --- Helper: Load counts from file ---
async function loadCounts() {
  try {
    const data = await fs.readFile(countsFile, "utf-8");
    const lines = data.split("\n").filter(Boolean);
    const map = {};
    for (const line of lines) {
      const [username, count] = line.split(":");
      map[username] = parseInt(count, 10) || 0;
    }
    return map;
  } catch (err) {
    if (err.code === "ENOENT") return {}; // file not found
    throw err;
  }
}

// --- Helper: Save counts ---
async function saveCounts(counts) {
  const lines = Object.entries(counts).map(([u, c]) => `${u}:${c}`);
  await fs.writeFile(countsFile, lines.join("\n"), "utf-8");
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
</svg>`
}

// --- Route Handler ---
export async function GET(req, { params }) {
  const { username = "" } = await params ?? {};

  // validate
  if (!username || username.length > 39) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  // load counts
  const counts = await loadCounts();

  // increment
  counts[username] = (counts[username] || 0) + 1;

  // save
  await saveCounts(counts);

  // build svg
  const svg = generateSVG(counts[username]);

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
