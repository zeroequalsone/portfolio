"use client";
import Link from "next/link";
import { useState } from "react";

export default function CopyEmailLink() {
  const email = "goetze.seb@gmail.com";
  const [copied, setCopied] = useState(false);

  function handleClick() {
    if (copied) return;
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Link
      href={`mailto:${email}`}
      onClick={handleClick}
      aria-live="polite"
      className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter mb-8 leading-[0.85] block hover:text-neutral-300 w-fit"
    >
      {copied ? "Copied!" : "Let's Talk!"}
    </Link>
  );
}
