import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { FlyerCarouselInline } from "@/components/ui/flyer-carousel-inline";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="about-title"
            className="section-heading-accent text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.about.heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {content.about.body.map((p, i) => (
              <p
                key={p}
                className={`max-w-prose text-pretty leading-relaxed ${
                  i === 0
                    ? "text-lg text-zinc-800 font-medium"
                    : "text-base text-zinc-600"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Info box */}
          <div className="mt-8 inline-flex flex-col gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 shadow-sm">
            <p className="text-sm font-semibold text-blue-800">
              {content.event.partOfSymposiumNote.replace(".", "")} (26–28
              February).
            </p>
            <div className="flex flex-col gap-1.5 text-sm text-blue-700">
              <span className="flex items-center gap-2">
                <span aria-hidden>📅</span>
                <span>
                  <span className="font-medium">Date:</span> 28 February 2026
                  (Day 3)
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden>📍</span>
                <span>
                  <span className="font-medium">Venue:</span> Department of
                  Humanities and Social Sciences, BITS Pilani, Hyderabad Campus
                </span>
              </span>
            </div>
          </div>

          <FlyerCarouselInline />
        </FadeIn>
      </div>
    </section>
  );
}
