import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="wave-navy-down relative bg-ink-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-cyan-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" aria-hidden="true" />
          HOW A JOB MOVES
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          From brief to press to launch.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          The same four stages whether the output is a business card or a full website.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cyan-accent font-mono text-sm font-bold text-cyan-accent">
                  {step.number}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="ml-4 hidden h-px flex-1 bg-slate-700 lg:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
