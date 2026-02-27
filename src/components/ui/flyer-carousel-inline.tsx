"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { content } from "@/data/content";
import { cn } from "@/lib/utils";

export function FlyerCarouselInline() {
  const sessions = content.sessions.items;
  const [index, setIndex] = React.useState(0);

  const prev = () =>
    setIndex((current) => (current - 1 + sessions.length) % sessions.length);
  const next = () => setIndex((current) => (current + 1) % sessions.length);

  const session = sessions[index];

  return (
    <div className="mt-10 w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <div className="relative w-full aspect-3/4 bg-zinc-50">
        <Image
          key={session.id}
          src={session.image.src}
          alt={session.image.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>

      <div className="border-t border-zinc-200 px-5 py-4 flex flex-col gap-3">
        <div>
          <p className="text-sm font-semibold text-zinc-900">{session.title}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{session.date}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            aria-label="Previous flyer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
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
                  "h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                  i === index ? "bg-zinc-800" : "bg-zinc-300 hover:bg-zinc-500",
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next flyer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <Link
          href={`/session-${session.id}`}
          className="text-center text-sm font-medium text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          View full-page flyer →
        </Link>
      </div>
    </div>
  );
}
