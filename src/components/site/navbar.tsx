"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { content } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items = content.nav.items;
  const desktopPrimaryItems = items.filter((item) =>
    ["Symposium", "About", "Speakers", "Schedule", "Register"].includes(
      item.label,
    ),
  );
  const sessionItems = [
    { label: "Session 1", href: "/session-1" },
    { label: "Session 2", href: "/session-2" },
    { label: "Session 3", href: "/session-3" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-900/20 bg-blue-950 shadow-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow"
      >
        {content.ui.skipToContent}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label={content.ui.scrollToTopAria}
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-white/20 bg-white">
            <Image
              src={content.nav.logo.src}
              alt={content.nav.logo.alt}
              fill
              className="object-contain"
              sizes="32px"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            {content.nav.brand}
          </span>
          <span className="hidden flex-col text-xs text-blue-200 lg:flex">
            <span>{content.nav.brandSubtitle1}</span>
            <span>{content.nav.brandSubtitle2}</span>
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            className="flex items-center gap-1"
            aria-label={content.ui.primaryNavAria}
          >
            {desktopPrimaryItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-blue-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="h-6 w-px bg-white/20" aria-hidden />

          <nav className="flex items-center gap-1" aria-label="Session pages">
            {sessionItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label={
              open ? content.ui.closeMenuAria : content.ui.openMenuAria
            }
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="text-lg">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn("md:hidden", open ? "block" : "hidden")}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div className="rounded-xl border border-white/10 bg-blue-900 p-2 shadow-lg">
            <nav aria-label={content.ui.mobileNavAria} className="flex flex-col">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-blue-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" aria-hidden />
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                Session Posters
              </p>

              {sessionItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
