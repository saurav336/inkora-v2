import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

const NEEDS = [
  "Logo & brand identity",
  "Print & packaging",
  "Large format & signage",
  "Web & digital design",
  "IT solutions",
  "Promotional & merch",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function readSubmissions() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeSubmissions(submissions) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

function validate(body) {
  const errors = {};
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const need = (body.need || "").trim();
  const details = (body.details || "").trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length > 120) errors.name = "Name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";

  if (need && !NEEDS.includes(need)) errors.need = "Choose a valid option.";

  if (details.length > 4000) errors.details = "Project details are too long.";

  return { errors, value: { name, email, need: need || NEEDS[0], details } };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot field — bots tend to fill every input.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const { errors, value } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please fix the highlighted fields.", fieldErrors: errors }, { status: 422 });
  }

  const submission = {
    id: crypto.randomUUID(),
    ...value,
    createdAt: new Date().toISOString(),
  };

  try {
    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeSubmissions(submissions);
  } catch (err) {
    console.error("Failed to persist contact submission:", err);
    return NextResponse.json({ error: "Something went wrong on our end. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
}

export async function GET() {
  try {
    const submissions = await readSubmissions();
    return NextResponse.json({ submissions });
  } catch (err) {
    console.error("Failed to read contact submissions:", err);
    return NextResponse.json({ error: "Unable to load submissions." }, { status: 500 });
  }
}
