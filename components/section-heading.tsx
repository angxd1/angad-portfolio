"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[28px] md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-pretty text-sm leading-7 text-zinc-300 md:text-[15px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

