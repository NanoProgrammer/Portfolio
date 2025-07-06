'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
      name: "Marianne Clarke",
      role: "Owner, Clover Café – Airdrie, AB",
      quote:
        "Santiago completely nailed the vibe of my café. The site feels warm and personal, and I had people mentioning it within days. I didn’t expect it to work so fast.",
      fallback: "MC",
    },
    {
      name: "Dr. A. Patel",
      role: "Family Dentist – Calgary NW",
      quote:
        "I appreciated how straightforward the process was. Santiago handled everything — even the Google integration. Now patients can book easily, and it looks great on phones too.",
      fallback: "AP",
    },
    {
      name: "Anthony Romero",
      role: "Fitness & Mobility Coach, Online",
      quote:
        "I’d been stuck with a boring template. Santiago rebuilt my site from scratch and gave it real personality. I’ve gotten 3 new long-term clients this month just from web traffic.",
      fallback: "AR",
    },
  ]

export default function Testimonial() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const { name, role, quote, fallback } = testimonials[index]

  return (
    <section id="testimonials" className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>

        <Card className="relative bg-card border-border p-6 shadow-md transition-all">
          <CardContent className="p-0 space-y-4">
            <blockquote className="italic text-lg leading-relaxed text-muted-foreground">
              “{quote}”
            </blockquote>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Avatar>
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>

            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
              <Button size="icon" variant="ghost" onClick={prev}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <Button size="icon" variant="ghost" onClick={next}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
