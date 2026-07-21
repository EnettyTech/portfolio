import { useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { SectionReveal } from './SectionReveal'
import { SlideContent } from './SlideContent'
import { TechMarquee } from './TechMarquee'

function AvatarFigure({ className }: { className?: string }) {
  return (
    <figure className={`relative m-0 shrink-0 ${className ?? ''}`}>
      <div className="rounded-full bg-linear-to-br from-accent/80 via-accent to-accent-deep p-[3px] shadow-soft">
        <div className="rounded-full bg-paper p-1 md:p-1.5">
          <div className="aspect-square w-full overflow-hidden rounded-full bg-[#2a9fd6] ring-1 ring-ink/5">
            <img
              src={profile.avatar}
              alt={`Ảnh thẻ ${profile.name}`}
              className="h-full w-full object-cover object-[center_18%] max-md:scale-100 md:scale-[1.08]"
              width={480}
              height={480}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Ảnh chân dung chính thức</figcaption>
    </figure>
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const scrollTo = useScrollToSection()

  return (
    <section
      id="top"
      className="relative flex h-full shrink-0 snap-start snap-always flex-col overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,_#eef6f2_0%,_#f4f7f5_38%,_#e8f0eb_100%)]"
      />
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl md:h-[min(52vh,24rem)] md:w-[min(58vw,22rem)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-48 w-48 rounded-full bg-accent-soft/25 blur-3xl"
      />

      <SlideContent
        sectionId="top"
        className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center gap-5 overflow-hidden px-4 py-5 max-md:text-center sm:px-5 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-8 md:px-10 md:py-6 lg:gap-10 lg:px-12"
      >
        <SectionReveal className="order-2 flex w-full min-w-0 max-w-full flex-col md:order-1 md:justify-center lg:pr-4">
          <div className="mb-3 flex w-full max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-accent uppercase sm:text-xs sm:tracking-[0.14em] md:mb-5 md:justify-start md:gap-3 md:text-sm">
            <span className="inline-block h-px w-8 shrink-0 bg-accent md:w-10" />
            <span className="min-w-0 text-balance">{profile.role}</span>
          </div>

          <h1 className="font-display w-full text-[clamp(1.75rem,8.5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance text-ink md:leading-[0.98] md:tracking-[-0.03em]">
            <span className="max-md:inline md:block">Nguyễn </span>
            <span className="max-md:inline md:block">Hữu Thọ</span>
          </h1>

          <p className="mt-3 w-full max-w-full text-sm leading-relaxed text-pretty text-muted sm:text-base md:mt-5 md:max-w-lg md:text-lg lg:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-7 md:justify-start md:gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-paper shadow-soft transition hover:bg-accent hover:shadow-card sm:w-auto md:px-7 md:py-3.5"
            >
              Xem dự án
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-line bg-paper/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-accent/50 hover:bg-warm hover:text-accent sm:w-auto md:justify-start"
            >
              Liên hệ
            </button>
          </div>
        </SectionReveal>

        <SectionReveal
          delay={0.08}
          className="order-1 flex w-full shrink-0 justify-center md:order-2 md:w-auto md:justify-end md:py-4"
        >
          <AvatarFigure className="w-[12rem] sm:w-[8.5rem] md:w-[clamp(10rem,28vh,14rem)] lg:w-[clamp(11rem,30vh,16rem)]" />
        </SectionReveal>
      </SlideContent>

      <div className="relative shrink-0">
        <TechMarquee />
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-14 left-1/2 flex max-w-[calc(100%-2rem)] -translate-x-1/2 cursor-pointer items-center justify-center gap-2 rounded-full border border-line/80 bg-paper/60 px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-muted uppercase backdrop-blur-sm transition hover:border-accent/40 hover:text-accent md:left-10 md:max-w-none md:translate-x-0 md:justify-start lg:left-12"
      >
        Cuộn xuống
        <span aria-hidden className={reduceMotion ? '' : 'animate-bounce'}>
          ↓
        </span>
      </button>
    </section>
  )
}
