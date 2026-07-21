import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'
import { ViewportSection } from './ViewportSection'

export function Projects() {
  let runningIndex = 0
  const groups = profile.projects.map((group) => ({
    ...group,
    items: group.items.map((project) => {
      runningIndex += 1
      return { ...project, index: runningIndex }
    }),
  }))

  return (
    <ViewportSection
      id="projects"
      className="border-b border-line/80 bg-linear-to-b from-paper via-surface/50 to-paper"
    >
      <SectionReveal>
        <SectionHeader
          index="04"
          eyebrow="Dự án"
          title="Sản phẩm tiêu biểu"
          description="Wallet, launchpad, tracker Web3 và ứng dụng đời sống — từ công ty đến cá nhân."
        />
      </SectionReveal>

      <div className="mt-5 space-y-6 md:mt-6">
        {groups.map((group) => (
          <div key={group.title}>
            <SectionReveal>
              <div className="mb-3 flex items-center gap-4">
                <h3 className="font-display text-base font-semibold text-ink md:text-lg">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-line" />
              </div>
            </SectionReveal>

            <ul className="grid gap-2.5 md:grid-cols-2 md:gap-3">
              {group.items.map((project) => {
                const num = String(project.index).padStart(2, '0')
                return (
                  <SectionReveal key={project.name}>
                    <motion.li
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 24,
                      }}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-paper/90 p-4 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset] transition hover:-translate-y-0.5 hover:border-accent/35 hover:bg-warm/70 hover:shadow-card md:p-5"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100"
                      />
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-display text-xl text-accent/40 italic transition group-hover:text-accent md:text-2xl">
                          {num}
                        </span>
                        <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-right text-[0.6rem] font-semibold tracking-[0.1em] text-accent uppercase">
                          {project.tech}
                        </span>
                      </div>
                      <h4 className="mt-2 font-display text-lg font-bold tracking-tight text-ink transition group-hover:text-accent md:text-xl">
                        {project.name}
                      </h4>
                      <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted md:text-sm">
                        {project.description}
                      </p>
                    </motion.li>
                  </SectionReveal>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </ViewportSection>
  )
}
