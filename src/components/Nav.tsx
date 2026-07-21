import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/profile'
import { useScrollContainer } from '../context/ScrollContainerContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollToSection } from '../hooks/useScrollToSection'

const SECTION_IDS = ['top', ...profile.nav.map((item) => item.id)]

export function Nav() {
  const [open, setOpen] = useState(false)
  const scrollRef = useScrollContainer()
  const activeId = useActiveSection(SECTION_IDS, scrollRef)
  const scrollTo = useScrollToSection()

  const close = () => setOpen(false)

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo(id)
    close()
  }

  return (
    <header className="z-50 shrink-0 border-b border-line/50 bg-paper/80 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 lg:px-12">
        <a
          href="#top"
          onClick={onNavClick('top')}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-ink to-ink-soft font-display text-sm font-bold text-paper shadow-card transition group-hover:from-accent group-hover:to-accent-deep">
            NT
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight text-ink sm:inline">
            Nguyễn Hữu Thọ
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Chính">
          {profile.nav.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNavClick(item.id)}
                className="relative rounded-full px-1 font-body text-sm font-medium tracking-wide text-muted transition-colors hover:text-ink"
              >
                <span className={active ? 'text-ink' : undefined}>
                  {item.label}
                </span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            )
          })}
        </nav>

        <a
          href="#contact"
          onClick={onNavClick('contact')}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-card transition hover:bg-accent md:inline-flex"
        >
          Liên hệ
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line bg-surface/60 px-4 py-2 text-sm font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Đóng' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {profile.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onNavClick(item.id)}
                    className={`block py-2.5 text-lg ${
                      activeId === item.id
                        ? 'font-semibold text-accent'
                        : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
