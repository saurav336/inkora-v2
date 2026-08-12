import { services } from "../data/services";
import { ServiceIcon } from "./Icons";

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-blue-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" aria-hidden="true" />
          WHAT WE DO
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Six disciplines, one brand voice.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          From the first sketch of a mark to the server it runs on &mdash; every piece is
          built to feel like it came from the same studio.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-cyan-accent">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
