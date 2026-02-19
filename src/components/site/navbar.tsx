"use client";

import * as React from "react";
import Image from "next/image";

import { content } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow"
      >
        {content.ui.skipToContent}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
          aria-label={content.ui.scrollToTopAria}
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white">
            <Image
              src={content.nav.logo.src}
              alt={content.nav.logo.alt}
              fill
              className="object-contain"
              sizes="32px"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            {content.nav.brand}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={content.ui.primaryNavAria}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="ml-2">
            <a
              href={content.nav.registerButton.href}
              target="_blank"
              rel="noreferrer"
              aria-label={content.ui.registerNewTabAria}
            >
              {content.nav.registerButton.label}
            </a>
          </Button>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
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
          <div className="rounded-xl border border-zinc-200/80 bg-white p-2 shadow-sm">
            <nav aria-label="Mobile" className="flex flex-col">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="p-2">
                <Button asChild className="w-full">
                  <a
                    href={content.nav.registerButton.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={content.ui.registerNewTabAria}
                    onClick={() => setOpen(false)}
                  >
                    {content.nav.registerButton.label}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
