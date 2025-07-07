'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortfolioItemProps {
  title: string
  description: string
  imageUrl: string
  link?: string
  details?: string
}

export default function PortfolioItem({
  title,
  description,
  imageUrl,
  link,
  details,
}: PortfolioItemProps) {
  const [open, setOpen] = useState(false)

  // 🔒 Scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-background text-foreground max-w-xl w-full mx-4 md:mx-0 rounded-xl p-6 relative shadow-xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()} // bloquea cierre al hacer clic en la tarjeta
      >
        <button
          className="absolute top-3 right-4 text-xl text-muted-foreground hover:text-white"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {details && (
          <p className="text-sm leading-relaxed whitespace-pre-line">{details}</p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:underline"
          >
            Visit site ↗
          </a>
        )}
      </div>
    </div>
  )

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-2xl bg-muted/30 backdrop-blur-lg p-4 shadow-lg transition-transform hover:scale-[1.03]"
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {open && typeof window !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  )
}
