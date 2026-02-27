"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { content } from "@/data/content";
import { cn } from "@/lib/utils";

export function FlyerCarouselModal() {
  const [open, setOpen] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const sessions = content.sessions.items;

  // Lock scroll while open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
  };

  const prev = () =>
    setIndex((i) => (i - 1 + sessions.length) % sessions.length);
  const next = () => setIndex((i) => (i + 1) % sessions.length);

  // Keyboard support
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const session = sessions[index];

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      aria-modal="true"
      role="dialog"
      aria-label="Event flyers"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-lg max-h-[90dvh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 shrink-0">
          <span className="text-sm font-medium text-gray-500">
            {index + 1} / {sessions.length}
          </span>
          <button
            onClick={close}
            aria-label="Close flyer preview"
            className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            <X size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="relative h-[62dvh] sm:h-[68dvh] bg-gray-50">
          <Image
            key={session.id}
            src={session.image.src}
            alt={session.image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 512px"
            priority
          />
        </div>

        {/* Caption + nav */}
        <div className="shrink-0 px-5 py-4 flex flex-col gap-3 border-t border-gray-100">
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-snug">
              {session.title}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{session.date}</p>
          </div>

          {/* Dot indicators + arrows */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Previous flyer"
              className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-1.5">
              {sessions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to flyer ${i + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",
                    i === index
                      ? "bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-500",
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next flyer"
              className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <Link
            href={`/session-${session.id}`}
            onClick={close}
            className="text-center text-sm font-medium text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            View full-page flyer →
          </Link>
        </div>
      </div>
    </div>
  );
}
