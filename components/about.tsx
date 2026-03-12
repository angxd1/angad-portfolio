"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal>
          <SectionHeading title={portfolio.about.heading} />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={0.05}>
            <Card>
              <CardHeader>
                <CardTitle>{portfolio.uiText.about.overviewTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm leading-7 text-zinc-300 md:text-base">
                  {portfolio.about.body}
                </p>
                <ul className="mt-6 grid gap-2">
                  {portfolio.about.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-zinc-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                      <span className="leading-6">{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{portfolio.uiText.about.profileTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/12 to-white/6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_60%)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-50">
                      {portfolio.about.avatar.title}
                    </div>
                    <div className="text-sm text-zinc-300">
                      {portfolio.about.avatar.subtitle}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-400">
                  {portfolio.about.avatar.note}
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/4 p-4">
                  <div className="text-xs font-medium text-zinc-200">
                    {portfolio.uiText.about.focusTitle}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-zinc-300">
                    {portfolio.uiText.about.focusBody}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

