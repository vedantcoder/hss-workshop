import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function ParticipationSection() {
  return (
    <section
      id="participation"
      className="scroll-mt-24 bg-zinc-100"
      aria-labelledby="participation-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="participation-title"
            className="text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.participation.heading}
          </h2>
        </FadeIn>

        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <ul
                className="grid gap-3 md:grid-cols-2"
                aria-label="Participation details"
              >
                {content.participation.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-zinc-700">
                    <span
                      className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-zinc-300"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
