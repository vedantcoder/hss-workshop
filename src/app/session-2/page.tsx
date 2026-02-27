import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { content } from "@/data/content";

const session = content.sessions.items[1];

export const metadata: Metadata = {
  title: `${session.title} | ${content.seo.title}`,
  description: session.description,
};

export default function Session2Page() {
  return (
    <div className="min-h-dvh bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            aria-label={content.sessions.backLabel}
          >
            <ArrowLeft size={16} />
            <span>{content.sessions.backLabel}</span>
          </Link>
          <span className="text-gray-300 select-none">|</span>
          <span className="text-sm font-medium text-gray-700 truncate">
            {session.title}
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
        <div className="w-full max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
            {session.date}
          </p>
          <h1 className="text-2xl font-serif font-semibold text-gray-900">
            {session.title}
          </h1>
        </div>

        <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg bg-white aspect-3/4">
          <Image
            src={session.image.src}
            alt={session.image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
          />
        </div>

        <nav className="w-full max-w-2xl flex justify-between pt-2">
          <Link
            href="/session-1"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Previous: {content.sessions.items[0].title}
          </Link>
          <Link
            href="/session-3"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Next: {content.sessions.items[2].title}
          </Link>
        </nav>
      </main>
    </div>
  );
}
