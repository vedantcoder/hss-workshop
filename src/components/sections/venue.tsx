import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { LazyMount } from "@/components/lazy/lazy-mount";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function getMapsEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function getMapsOpenUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}`;
}

export function VenueSection() {
  const embedUrl = getMapsEmbedUrl(content.venue.mapQuery);
  const openUrl = getMapsOpenUrl(content.venue.mapQuery);

  return (
    <section
      id="venue"
      className="scroll-mt-24 bg-yellow-50"
      aria-labelledby="venue-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2
                id="venue-title"
                className="text-3xl font-bold tracking-tight text-zinc-900"
              >
                {content.venue.heading}
              </h2>
              <p className="mt-3 text-sm text-zinc-700">
                <span className="font-medium text-zinc-900">
                  {content.venue.venueName}
                </span>
                {content.venue.venueUnit ? (
                  <>
                    <br />
                    <span className="text-zinc-700">
                      {content.venue.venueUnit}
                    </span>
                  </>
                ) : null}
              </p>
            </div>
            <Button asChild variant="outline">
              <a
                href={openUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={content.venue.openMapsAria}
              >
                {content.venue.openMapsLabel}
              </a>
            </Button>
          </div>
        </FadeIn>

        <div className="mt-8">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <LazyMount
                className="min-h-105"
                placeholder={
                  <div
                    className="flex min-h-105 items-center justify-center bg-white"
                    role="status"
                    aria-label={content.ui.loadingMapAria}
                    aria-busy="true"
                  >
                    <p className="text-sm text-zinc-600">
                      {content.ui.loadingMap}
                    </p>
                  </div>
                }
              >
                <iframe
                  title={content.venue.mapTitle}
                  src={embedUrl}
                  className="h-105 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </LazyMount>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
