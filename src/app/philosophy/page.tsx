import type { Metadata } from "next";
import { SectionWrapper } from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "Philosophy — What is Claren, and why am I building it?",
  description:
    "Claren is an attempt to build a visual architecture for litigation workflows in India, grounded in a legal drafting ontology that makes AI decisions deterministic.",
  openGraph: {
    title: "Philosophy — Claren",
    description:
      "Why Claren exists: a legal drafting ontology that makes AI decisions deterministic and drastically reduces the margin for error.",
  },
};

export default function PhilosophyPage() {
  return (
    <SectionWrapper className="max-w-3xl">
      <article>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-10">
          What is Claren, and why am I building it?
        </h1>

        <div className="space-y-6 text-base text-muted leading-relaxed">
          <p>
            As you noticed on the main homepage, Claren is an attempt to build
            a visual architecture for litigation workflows in India. I am a
            student of law currently in my fourth year of BBA LLB. To be
            completely frank, I grew tired of seeing a flood of basic AI
            wrappers built with little to no architectural innovation. They
            fail to solve any real legal problems. If an AI system does all
            the heavy lifting without an underlying structural boundary, it is
            bound to feed you hallucinated responses.
          </p>
          <p>
            To counter this, I am constructing a legal drafting ontology based
            on my own clerkship experiences and developed with the active
            guidance of practicing professionals in the field. An ontology
            ensures that AI systems make deterministic decisions, drastically
            reducing the margin for error.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground pt-6">
            What is an ontology?
          </h3>
          <p>
            In traditional philosophy, ontology is the branch that studies the
            nature of being, existence, and reality. In short, it asks the
            ultimate question: What actually exists, and how do we classify
            it?
          </p>
          <p>
            In the context of legal technology, an ontology is a digital
            master map. It explicitly defines legal concepts and outlines
            exactly how they connect to one another so software can process
            them logically. Computers do not inherently understand what a
            &ldquo;contract,&rdquo; a &ldquo;plaintiff,&rdquo; or a
            &ldquo;breach&rdquo; means. An ontology acts as the foundational
            translator, giving the software rigid, human-like context.
          </p>
          <p>
            Now, to be clear, I am not building a universal legal ontology.
            Linus Torvalds once famously implied that you have to be stupid
            enough to try and build your own operating system from scratch. I
            was that stupid. I initially tried to map out the entire legal
            ecosystem, but it turned out to be far more complex and grueling
            than I estimated. While I haven&apos;t completely abandoned that
            grand vision, it is no longer my immediate priority.
          </p>
          <p>
            Instead, I scaled down and settled on a legal drafting ontology.
            Narrowing the scope made the project surprisingly manageable.
            After a few intensive weeks of deep research, I managed to map the
            baseline framework, and I will shortly be releasing a research
            paper on this architecture right here so other builders can create
            their own tools.
          </p>
          <p>
            As I mentioned before, this project is entirely bootstrapped and
            built solely by me. Because of that, I cannot promise 100%
            perfection out of the gate. The platform has been beta-tested, but
            Indian litigation is consistently full of surprises. I would be
            genuinely grateful for raw community feedback. I am building a
            dedicated space here for you to post effective use cases alongside
            genuine criticism. Every piece of valid, actionable criticism will
            be directly rewarded with platform credits.
          </p>
        </div>
      </article>
    </SectionWrapper>
  );
}
