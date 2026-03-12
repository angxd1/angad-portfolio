import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Leadership } from "@/components/leadership";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-dvh">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07070a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute -top-36 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.14),transparent_62%)] blur-2xl" />
        <div className="absolute top-[560px] left-[-260px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.11),transparent_60%)] blur-2xl" />
        <div className="absolute top-[1200px] right-[-260px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] blur-2xl" />
      </div>

      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <Experience />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <Leadership />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <Education />
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="divider" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
