import { LogoMark } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="wave-cyan-down relative overflow-hidden bg-ink-900 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        {/* Copy */}
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" aria-hidden="true" />
            BRANDING &middot; PRINT &middot; IT SOLUTIONS
          </p>

          <h1 className="text-balance mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Identity you can{" "}
            <span className="bg-gradient-to-r from-blue-accent to-cyan-accent bg-clip-text text-transparent">
              hold
            </span>{" "}
            &mdash; and systems that{" "}
            <span className="bg-gradient-to-r from-blue-accent to-cyan-accent bg-clip-text text-transparent">
              run
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Inkora designs the logo and brand system, produces the print and packaging
            that carries it into the world, and builds the digital tools that keep it
            working. One studio, start to finish.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-accent/20 transition hover:brightness-110"
            >
              Start a project
            </a>
            <a
              href="#what-we-make"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See what we make
            </a>
          </div>
        </div>

        {/* Press proof polaroid mockup */}
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-6 lg:max-w-none lg:justify-end lg:py-0">
          <div className="relative w-full max-w-xs -rotate-6 rounded-md bg-white p-3 pb-8 shadow-polaroid sm:max-w-sm">
            <span className="absolute -top-3 right-4 rotate-3 rounded bg-cyan-accent px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide text-ink-900 shadow">
              PRESS PROOF
            </span>

            <div className="flex aspect-square items-center justify-center rounded-sm bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400">
              <div className="flex flex-col items-center gap-3">
                <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
                <span className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl">
                  INK<span className="text-blue-accent">ORA</span>
                </span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded bg-slate-100 px-2 py-1 font-mono text-[10px] font-medium text-slate-600">
                C:88 M:70 Y:5 K:0
              </span>
              <span className="rounded bg-slate-100 px-2 py-1 font-mono text-[10px] font-medium text-slate-600">
                PANTONE 2145C
              </span>
              <span className="ml-auto font-mono text-[10px] font-medium text-slate-400">
                JOB #0142
              </span>
            </div>

            <div className="absolute -bottom-6 -left-6 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border-2 border-stamp/80 text-center font-mono text-[9px] font-bold uppercase leading-tight text-stamp/80">
              Approved
              <br />
              for print
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
