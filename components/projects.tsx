"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { portfolio, type Project } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const sizeMap = {
  lg: "h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52",
  md: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36",
  sm: "h-24 w-24 sm:h-28 sm:w-28",
};

function nodeStyle(project: Project) {
  const rad = (project.orbit.angle * Math.PI) / 180;
  const base = project.orbit.radius;
  // percentage offsets from center; Dextera (radius 0) sits center
  const x = 50 + Math.cos(rad) * base * 38;
  const y = 50 + Math.sin(rad) * base * 34;
  return { left: `${x}%`, top: `${y}%` };
}

function ProjectDetail({ project }: { project: Project }) {
  const GithubIcon = portfolio.projects.cardLinks.icons.github;
  const DemoIcon = portfolio.projects.cardLinks.icons.demo;

  return (
    <div className="surface overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        {project.meta?.thumbnail ? (
          <Image
            src={project.meta.thumbnail.src}
            alt={project.meta.thumbnail.alt}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority={Boolean(project.featured)}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {project.featured ? (
            <Badge variant="strong">{portfolio.uiText.projects.featuredLabel}</Badge>
          ) : null}
          <Badge>{project.meta?.cardNote ?? project.meta?.eyebrow}</Badge>
        </div>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <h3 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-lg leading-snug text-foreground/85">
            {project.tagline}
          </p>
          <p className="mt-4 text-pretty text-sm leading-7 text-mist md:text-base">
            {project.description}
          </p>
          <ul className="mt-5 grid gap-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                <span className="leading-6">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s} variant="subtle">
                {s}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <GithubIcon className="h-4 w-4" />
                {portfolio.uiText.projects.codeLabel}
              </a>
            </Button>
            {project.links.demo ? (
              <Button variant="secondary" asChild>
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  <DemoIcon className="h-4 w-4" />
                  {portfolio.uiText.projects.liveLabel}
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const reduce = useReducedMotion();
  const featured =
    portfolio.projects.items.find((p) => p.featured) ??
    portfolio.projects.items[0];
  const [activeId, setActiveId] = React.useState(featured.title);
  const active =
    portfolio.projects.items.find((p) => p.title === activeId) ?? featured;

  return (
    <Section id="projects" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline opacity-60" />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work"
            title={portfolio.uiText.projects.heading}
            subtitle={portfolio.uiText.projects.subheading}
          />
        </Reveal>

        <Reveal delay={0.06} className="mt-12 md:mt-14">
          <div className="relative mx-auto aspect-square w-full max-w-xl md:max-w-2xl">
            {/* orbital rings */}
            <div className="pointer-events-none absolute inset-[8%] rounded-full border border-copper/15" />
            <div className="pointer-events-none absolute inset-[22%] rounded-full border border-[var(--line)]" />
            <div
              className={cn(
                "pointer-events-none absolute inset-[8%] rounded-full border border-dashed border-copper/20",
                !reduce && "orbit-spin"
              )}
            />

            {portfolio.projects.items.map((project) => {
              const selected = project.title === activeId;
              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveId(project.title)}
                  aria-pressed={selected}
                  aria-label={`Select ${project.title}`}
                  className={cn(
                    "absolute z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border transition duration-300 focus-visible:ring-2 focus-visible:ring-copper/50",
                    sizeMap[project.orbit.size],
                    selected
                      ? "border-copper shadow-[0_0_40px_-8px_rgba(232,161,90,0.65)] scale-105"
                      : "border-[var(--line)] opacity-85 hover:border-copper/50 hover:opacity-100"
                  )}
                  style={nodeStyle(project)}
                >
                  {project.meta?.thumbnail ? (
                    <Image
                      src={project.meta.thumbnail.src}
                      alt=""
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-charcoal-elevated font-display text-sm">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  <span
                    className={cn(
                      "absolute inset-x-2 bottom-2 text-center font-display font-semibold leading-tight text-foreground",
                      project.orbit.size === "lg"
                        ? "text-sm sm:text-base"
                        : "text-[11px] sm:text-xs"
                    )}
                  >
                    {project.title}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
            {portfolio.uiText.projects.selectHint}
          </p>
        </Reveal>

        <div className="mt-10 md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.21, 0.61, 0.35, 1] }}
            >
              <ProjectDetail project={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
