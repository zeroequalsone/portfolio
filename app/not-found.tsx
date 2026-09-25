import { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center px-4 py-12 md:px-12 md:py-24">
      <header className="mb-12 flex justify-between items-end border-b-2 border-black pb-4">
        <p className="font-mono text-sm uppercase tracking-widest">Index_00</p>
        <div
          className="font-mono text-sm uppercase tracking-widest flex items-center gap-2"
          aria-label="Status: Page not found"
        >
          <span>Status</span>
          <span className="size-3 rounded-full border border-black" />
          <span>Not found</span>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center lg:gap-24 gap-8 max-w-xl mx-auto">
        <div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-6">
            404.
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight flex items-center gap-4">
            <span className="w-12 h-1 bg-black hidden sm:block" />
            Seite nicht gefunden
          </div>
        </div>
        <p className="text-lg md:text-xl font-medium leading-relaxed w-2xs text-center">
          Diese Route gibt es{" "}
          <span className="bg-black text-white inline-flex justify-center py-1 w-16 cursor-default hover:bg-white hover:text-black active:bg-white active:text-black">
            nicht
          </span>{" "}
          — zumindest nicht mehr.
          <br />
          Vielleicht falsch abgebogen?
        </p>
        <Link
          href={"/"}
          aria-label={`Back to home`}
          className={`border-2 px-4 py-3 flex justify-between items-center hover:-translate-y-1 hover:-translate-x-1 hover:bg-white transition-all active:translate-x-0 active:translate-y-0 active:shadow-none border-orbit-border shadow-[4px_4px_0px_0px_var(--color-orbit-shadow)] hover:shadow-[6px_6px_0px_0px_var(--color-orbit-shadow)] hover:text-black font-mono text-sm uppercase font-bold w-full`}
        >
          <span>Back to home</span>
          <FiArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
