import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function ApplicationSection() {
  return (
    <section
      id="application"
      className="scroll-mt-24 bg-white"
      aria-labelledby="application-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="application-title"
            className="text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.application.heading}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.application.steps.map((step) => (
            <Card key={step.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{step.title}</CardTitle>
                <CardDescription className="mt-1">
                  {step.description}
                </CardDescription>
              </CardHeader>
              {"bullets" in step && step.bullets ? (
                <CardContent>
                  <ul className="space-y-2">
                    {step.bullets.map((b: string) => (
                      <li key={b} className="text-sm text-zinc-700">
                        <span className="mr-2 text-zinc-400">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-700">
            {content.ui.applicationEmailLabel}
            <a
              href={`mailto:${content.application.email}`}
              className="ml-2 font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              {content.application.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
