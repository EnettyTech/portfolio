import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV_IDS = profile.nav.map((item) => item.id)

export function Nav() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(NAV_IDS)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          NHT
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Chính">
          {profile.nav.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative font-body text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                <span className={active ? 'text-ink' : undefined}>{item.label}</span>
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

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-line px-3 py-1.5 text-sm font-medium text-ink md:hidden"
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
            className="overflow-hidden border-t border-line md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1 px-5 py-3">
              {profile.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    className={`block py-2 text-base ${
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
