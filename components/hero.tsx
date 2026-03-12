"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/section";
import { cn } from "@/lib/utils";

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return false;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function Hero() {
  return (
    <Section id="home" className="pt-14 md:pt-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/2 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-60 bg-grid" />

          <div className="relative px-6 py-12 sm:py-14 md:px-12 md:py-18">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.21, 0.61, 0.35, 1] }}
              className="mx-auto max-w-3xl"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="strong">{portfolio.person.badge}</Badge>
                <span className="text-xs text-zinc-400">
                  {portfolio.person.locationLine}
                </span>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                {portfolio.person.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-7 text-zinc-200 md:text-xl">
                {portfolio.person.subheadline}
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-zinc-300 md:text-base">
                {portfolio.person.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-3 md:flex md:flex-row md:flex-wrap md:items-center">
                {portfolio.heroCtas.map((cta) => (
                  <Button
                    key={cta.label}
                    variant={cta.variant ?? "default"}
                    className={cn(
                      "w-full justify-center md:w-auto",
                      cta.variant === "default" &&
                        "bg-gradient-to-b from-white to-zinc-100 text-zinc-950 hover:from-white/95 hover:to-zinc-100/95"
                    )}
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
                      {cta.label === "View Projects" ? (
                        <ArrowRight className="h-4 w-4 opacity-80" />
                      ) : null}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

