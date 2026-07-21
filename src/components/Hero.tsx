import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#dce8e2_0%,_transparent_55%),linear-gradient(160deg,_#eef2ef_0%,_#f3f5f2_45%,_#e7efe9_100%)]"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 md:px-8 md:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <p className="mb-3 font-body text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            {profile.role}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] font-bold tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-accent"
            >
              Xem dự án
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-ink/25 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Liên hệ
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="order-1 md:order-2"
        >
          <img
            src={profile.avatar}
            alt={`Ảnh chân dung ${profile.name}`}
            className="aspect-[4/5] w-full max-w-md object-cover object-center md:ml-auto md:max-w-none"
            width={640}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  )
}
