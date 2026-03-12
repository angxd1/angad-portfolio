"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cloud,
  GraduationCap,
  Radar,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, stagger } from "@/components/motion";
import { cn } from "@/lib/utils";

const projectVisuals: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    glow: string;
    pattern: string;
  }
> = {
  MemoLens: {
    icon: Radar,
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.18),transparent_50%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]",
    glow: "shadow-[0_40px_120px_-90px_rgba(34,211,238,0.35)]",
    pattern:
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:56px_56px]",
  },
  "Doceo — AI-Powered STEM Tutoring": {
    icon: GraduationCap,
    gradient:
      "bg-[radial-gradient(circle_at_20%_25%,rgba(167,139,250,0.22),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(244,114,182,0.14),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]",
    glow: "shadow-[0_40px_120px_-90px_rgba(167,139,250,0.35)]",
    pattern:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06),transparent_60%)]",
  },
  "Data Health Console": {
    icon: ShieldCheck,
    gradient:
      "bg-[radial-gradient(circle_at_22%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(34,211,238,0.12),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]",
    glow: "shadow-[0_40px_120px_-90px_rgba(16,185,129,0.28)]",
    pattern:
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:64px_64px]",
  },
  "OpenClaw Workshop on AWS": {
    icon: Cloud,
    gradient:
      "bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_78%_25%,rgba(34,211,238,0.14),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]",
    glow: "shadow-[0_40px_120px_-90px_rgba(59,130,246,0.30)]",
    pattern:
      "bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.10),transparent_60%),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:1px_1px,72px_72px]",
  },
};

export function Projects() {
  const GithubIcon = portfolio.projects.cardLinks.icons.github;
  const DemoIcon = portfolio.projects.cardLinks.icons.demo;

  return (
    <Section id="projects" className="py-16 sm:py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            title={portfolio.projects.heading}
            subtitle={portfolio.projects.subheading}
          />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
          className="mt-10 grid gap-6 lg:mt-12"
        >
          {portfolio.projects.items.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.55, ease: [0.21, 0.61, 0.35, 1] },
                },
              }}
              className="w-full"
            >
              <Card
                className={cn(
                  "group relative h-full overflow-hidden border-white/10 bg-gradient-to-b from-white/6 to-white/2 transition will-change-transform hover:-translate-y-0.5 hover:border-white/18",
                  "shadow-[0_1px_0_0_rgba(255,255,255,0.08),0_32px_140px_-100px_rgba(0,0,0,0.95)]"
                )}
              >
                {(() => {
                  const v = projectVisuals[p.title] ?? {
                    icon: ArrowUpRight,
                    gradient:
                      "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]",
                    glow: "",
                    pattern:
                      "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.10),transparent_60%)]",
                  };
                  const Icon = v.icon;

                  return (
                    <>
                      <div className={cn("pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100", v.glow)}>
                        <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
                      </div>

                      <div
                        className={cn(
                          "relative md:grid md:grid-cols-[320px_1fr] md:items-stretch lg:grid-cols-[360px_1fr]"
                        )}
                      >
                        <div
                          className={cn(
                            "relative overflow-hidden border-b border-white/10 md:border-b-0 md:border-r md:border-white/10"
                          )}
                        >
                          <div className="relative p-4 md:p-5">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_70px_-55px_rgba(0,0,0,0.9)]">
                              <div className={cn("absolute inset-0", v.gradient)} />
                              {p.meta?.thumbnail ? (
                                <Image
                                  src={p.meta.thumbnail.src}
                                  alt={p.meta.thumbnail.alt}
                                  fill
                                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 260px, 100vw"
                                  className="object-cover opacity-[0.90] saturate-[1.06] contrast-[1.05]"
                                  priority={idx === 0}
                                />
                              ) : null}
                              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,10,0.10),rgba(7,7,10,0.58))]" />
                              <div className={cn("pointer-events-none absolute inset-0 opacity-75 mix-blend-screen", v.pattern)} />
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.16),transparent_58%)] opacity-80" />
                            </div>
                          </div>
                          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl border border-white/12 bg-zinc-950/40 px-3 py-2 text-xs text-zinc-200 backdrop-blur">
                            <Icon className="h-4 w-4 text-zinc-100" />
                            <span className="font-medium">
                              {p.meta?.eyebrow ?? p.tagline}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
                            <span className="text-xs text-zinc-300/90">
                              {portfolio.uiText.projects.selectedLabel}
                            </span>
                            <span className="hidden text-[11px] text-zinc-300/80 sm:inline">
                              {portfolio.uiText.projects.hoverHint}
                            </span>
                          </div>
                          <div className="pointer-events-none absolute -inset-2 translate-y-8 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.12)_45%,transparent_70%)]" />
                          </div>
                        </div>

                        <div className="relative">
                          <CardHeader className="pb-4 md:p-8 md:pb-5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <CardTitle className="text-lg md:text-2xl">
                                  {p.title}
                                </CardTitle>
                                <div className="mt-2 text-sm text-zinc-300 md:text-base">
                                  {p.tagline}
                                </div>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="grid gap-6 md:px-8 md:pb-8">
                            <p className="text-pretty text-sm leading-7 text-zinc-300 md:text-base">
                              {p.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {p.stack.map((s) => (
                                <Badge
                                  key={s}
                                  variant="subtle"
                                  className="border-white/10 bg-white/[0.035] text-zinc-200"
                                >
                                  {s}
                                </Badge>
                              ))}
                            </div>

                            <div className="grid gap-2 md:grid-cols-2 md:gap-x-6">
                              {p.highlights.map((h) => (
                                <div key={h} className="flex gap-3 text-sm text-zinc-200">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
                                  <span className="leading-6">{h}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-2 pt-2">
                              <Button variant="outline" asChild>
                                <a href={p.links.github} target="_blank" rel="noreferrer">
                                  <GithubIcon className="h-4 w-4" />
                                  {portfolio.uiText.projects.codeLabel}
                                </a>
                              </Button>
                              {p.links.demo ? (
                                <Button variant="secondary" asChild>
                                  <a href={p.links.demo} target="_blank" rel="noreferrer">
                                    <DemoIcon className="h-4 w-4" />
                                    {portfolio.uiText.projects.liveLabel}
                                  </a>
                                </Button>
                              ) : null}
                              {p.meta?.cardNote ? (
                                <span className="ml-auto hidden text-xs text-zinc-400 md:inline">
                                  {p.meta.cardNote}
                                </span>
                              ) : null}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </>
                  );
                })()}

              </Card>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

