"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function About() {
  const edu = portfolio.education.item;

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title={portfolio.about.heading}
              subtitle={portfolio.about.body}
            />
            <ul className="mt-8 grid gap-3">
              {portfolio.about.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm text-foreground/90 md:text-base"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <span className="leading-7">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-sand rounded-2xl p-6 md:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-sand-ink/50">
                {portfolio.education.heading}
              </div>
              <div className="font-display mt-4 text-2xl font-bold text-sand-ink">
                {edu.school}
              </div>
              <div className="mt-2 text-sm leading-6 text-sand-ink/75">
                {edu.program}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-sand-ink/45">
                {edu.location} · {edu.dates}
              </div>
              <p className="mt-5 border-t border-sand-ink/10 pt-5 text-sm leading-6 text-sand-ink/70">
                {edu.note}
              </p>
              <div className="mt-6 rounded-xl bg-sand-ink/5 p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand-ink/45">
                  {portfolio.uiText.about.focusTitle}
                </div>
                <div className="mt-2 text-sm leading-6 text-sand-ink/80">
                  {portfolio.uiText.about.focusBody}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
