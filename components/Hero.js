import Image from "next/image";
import inkora1 from '../public/images/inkora2.png'
import inkora2 from '../public/images/inkora2.jpeg'

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
          <div>
            <div className="relative top-0 ">
              <Image className="max-w-[26rem] -rotate-12" src={inkora2} alt="inkora" />
            </div>
            <div className="absolute bottom-0 top-[20rem]">
              <Image className="max-w-[16rem] -rotate-12" src={inkora1} alt="inkora" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
