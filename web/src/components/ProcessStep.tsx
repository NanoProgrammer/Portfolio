'use client'

import { Card, CardContent } from "@/components/ui/card"

interface StepProps {
  step: string
  title: string
  description: string
}

export default function ProcessStep({ step, title, description }: StepProps) {
  return (
    <Card className="group relative bg-card border-border hover:bg-accent/5 transition-all overflow-hidden">
      {/* Accent bar on hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

      <CardContent className="p-6 flex flex-col items-start gap-4">
        <div className="text-3xl font-extrabold text-accent tracking-tight group-hover:scale-105 group-hover:rotate-1 transition-transform">
          {step}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
