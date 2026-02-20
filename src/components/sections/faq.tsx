import { content } from "@/data/content";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <FadeIn>
          <h2
            id="faq-title"
            className="section-heading-accent text-3xl font-bold tracking-tight text-zinc-900"
          >
            {content.faq.heading}
          </h2>
        </FadeIn>

        <div className="mt-8 rounded-xl border border-zinc-200/80 bg-white px-6 shadow-sm">
          <Accordion type="single" collapsible>
            {content.faq.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
