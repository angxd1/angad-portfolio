"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/motion";

export function Education() {
  const e = portfolio.education.item;
  return (
    <Section id="education">
      <Container>
        <Reveal>
          <SectionHeading title={portfolio.education.heading} />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-base md:text-lg">{e.school}</CardTitle>
              <div className="mt-1 text-sm text-zinc-300">{e.program}</div>
              <div className="mt-1 text-sm text-zinc-400">
                {e.location} • {e.dates}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-zinc-300">{e.note}</p>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

