"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]",
          eyebrow && "mt-3"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-mist md:text-[17px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
