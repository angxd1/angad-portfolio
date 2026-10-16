"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/section";

export function Footer() {
  return (
    <footer className="pb-10 md:pb-12">
      <Container>
        <div className="mb-8 h-px hairline opacity-40" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-sm font-bold text-foreground">
              {portfolio.person.name}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
              {portfolio.footer.note}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {portfolio.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-charcoal-elevated px-3 py-2 text-sm text-foreground/85 transition hover:border-copper/35 hover:text-foreground"
              >
                <s.icon className="h-4 w-4 text-copper" />
                {s.label}
              </a>
            ))}
            <span className="font-mono text-[11px] text-mist">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
