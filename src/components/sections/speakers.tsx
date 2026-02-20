import Image from "next/image";

import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="scroll-mt-24 bg-blue-50"
      aria-labelledby="speakers-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="speakers-title"
            className="section-heading-accent text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.speakers.heading}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.speakers.people.map((speaker, i) => {
            const rings = [
              "ring-blue-400",
              "ring-emerald-400",
              "ring-yellow-400",
              "ring-sky-400",
            ];
            const bgs = [
              "bg-blue-50",
              "bg-emerald-50",
              "bg-yellow-50",
              "bg-sky-50",
            ];
            const badgeColors = [
              "bg-blue-100 text-blue-700",
              "bg-emerald-100 text-emerald-700",
              "bg-yellow-100 text-yellow-700",
              "bg-sky-100 text-sky-700",
            ];
            return (
              <a
                key={speaker.name}
                href={speaker.profileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View profile of ${speaker.name} (opens in a new tab)`}
                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-5">
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-xl ring-4 ${rings[i % 4]} ${bgs[i % 4]}`}
                    >
                      <Image
                        src={speaker.image.src}
                        alt={speaker.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority={false}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-base font-semibold text-zinc-900 group-hover:text-blue-700 transition-colors">
                        {speaker.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-700">
                        {speaker.designation}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {speaker.institution}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[i % 4]}`}
                        >
                          {speaker.role}
                        </span>
                        {speaker.profileUrl && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors group-hover:text-blue-800">
                            View profile
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="size-3"
                              aria-hidden
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
