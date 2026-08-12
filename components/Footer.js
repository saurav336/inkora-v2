import { LogoMark } from "./Icons";

const STUDIO_LINKS = [
  { label: "Services", href: "#services" },
  { label: "What we make", href: "#what-we-make" },
  { label: "Process", href: "#process" },
];

const CONNECT_LINKS = [
  { label: "Contact", href: "#contact" },
  { label: "Get a quote", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight text-white">
                INK<span className="text-cyan-accent">ORA</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A studio for brand identity, print production and IT solutions &mdash;
              designed, proofed and delivered under one roof.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-500">
              STUDIO
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {STUDIO_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-500">
              CONNECT
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {CONNECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; 2026 Inkora Studio. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-slate-500">
            BRANDING &middot; PRINT &middot; IT SOLUTIONS
          </p>
        </div>
      </div>
    </footer>
  );
}
