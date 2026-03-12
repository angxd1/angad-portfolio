"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/section";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="pb-10 md:pb-12">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-50">
              {portfolio.person.name}
            </div>
            <div className="mt-2 text-sm text-zinc-400">{portfolio.footer.note}</div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {portfolio.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/8 hover:text-zinc-50"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </a>
            ))}
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

