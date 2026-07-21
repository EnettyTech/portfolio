import type { ReactNode } from 'react'

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
  light?: boolean
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  children,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-10">
      <p
        className={`section-index font-display text-4xl font-medium italic md:text-5xl ${
          light ? 'text-paper/35' : 'text-accent/35'
        }`}
      >
        {index}
      </p>
      <div>
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.18em] uppercase ${
            light ? 'text-accent-soft' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`font-display max-w-3xl text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-tight ${
            light ? 'text-paper' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed ${
              light ? 'text-paper/70' : 'text-muted'
            }`}
          >
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  )
}
