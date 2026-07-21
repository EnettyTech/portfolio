import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'
import { ViewportSection } from './ViewportSection'

export function Skills() {
  return (
    <ViewportSection
      id="skills"
      className="border-b border-line/80 bg-linear-to-b from-surface/80 via-paper to-paper"
    >
      <SectionReveal>
        <SectionHeader
          index="02"
          eyebrow="Kỹ năng"
          title="Bộ công cụ để ship sản phẩm end-to-end"
          description="Từ mobile native-feel đến backend, DevOps và tích hợp thanh toán / Firebase."
        />
      </SectionReveal>

      <ul className="mt-8 divide-y divide-line/70 space-y-0">
        {profile.skills.map((group, index) => {
          const num = String(index + 1).padStart(2, '0')
          return (
            <SectionReveal key={group.title} delay={index * 0.03}>
              <li className="group grid gap-3 rounded-2xl border border-transparent px-3 py-4 transition hover:border-line/80 hover:bg-paper/70 md:grid-cols-[3.5rem_minmax(0,11rem)_minmax(0,1fr)] md:items-start md:gap-5 md:px-4 md:py-5">
                <span className="section-index font-display text-xl text-accent/45 italic transition group-hover:text-accent md:pt-0.5 md:text-2xl">
                  {num}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line/90 bg-paper/90 px-3 py-1 text-xs font-medium text-ink-soft shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition group-hover:border-accent/25 md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </SectionReveal>
          )
        })}
      </ul>
    </ViewportSection>
  )
}
