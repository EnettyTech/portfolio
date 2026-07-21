import { profile } from '../data/profile'
import { SectionReveal } from './SectionReveal'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Kỹ năng
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Chuyên môn chuyên sâu
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {profile.skills.map((group, index) => (
            <SectionReveal key={group.title} delay={index * 0.05}>
              <h3 className="font-display text-xl font-semibold text-ink">
                {group.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {group.items.join(' · ')}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
