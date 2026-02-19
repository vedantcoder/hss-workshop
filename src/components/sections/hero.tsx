import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="border-b border-zinc-200 bg-white"
      aria-label="Event overview"
    >
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
        <FadeIn>
          {/* Title */}
          <h1 className="mx-auto mt-3 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            {content.event.title}
          </h1>

          {/* Date + Venue */}
          <div className="mt-4 flex flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-3">
            <span className="text-sm font-medium text-zinc-500">
              {content.event.date}
            </span>
            <span className="hidden text-zinc-300 sm:block" aria-hidden>
              ·
            </span>
            <span className="text-sm font-medium text-zinc-500">
              {content.event.location.line1}
            </span>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-6 h-px w-12 bg-zinc-200" aria-hidden />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-zinc-600 sm:text-lg">
            {content.event.shortDescription}
          </p>
          {/* CTAs */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="shadow-sm">
              <a
                href={content.registration.formUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={content.hero.primaryCta.ariaLabel}
              >
                {content.hero.primaryCta.label}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm">
              <a href="#about" aria-label={content.hero.secondaryCta.ariaLabel}>
                {content.hero.secondaryCta.label}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
