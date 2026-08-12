"use client";

import {useState} from "react";
import {LogoMark} from "./Icons";
import Image from "next/image";


const NAV_LINKS = [
    {label: "Services", href: "#services"},
    {label: "What we make", href: "#what-we-make"},
    {label: "Process", href: "#process"},
    {label: "Contact", href: "#contact"},
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 border-b border-black/5 bg-gradient-to-b from-slate-200/95 to-slate-100/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <a href="#top" className="flex items-center gap-2.5">
                    <Image src={'/inkora.webp'} width={100} height={100} alt={'logo'}/>
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="hidden items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800 sm:inline-flex"
                    >
                        Get a quote <span aria-hidden="true">→</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden"
                        aria-expanded={open}
                        aria-label="Toggle navigation menu"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round">
                            {open ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-black/5 bg-slate-100 px-6 py-4 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-sm font-medium text-slate-700"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white"
                        >
                            Get a quote <span aria-hidden="true">→</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
