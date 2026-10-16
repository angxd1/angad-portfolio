"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/motion";

export function Contact() {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = React.useState<string | null>(null);

  return (
    <Section id="contact" className="relative pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline opacity-50" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title={portfolio.contact.heading}
              subtitle={portfolio.contact.subheading}
            />
            <div className="mt-8 grid gap-2">
              {portfolio.contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-[var(--line)] bg-charcoal-elevated px-4 py-3 text-sm text-foreground/90 transition hover:border-copper/40 hover:text-foreground"
                >
                  <l.icon className="h-4 w-4 text-copper" />
                  <span>{l.label}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-mist transition group-hover:text-copper">
                    open
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              {portfolio.uiText.contact.emailLabel}
              <a
                className="mt-2 block normal-case tracking-normal text-copper hover:underline"
                href={`mailto:${portfolio.contact.email}`}
              >
                {portfolio.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[var(--line)] bg-charcoal-elevated p-6 md:p-8">
              <div className="font-display text-xl font-semibold text-foreground">
                {portfolio.uiText.contact.formTitle}
              </div>
              <form
                className="mt-6 grid gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);
                  setStatus("submitting");

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const payload = {
                    name: String(formData.get("name") ?? ""),
                    email: String(formData.get("email") ?? ""),
                    message: String(formData.get("message") ?? ""),
                  };

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    const data = (await res.json()) as
                      | { ok: true }
                      | { ok: false; error?: string };

                    if (!res.ok || !data.ok) {
                      setError(
                        "error" in data && data.error
                          ? data.error
                          : portfolio.uiText.contact.status.error
                      );
                      setStatus("error");
                      return;
                    }

                    form.reset();
                    setStatus("success");
                    window.setTimeout(() => setStatus("idle"), 4000);
                  } catch {
                    setError(portfolio.uiText.contact.status.error);
                    setStatus("error");
                  }
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm text-foreground/85" htmlFor="name">
                      {portfolio.uiText.contact.fieldLabels.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder={portfolio.uiText.contact.placeholders.name}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm text-foreground/85" htmlFor="email">
                      {portfolio.uiText.contact.fieldLabels.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={portfolio.uiText.contact.placeholders.email}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-foreground/85" htmlFor="message">
                    {portfolio.uiText.contact.fieldLabels.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={portfolio.uiText.contact.placeholders.message}
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button type="submit" disabled={status === "submitting"}>
                    {status === "submitting"
                      ? portfolio.uiText.contact.sendingLabel
                      : portfolio.uiText.contact.submitLabel}
                  </Button>
                  {status === "success" ? (
                    <span className="text-sm text-copper">
                      {portfolio.uiText.contact.status.success}
                    </span>
                  ) : null}
                  {status === "error" ? (
                    <span className="text-sm text-rose-300">
                      {error ?? portfolio.uiText.contact.status.error}
                    </span>
                  ) : null}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
