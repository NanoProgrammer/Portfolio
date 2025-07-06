'use client'

import { Button } from "@/components/ui/button"

export default function HeroAnimated() {
  return (
    <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center justify-center px-6 py-20">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-primary/10 via-background to-background opacity-70 blur-3xl" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('/assets/3px-tile.png')] opacity-45 mix-blend-soft-light pointer-events-none" />

      {/* Optional floating shape accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-secondary/10 rounded-full blur-2xl animate-spin-slow translate-x-1/3 translate-y-1/3" />

      <div className="mx-auto max-w-5xl text-center animate-fade-up animate-duration-700">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
        Built to grow with your business
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          I’m Santiago — a web developer in Alberta. I build sites that look sharp, load fast, and help real businesses grow online.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/#contact"
            className="rounded-xl bg-accent text-accent-foreground px-6 py-3 text-sm font-medium shadow hover:scale-105 transition-transform"
          >
            Let’s build yours
          </a>
          <a
            href="/portfolio"
            className="text-sm text-muted-foreground underline underline-offset-4 text-center content-center hover:text-foreground"
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  )
}
