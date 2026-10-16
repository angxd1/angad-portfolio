"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/components/use-active-section";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const ids = portfolio.nav.map((n) => n.id);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b border-transparent transition",
          scrolled &&
            "border-[var(--line)] bg-charcoal/80 shadow-[0_10px_40px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("home");
            }}
            className="group inline-flex items-center gap-2.5"
          >
            <span className="glow-pulse h-2 w-2 rounded-full bg-copper" />
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              {portfolio.person.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {portfolio.nav.slice(1).map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm text-mist transition hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-copper-dim ring-1 ring-copper/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex"
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
              >
                Contact
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-[var(--line)] bg-charcoal/95"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-between font-display">
                    <span>{portfolio.uiText.navbar.mobileTitle}</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>

                <div className="grid gap-1">
                  {portfolio.nav.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <SheetClose asChild key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToId(item.id);
                          }}
                          className={cn(
                            "rounded-xl px-4 py-3 text-sm text-foreground/85 ring-1 ring-transparent transition hover:bg-white/5",
                            isActive &&
                              "bg-copper-dim text-foreground ring-copper/30"
                          )}
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
