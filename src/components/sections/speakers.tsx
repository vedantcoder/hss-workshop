import Image from "next/image";

import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="scroll-mt-24 bg-zinc-100"
      aria-labelledby="speakers-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="speakers-title"
            className="text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.speakers.heading}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.speakers.people.map((speaker) => (
            <Card key={speaker.name} className="h-full">
              <CardContent className="p-5">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-white">
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
                  <p className="text-base font-semibold text-zinc-900">
                    {speaker.name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-700">
                    {speaker.designation}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {speaker.institution}
                  </p>
                  <div className="mt-3">
                    <Badge>{speaker.role}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
