"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Reveal>
          <SectionHeading title={portfolio.skills.heading} subtitle={portfolio.skills.subheading} />
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {portfolio.skills.categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={0.05 + idx * 0.03}>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2.5">
                  {cat.items.map((it) => (
                    <Badge key={it} variant="subtle">
                      {it}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

