import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";

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
            className="text-3xl font-bold tracking-tight text-zinc-900"
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
        </FadeIn>
      </div>
    </section>
  );
}
