"use client";

import * as React from "react";

import { portfolio } from "@/data/portfolio";
import { Container, Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Section id="contact">
      <Container>
        <Reveal>
          <SectionHeading
            title={portfolio.contact.heading}
            subtitle={portfolio.contact.subheading}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={0.05}>
            <Card className="h-full">
              <CardHeader className="pb-4">
                <CardTitle>{portfolio.uiText.contact.linksTitle}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                {portfolio.contact.links.map((l) => (
                  <Button key={l.label} variant="outline" className="justify-start" asChild>
                    <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      <l.icon className="h-4 w-4" />
                      {l.label}
                    </a>
                  </Button>
                ))}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/4 p-4">
                  <div className="text-xs font-medium text-zinc-200">
                    {portfolio.uiText.contact.emailLabel}
                  </div>
                  <a
                    className="mt-2 block text-sm text-zinc-300 hover:text-zinc-50"
                    href={`mailto:${portfolio.contact.email}`}
                  >
                    {portfolio.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>{portfolio.uiText.contact.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="grid gap-4"
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
                      <label className="text-sm text-zinc-200" htmlFor="name">
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
                      <label className="text-sm text-zinc-200" htmlFor="email">
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
                    <label className="text-sm text-zinc-200" htmlFor="message">
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
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="bg-gradient-to-b from-white to-zinc-100 text-zinc-950 hover:from-white/95 hover:to-zinc-100/95"
                    >
                      {status === "submitting"
                        ? portfolio.uiText.contact.sendingLabel
                        : portfolio.uiText.contact.submitLabel}
                    </Button>
                    {status === "success" ? (
                      <span className="text-sm text-emerald-300">
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
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

