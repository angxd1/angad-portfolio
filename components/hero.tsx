"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const HandScene = dynamic(
  () => import("@/components/hand-scene").then((m) => m.HandScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-charcoal" aria-hidden />
    ),
  }
);

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return false;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] scroll-mt-0 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_45%,rgba(232,161,90,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(243,235,227,0.04),transparent_55%)]" />

      <div className="absolute inset-0 md:left-[38%] md:right-0">
        <HandScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/20 md:via-charcoal/70 md:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.21, 0.61, 0.35, 1] }}
          className="max-w-xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{portfolio.person.badge}</Badge>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              {portfolio.person.locationLine}
            </span>
          </div>

          <h1 className="font-display mt-7 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
            {portfolio.person.headline}
          </h1>

          <p className="mt-6 max-w-md text-pretty text-xl leading-snug text-foreground/90 md:text-2xl">
            {portfolio.person.subheadline}
          </p>

          <p className="mt-4 max-w-md text-pretty text-sm leading-7 text-mist md:text-base">
            {portfolio.person.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {portfolio.heroCtas.map((cta) => (
              <Button
                key={cta.label}
                variant={cta.variant ?? "default"}
                className={cn(cta.variant === "ghost" && "px-3")}
                asChild
              >
                <a
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={(e) => {
                    const did = scrollToHash(cta.href);
                    if (did) e.preventDefault();
                  }}
                >
                  {cta.icon ? <cta.icon className="h-4 w-4" /> : null}
                  {cta.label}
                  {cta.label === "View work" ? (
                    <ArrowDownRight className="h-4 w-4" />
                  ) : null}
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
