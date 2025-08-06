'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// TESTIMONIALS
const testimonials = [
  {
    name: "Ingrit Jaimes",
    role: "Founder, Artilate Chocolates – Calgary, AB",
    quote:
      "Santiago built our entire e‑commerce platform from scratch — design, development, branding, everything. Within weeks we were selling online seamlessly. It’s fast, easy to manage, and customers love it.",
    fallback: "IJ",
    image: "/images/review-artilate.jpg",
  },
  {
    name: "Daniel Morris",
    role: "Owner, GrillsGuard – Calgary, AB",
    quote:
      "The landing page Santiago designed brought in bookings almost immediately. It’s clean, fast, and perfectly captures what my business offers. Couldn’t be happier.",
    fallback: "DM",
    image: "/images/review-grillsguard.jpg",
  },
  {
    name: "Alex Thompson",
    role: "Founder, Appointment Filling SaaS – Canada",
    quote:
      "I needed a SaaS MVP fast. Santiago not only delivered in record time but also made it look polished and professional. It works flawlessly, and my early users are impressed.",
    fallback: "AT",
    image: "/images/review-saas.jpg",
  },
  {
    name: "Sophie Laurent",
    role: "Owner, Maple & Thyme Bistro – Edmonton, AB",
    quote:
      "Our old website was slow and dated. Santiago completely transformed it into a modern, easy‑to‑navigate site that matches our restaurant’s style. Customers now book tables online every day.",
    fallback: "SL",
    image: "/images/review-restaurant.jpg",
  },
  {
    name: "Ethan Carter",
    role: "Freelance Photographer – Vancouver, BC",
    quote:
      "I wanted a portfolio site that truly showcased my work. Santiago delivered a sleek, high‑end design that loads instantly and impresses clients. I’ve booked three new shoots this week thanks to it.",
    fallback: "EC",
    image: "/images/review-photographer.jpg",
  },
]

export default function Testimonial() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const { name, role, quote, fallback, image } = testimonials[index]

  return (
    <section id="testimonials" className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Intro + Photo */}
        <div className="space-y-4">
        
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Canadian Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Alberta cafés to national e‑commerce brands and SaaS founders — I help businesses
            build websites that look world‑class, load lightning‑fast, and convert visitors into customers.
          </p>
        </div>

        {/* Testimonial Card */}
        <Card className="relative bg-card border-border p-6 shadow-md transition-all">
          <CardContent className="p-0 space-y-4">
            <blockquote className="italic text-lg leading-relaxed text-muted-foreground">
              “{quote}”
            </blockquote>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Avatar>
                {image ? <AvatarImage src={image} alt={name} /> : <AvatarFallback>{fallback}</AvatarFallback>}
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>

            {/* Navigation */}
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
