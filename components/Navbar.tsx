"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black flex justify-between items-center px-4 py-3 lg:px-8">
      <div className="flex flex-1 gap-2 font-black text-xl uppercase tracking-tighter">
        <Link href={"/"}>Sebastian_Götze</Link>
        <Link
          // cv ändern
          href={"/cv.pdf"}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs font-bold uppercase border-2 border-black hover:bg-black hover:text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
        >
          Open CV
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-center gap-8 font-mono text-xs font-bold tracking-widest">
        <Link
          href={"#index_01"}
          className="hover:bg-black hover:text-white px-2 py-1 transition-colors hover:"
        >
          hero
        </Link>
        <Link
          href={"#index_02"}
          className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
        >
          work
        </Link>
        <Link
          href={"#index_03"}
          className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
        >
          stack
        </Link>
        <Link
          href={"#index_04"}
          className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
        >
          contact
        </Link>
      </div>
      <div className="flex flex-1"></div>
      <button className="lg:hidden font-mono text-xs font-bold uppercase border-2 border-black hover:bg-black hover:text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
        Menu
      </button>
    </nav>
  );
}
