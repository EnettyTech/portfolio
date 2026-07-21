import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionReveal } from './SectionReveal'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-line bg-surface/35">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Dự án
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Sản phẩm tiêu biểu
          </h2>
        </SectionReveal>

        <div className="mt-14 space-y-16">
          {profile.projects.map((group) => (
            <div key={group.title}>
              <SectionReveal>
                <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {group.title}
                </h3>
              </SectionReveal>

              <ul className="mt-6 divide-y divide-line border-y border-line">
                {group.items.map((project) => (
                  <motion.li
                    key={project.name}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    className="group py-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-xl font-semibold text-ink transition group-hover:text-accent">
                        {project.name}
                      </h4>
                      <span className="text-sm font-medium text-accent">
                        {project.tech}
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
