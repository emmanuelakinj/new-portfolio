"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],

  ["Projects", "/projects"],
  ["Blog", "/blog"],
];

export function PortfolioHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex min-h-22 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Emmanuel home"
            className="font-serif text-3xl tracking-[-0.06em]"
          >
            Emmanuel Akinjogunla
          </Link>
          <div className="hidden items-center gap-7 text-[13px] md:flex">
            {navigation.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 py-2 transition-colors hover:text-blue-deep"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-3 rounded-full bg-navy px-5 py-2.5 text-xs font-medium text-paper transition-colors hover:bg-blue-deep"
            >
              Contact
            </Link>
          </div>
          <button
            id="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
            className="p-2 md:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <div
          id="mobile-navigation"
          hidden={!open}
          className="border-t border-navy/10 pb-5 md:hidden"
        >
          {navigation.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm hover:text-blue-deep"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-11 items-center gap-3 rounded-full bg-navy px-5 py-2.5 text-xs font-medium text-paper transition-colors hover:bg-blue-deep"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
