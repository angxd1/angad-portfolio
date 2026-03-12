"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-200 backdrop-blur supports-[backdrop-filter]:bg-white/5",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/6 text-zinc-100",
        subtle: "border-white/10 bg-white/[0.035] text-zinc-200",
        strong:
          "border-white/16 bg-gradient-to-b from-white/14 to-white/7 text-zinc-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

