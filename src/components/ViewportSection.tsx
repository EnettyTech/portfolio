import type { ReactNode } from 'react'
import { SlideContent } from './SlideContent'

type ViewportSectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function ViewportSection({
  id,
  children,
  className = '',
}: ViewportSectionProps) {
  return (
    <section
      id={id}
      className={`relative flex h-full shrink-0 snap-start snap-always flex-col overflow-hidden ${className}`}
    >
      <SlideContent
        sectionId={id}
        className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center overflow-hidden px-5 py-5 sm:px-5 md:px-10 md:py-6 lg:px-12"
      >
        {children}
      </SlideContent>
    </section>
  )
}
