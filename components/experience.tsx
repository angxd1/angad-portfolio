"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/motion";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            title={portfolio.experience.heading}
            subtitle={portfolio.experience.subheading}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-12">
          {portfolio.experience.items.map((item, idx) => (
            <Reveal key={`${item.role}-${item.organization}`} delay={0.05 + idx * 0.04}>
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-base md:text-lg">
                        {item.role}
                      </CardTitle>
                      <div className="mt-1 text-sm text-zinc-300">
                        {item.organization} • {item.location}
                      </div>
                    </div>
                    <div className="text-sm text-zinc-400 sm:text-right">{item.dates}</div>
                  </div>
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

