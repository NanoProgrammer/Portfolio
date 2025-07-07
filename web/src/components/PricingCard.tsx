'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Props {
  title: string
  price: string
  description?: string
  features: string[]
  cta: string
  featured?: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  featured,
}: Props) {
  return (
    <Card
      className={cn(
        "relative p-6 border-border bg-card text-left transition-all hover:scale-[1.02] group overflow-hidden",
        featured && "border-2 border-accent shadow-lg z-10"
      )}
    >
      <div className="absolute inset-0 -z-10 opacity-5 bg-dot-grid" />
      <CardContent className="p-0 space-y-4">
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Most Chosen
          </Badge>
        )}
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-3xl font-bold text-accent">{price}</p>
          {description && (
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          )}
        </div>
        <ul className="text-sm text-muted-foreground space-y-2">
          {features.map((f, i) => (
            <li
              key={i}
              className="before:content-['✓'] before:mr-2 before:text-accent"
            >
              {f}
            </li>
          ))}
        </ul>
        <Button size="lg" className="w-full mt-2">
          <a href="#contact">{cta}</a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default function PricingAndAddons() {
  const pricing = [
    {
      title: "Informational Landing",
      price: "$350+ CAD",
      description: "Clean one-page site to present your services and contact info clearly.",
      features: [
        "3 custom sections (e.g. Hero, Services, Contact)",
        "Clickable email or phone CTA",
        "Mobile-first layout",
        "Delivered in 5–7 days",
      ],
      cta: "Start Now",
    },
    {
      title: "Lead Gen Landing",
      price: "$600–1000 CAD",
      description: "Form-enabled pages to capture leads and emails. Perfect for service businesses.",
      features: [
        "Contact form + validation",
        "Store or forward to email",
        "Basic SEO & analytics",
        "Up to 6 sections (Hero, About, Services, Form)",
        "Delivered under 10 days",
      ],
      cta: "Book This",
      featured: true,
    },
    {
      title: "eCommerce Website",
      price: "$1000–2500 CAD",
      description: "Sell your products with a fast, modern online store — powered by Stripe or custom checkout.",
      features: [
        "Landing page with product showcase",
        "Product pages",
        "Categories + filters",
        "Stripe integration",
        "CMS panel",
      ],
      cta: "Request Quote",
    },
  ]

  const addons = [
    {
      title: "Domain & Hosting Setup",
      price: "+$50–$100/yr",
      description:
        "I’ll help you set up your domain and launch your website — no tech headaches for you.",
    },
    {
      title: "Basic Logo Design",
      price: "+$100–$250",
      description:
        "Need a simple, clean logo? I’ll create one that fits your brand and looks great everywhere.",
    },
    
    {
      title: "Cloudflare Security Setup",
      price: "$100–$200",
      description:
        "I’ll secure your site with SSL, firewall, and performance boost using Cloudflare — so it stays fast and protected 24/7.",
    },
    {
      title: "Client-Friendly Blog (SEO Boost)",
      price: "$250–$400",
      description:
        "Want to show up on Google more often? I’ll add a blog where you can publish your own posts anytime — no code needed. Great for SEO off-page strategy and link building (dofollow links supported).",
    },
  ]
  
  

  const bonuses = [
    "✅ Free favicon included",
    "✅ Mobile-first responsive design",
    "✅ Optimized image delivery",
    "✅ SEO-friendly markup",
    "✅ Hosting & deployment support",
    "✅ 1-week post-launch support",
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {pricing.map((props, idx) => (
          <PricingCard key={idx} {...props} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Optional Add-ons</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
        {addons.map(({ title, price, description }, idx) => (
          <Card
            key={idx}
            className="border-border bg-card group hover:bg-muted/30 transition-all"
          >
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <Badge variant="outline" className="text-xs">
                  {price}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Every site includes:</h3>
        <ul className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto">
          {bonuses.map((bonus, i) => (
            <li key={i}>{bonus}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
