import { outputs } from "../data/outputs";
import { OutputArt } from "./Icons";

export default function WhatWeMake() {
  return (
    <section id="what-we-make" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-blue-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" aria-hidden="true" />
          OUTPUT, NOT JUST IDEAS
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What we make.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          A sample of the physical and digital pieces a brand system turns into.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outputs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-paper p-6 transition hover:border-slate-300 hover:shadow-card"
            >
              <div className="flex items-center justify-center rounded-lg bg-white">
                <OutputArt type={item.art} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
