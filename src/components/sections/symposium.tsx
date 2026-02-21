"use client";

import Image from "next/image";

import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";

export function SymposiumSection() {
  return (
    <section
      id="symposium"
      className="scroll-mt-24 bg-blue-50"
      aria-labelledby="symposium-title"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="symposium-title"
            className="section-heading-accent text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.symposium.heading}
          </h2>

          {/* Flyer image */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-blue-100 shadow-lg">
            <Image
              src="/images/flyer.jpeg"
              alt="Event flyer – Symposium on Doing Research 2026"
              width={1240}
              height={1754}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
