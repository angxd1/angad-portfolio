"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}
      {...props}
    />
  );
}

export function Section({
  id,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement> & { id: string }) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 md:py-24",
        className
      )}
      {...props}
    />
  );
}

