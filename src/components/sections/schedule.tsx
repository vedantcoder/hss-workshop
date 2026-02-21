import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="scroll-mt-24 bg-white"
      aria-labelledby="schedule-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="schedule-title"
            className="section-heading-accent text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.schedule.heading}
          </h2>
        </FadeIn>

        <ol className="mt-10" aria-label="Workshop schedule">
          {content.schedule.days.map((day) => (
            <li key={day.date} className="relative">
              <Card className="h-full w-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {day.dayLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-zinc-900">
                        {day.date}
                      </p>
                      <p className="mt-2 text-base font-semibold text-zinc-900">
                        {day.title}
                      </p>
                    </div>
                    {day.highlight ? <Badge>{day.highlight}</Badge> : null}
                  </div>

                  <div className="mt-5 border-l-2 border-blue-200 pl-5">
                    <ul className="space-y-3">
                      {day.items.map((item, idx) => {
                        const dotColors = [
                          "bg-blue-400",
                          "bg-emerald-400",
                          "bg-yellow-400",
                          "bg-sky-400",
                        ];
                        return (
                          <li
                            key={item}
                            className="relative text-sm text-zinc-700"
                          >
                            <span
                              className={`absolute -left-[1.45rem] top-1.5 h-2.5 w-2.5 rounded-full ${dotColors[idx % 4]}`}
                              aria-hidden
                            />
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
