import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-emerald-500"
      aria-label="Event overview"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/10 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <FadeIn>
          {/* Title */}
          <h1 className="mx-auto mt-3 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Workshop on Mapping the Progressive Writers&apos; Movement
          </h1>

          {/* Date + Venue */}
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <span aria-hidden>📅</span> {content.event.date}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <span aria-hidden>📍</span> {content.event.location.line1}
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-blue-100 sm:text-lg">
            {content.event.shortDescription}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 font-semibold text-yellow-900 shadow-xl hover:bg-yellow-300"
            >
              <a
                href="#register"
                aria-label={content.hero.primaryCta.ariaLabel}
              >
                {content.hero.primaryCta.label}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
