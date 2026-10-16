"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Path"
            title={portfolio.uiText.experience.heading}
            subtitle={portfolio.uiText.experience.subheading}
          />
        </Reveal>

        <div className="relative mt-12 md:mt-14">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-transparent via-copper/50 to-transparent md:block" />

          <ol className="grid gap-0">
            {portfolio.experience.items.map((item, idx) => (
              <Reveal
                key={`${item.role}-${item.organization}`}
                delay={0.03 * idx}
              >
                <li className="relative grid gap-4 border-b border-[var(--line)] py-8 md:grid-cols-[28px_1fr] md:gap-8 md:py-10">
                  <div className="relative hidden md:block">
                    <span
                      className={
                        item.teachBeat
                          ? "absolute left-1 top-1.5 h-3.5 w-3.5 rounded-full bg-copper shadow-[0_0_18px_rgba(232,161,90,0.55)]"
                          : "absolute left-1.5 top-2 h-2.5 w-2.5 rounded-full border border-copper/50 bg-charcoal"
                      }
                    />
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
                    <div>
                      {item.teachBeat ? (
                        <Badge className="mb-3">
                          {portfolio.uiText.experience.teachLabel}
                        </Badge>
                      ) : null}
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {item.role}
                      </h3>
                      <div className="mt-2 text-sm text-foreground/80">
                        {item.organization}
                      </div>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
                        {item.location} · {item.dates}
                      </div>
                    </div>
                    <ul className="grid gap-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper/70" />
                          <span className="leading-6 text-foreground/80">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
