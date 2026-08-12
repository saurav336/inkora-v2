"use client";

import { useState } from "react";

const CONTACT_INFO = [
  { label: "Email", value: "hello@inkora.studio" },
  { label: "Phone", value: "Add your studio number" },
  { label: "Studio", value: "Add your studio address" },
  { label: "Hours", value: "Mon\u2013Sat, 9:00\u201318:00" },
];

const NEEDS = [
  "Logo & brand identity",
  "Print & packaging",
  "Large format & signage",
  "Web & digital design",
  "IT solutions",
  "Promotional & merch",
];

const INITIAL_FORM = { name: "", email: "", need: NEEDS[0], details: "", company: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error
  const [fieldErrors, setFieldErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setFieldErrors(data.fieldErrors || {});
        return;
      }

      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-blue-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" aria-hidden="true" />
            GET IN TOUCH
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tell us about the job.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Whether it&rsquo;s a full brand system or a single print run, send the
            details and we&rsquo;ll follow up with next steps and a quote.
          </p>

          <dl className="mt-10 grid max-w-sm grid-cols-1 gap-5">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="grid grid-cols-[6rem_1fr] gap-2 border-b border-slate-200 pb-4">
                <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-accent">
                  {item.label}
                </dt>
                <dd className="text-sm text-slate-700">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
        >
          {/* Honeypot — hidden from real users, catches simple bots */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(fieldErrors.name)}
                className={`w-full rounded-lg border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  fieldErrors.name ? "border-red-400 focus:border-red-400" : "border-slate-300 focus:border-blue-accent"
                }`}
              />
              {fieldErrors.name && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                aria-invalid={Boolean(fieldErrors.email)}
                className={`w-full rounded-lg border bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  fieldErrors.email ? "border-red-400 focus:border-red-400" : "border-slate-300 focus:border-blue-accent"
                }`}
              />
              {fieldErrors.email && <p className="mt-1.5 text-xs text-red-500">{fieldErrors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="need" className="mb-1.5 block text-sm font-semibold text-slate-900">
              What do you need?
            </label>
            <select
              id="need"
              name="need"
              value={form.need}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-accent focus:bg-white focus:outline-none"
            >
              {NEEDS.map((need) => (
                <option key={need} value={need}>
                  {need}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="details" className="mb-1.5 block text-sm font-semibold text-slate-900">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us about your brand, timeline and scope"
              className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-accent focus:bg-white focus:outline-none"
            />
          </div>

          {status === "error" && errorMessage && (
            <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-brand-gradient py-3.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending…" : status === "sent" ? "Details sent ✓" : "Send project details"}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500" role="status">
            {status === "sent"
              ? "Thanks — we'll follow up within one business day."
              : "We usually reply within one business day."}
          </p>
        </form>
      </div>
    </section>
  );
}
