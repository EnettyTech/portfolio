import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'
import { ViewportSection } from './ViewportSection'

const highlights = [
  { value: '08+', label: 'Năm kinh nghiệm' },
  { value: 'Zero→One', label: 'Thế mạnh sản phẩm' },
  { value: 'Web3', label: 'Blockchain & Fintech' },
]

export function About() {
  return (
    <ViewportSection id="about" className="border-b border-line/80">
      <SectionReveal>
        <SectionHeader
          index="01"
          eyebrow="Giới thiệu"
          title="Từ zero-to-one đến trải nghiệm người dùng mượt mà"
        />
      </SectionReveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <SectionReveal delay={0.08}>
          <p className="font-display text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-ink italic">
            “Xây sản phẩm đa nền tảng — từ app Gen Z đến nền tảng
            Blockchain/Web3 phức tạp.”
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {profile.about}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.14}>
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-ink via-ink-soft to-ink px-6 py-6 text-paper shadow-soft md:px-8 md:py-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl"
            />
            <p className="text-xs font-semibold tracking-[0.16em] text-accent-soft uppercase">
              Học vấn
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-semibold md:text-2xl">
              {profile.education.degree}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-paper/70">
              {profile.education.school}
            </p>
            <p className="mt-4 font-display text-3xl text-accent-soft italic">
              {profile.education.year}
            </p>
          </div>
        </SectionReveal>
      </div>

      <div className="mt-8 grid gap-4 border-t border-line/80 pt-6 sm:grid-cols-3">
        {highlights.map((item, index) => (
          <SectionReveal key={item.label} delay={index * 0.06}>
            <div className="group rounded-2xl border border-line/80 bg-surface/40 px-5 py-5 transition hover:border-accent/35 hover:bg-warm/60 hover:shadow-card">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink italic md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs tracking-[0.12em] text-muted uppercase">
                {item.label}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </ViewportSection>
  )
}
