"use client";

import Link from "next/link";
import { useState } from "react";
import NavbarLink from "./NavbarLink";

const NAV_ITEMS = [
  { title: "hero", href: "#hero" },
  { title: "work", href: "#work" },
  { title: "stack", href: "#stack" },
  { title: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        <div className="flex items-center lg:flex-1 gap-4 font-black text-xl uppercase tracking-tighter">
          <Link href={"/"}>Sebastian_Götze</Link>
          <Link
            // cv ändern
            href={"/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-bold uppercase border-2 border-black hover:bg-black hover:text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            Open CV
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center gap-8 font-mono text-xs font-bold tracking-widest">
          {NAV_ITEMS.map((item) => (
            <NavbarLink
              key={item.title}
              href={item.href}
              title={item.title}
              onClick={closeMobileMenu}
            />
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Navigation umschalten"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="lg:hidden font-mono text-xs font-bold uppercase border-2 border-black hover:bg-black hover:text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            {isMobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 bg-white border-b-2 border-black lg:hidden"
        >
          <div className="flex flex-col items-center gap-6 py-8 font-mono text-xs font-bold tracking-widest">
            {NAV_ITEMS.map((item) => (
              <NavbarLink
                key={item.title}
                href={item.href}
                title={item.title}
                onClick={closeMobileMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
