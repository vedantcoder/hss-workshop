import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { LazyMount } from "@/components/lazy/lazy-mount";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function RegisterSection() {
  return (
    <section
      id="register"
      className="scroll-mt-24 bg-zinc-100"
      aria-labelledby="register-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2
                id="register-title"
                className="text-3xl font-bold tracking-tight text-zinc-900"
              >
                {content.registration.heading}
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-600">
                {content.registration.description}
              </p>
            </div>
            <Button asChild size="lg">
              <a
                href={content.registration.formUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open registration form in a new tab"
              >
                {content.registration.openButtonLabel}
              </a>
            </Button>
          </div>
        </FadeIn>

        <div className="mt-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <LazyMount
                className="min-h-140"
                placeholder={
                  <div
                    className="flex min-h-140 items-center justify-center bg-white"
                    role="status"
                    aria-label={content.ui.loadingFormAria}
                    aria-busy="true"
                  >
                    <p className="text-sm text-zinc-600">
                      {content.ui.loadingForm}
                    </p>
                  </div>
                }
              >
                <iframe
                  title={content.registration.embedTitle}
                  src={content.registration.formUrl}
                  className="h-180 w-full"
                  loading="lazy"
                />
              </LazyMount>
            </CardContent>
          </Card>
          <p className="mt-3 text-xs text-zinc-500">
            {content.registration.embedFallback}
          </p>

          <div className="mt-8 rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-zinc-900">
              {content.registration.formWhatItAsks.heading}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              {content.registration.formWhatItAsks.formTitle}
            </p>
            <ul
              className="mt-4 space-y-2"
              aria-label={content.registration.formWhatItAsks.heading}
            >
              {content.registration.formWhatItAsks.items.map((item) => (
                <li key={item} className="text-sm text-zinc-700">
                  <span className="mr-2 text-zinc-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
