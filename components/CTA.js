export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-blue-accent/40 py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          Have a brand to build, print, or put online?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          Tell us what you&rsquo;re working on &mdash; we&rsquo;ll tell you which of our
          six teams it needs.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex items-center rounded-full bg-cyan-accent px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-lg transition hover:brightness-95"
        >
          Start a project
        </a>
      </div>
    </section>
  );
}
