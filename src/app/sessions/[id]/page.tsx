import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { content, type SessionFlyer } from "@/data/content";

type Props = { params: Promise<{ id: string }> };

function getSession(id: string): SessionFlyer | undefined {
  return (content.sessions.items as readonly SessionFlyer[]).find(
    (s) => s.id === id
  );
}

export function generateStaticParams() {
  return content.sessions.items.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = getSession(id);
  if (!session) return {};
  return {
    title: `${session.title} | ${content.seo.title}`,
    description: session.description,
  };
}

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();

  const allSessions = content.sessions.items as readonly SessionFlyer[];
  const currentIdx = allSessions.findIndex((s) => s.id === id);
  const prevSession = allSessions[currentIdx - 1] ?? null;
  const nextSession = allSessions[currentIdx + 1] ?? null;

  return (
    <div className="min-h-dvh bg-gray-50 flex flex-col">
      {/* Top bar */}
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

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
        {/* Session info */}
        <div className="w-full max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
            {session.date}
          </p>
          <h1 className="text-2xl font-serif font-semibold text-gray-900">
            {session.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
            {session.description}
          </p>
        </div>

        {/* Flyer image */}
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

        {/* Sibling navigation */}
        <nav
          className="w-full max-w-2xl flex justify-between gap-4 pt-2"
          aria-label="Session navigation"
        >
          {prevSession ? (
            <Link
              href={`/sessions/${prevSession.id}`}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={15} />
              <span>{prevSession.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextSession ? (
            <Link
              href={`/sessions/${nextSession.id}`}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors ml-auto"
            >
              <span>{nextSession.title}</span>
              <ArrowLeft size={15} className="rotate-180" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </div>
  );
}
