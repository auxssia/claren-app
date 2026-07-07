---
title: "What is a legal drafting ontology?"
summary: "A legal drafting ontology is a structured map of legal concepts — parties, pleadings, procedural stages, statutory provisions — and the explicit rules for how they connect. It gives AI drafting systems a rigid structural boundary, so outputs are assembled from defined relationships instead of statistical guesswork. This is how Claren makes litigation drafting deterministic and drastically reduces hallucinated output."
date: "2026-07-04"
---

Every legal AI wrapper I have tested shares the same failure mode: it drafts fluently and reasons loosely. The text looks right until a practitioner checks the procedural posture, the limitation period, or the cited authority. Claren is built on a different premise — before a system drafts anything, it should know what a pleading structurally *is*.

## Why do AI drafting tools hallucinate?

Large language models predict text. When a model is asked to draft a plaint with no structural boundary, it fills gaps with whatever is statistically plausible: a section number that looks real, a procedural step borrowed from the wrong forum, a chronology that never happened. The failure is not the model's knowledge — it is the absence of a constraint layer that defines what a valid draft must contain and how its parts must relate.

## How does an ontology constrain the output?

An ontology defines the entities of litigation drafting — parties, reliefs, causes of action, procedural stages, statutory hooks — and the permitted relationships between them. A relief must trace to a cause of action. A cause of action must trace to pleaded facts. A limitation computation must trace to a dated event. When the system drafts, it walks this graph instead of free-associating, and anything that cannot be grounded in the graph is surfaced as a gap rather than papered over with plausible text.

## What is Claren building on top of this?

Claren applies the ontology to the ugliest part of litigation practice: converting unstructured case documents into deterministic timelines and procedural maps. The corpus behind it currently spans roughly 3,000 processed Supreme Court judgments, each parsed into facts, issues, holdings, cited cases, and statutes. The drafting ontology research will be published here as a paper, so other builders can construct their own tools on the same foundation.

## Where does this go next?

The immediate roadmap is narrow by design: chronology extraction, plaint structuring, and contradiction detection, each grounded in the ontology rather than raw model output. The long-term goal remains an explainable operating system for litigation — one where every generated line can show its structural justification.
