import { whyInkora } from "../data/whyInkora";

export default function WhyInkora() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-blue-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-accent" aria-hidden="true" />
            WHY INKORA
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Design, print and IT under one roof.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Most studios hand you a logo and stop. Most printers never touch your brand
            guidelines. Inkora does both &mdash; plus the digital side &mdash; so nothing
            gets lost in the handoff.
          </p>
        </div>

        <dl className="flex flex-col gap-10">
          {whyInkora.map((item) => (
            <div key={item.number} className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="font-mono text-sm font-bold text-blue-accent">
                {item.number}
              </span>
              <div>
                <dt className="text-base font-semibold text-slate-900">{item.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
