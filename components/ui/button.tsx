"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-[transform,background-color,border-color,box-shadow,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[0.5px] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-white to-zinc-100 text-zinc-950 shadow-[0_1px_0_rgba(255,255,255,0.40),0_20px_60px_-40px_rgba(0,0,0,0.75)] hover:from-white/95 hover:to-zinc-100/95",
        secondary:
          "bg-white/10 text-zinc-50 ring-1 ring-white/10 shadow-[0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/14 hover:ring-white/14",
        outline:
          "bg-white/[0.02] text-zinc-50 ring-1 ring-white/14 shadow-[0_1px_0_rgba(255,255,255,0.04)] hover:bg-white/6 hover:ring-white/18",
        ghost:
          "bg-transparent text-zinc-50 hover:bg-white/7 hover:text-white",
        link: "bg-transparent text-zinc-50 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-[13px]",
        default: "h-10 px-4",
        lg: "h-11 px-5 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };

