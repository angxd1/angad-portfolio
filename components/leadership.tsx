"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/motion";

export function Leadership() {
  return (
    <Section id="leadership">
      <Container>
        <Reveal>
          <SectionHeading
            title={portfolio.leadership.heading}
            subtitle={portfolio.leadership.subheading}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {portfolio.leadership.items.map((item, idx) => (
            <Reveal key={item.title} delay={0.05 + idx * 0.04}>
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                  <div className="mt-1 text-sm text-zinc-300">
                    {item.organization}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{item.dates}</div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-zinc-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

