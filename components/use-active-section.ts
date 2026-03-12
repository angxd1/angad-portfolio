"use client";

import * as React from "react";

import type { NavItem } from "@/data/portfolio";

export function useActiveSection(ids: NavItem["id"][]) {
  const [active, setActive] = React.useState<NavItem["id"]>("home");

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        const id = visible?.target?.id as NavItem["id"] | undefined;
        if (id) setActive(id);
      },
      {
        root: null,
        threshold: [0.12, 0.18, 0.22, 0.3],
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

