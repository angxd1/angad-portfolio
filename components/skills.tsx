"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion";

export function Skills() {
  return (
    <Section id="skills" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline opacity-40" />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title={portfolio.uiText.skills.heading}
            subtitle={portfolio.uiText.skills.subheading}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
          {portfolio.skills.categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={0.04 * idx}>
              <div className="surface rounded-2xl p-5 md:p-6">
                <div className="font-display text-lg font-semibold text-foreground">
                  {cat.title}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge key={item} variant="subtle">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
