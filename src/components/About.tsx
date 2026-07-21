import { profile } from '../data/profile'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Giới thiệu
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Từ zero-to-one đến trải nghiệm người dùng mượt mà
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {profile.about}
          </p>
          <div className="mt-10 border-t border-line pt-8">
            <p className="text-sm font-semibold tracking-[0.12em] text-ink uppercase">
              Học vấn
            </p>
            <p className="mt-2 font-display text-xl text-ink">
              {profile.education.degree}
            </p>
            <p className="mt-1 text-muted">
              {profile.education.school} · Tốt nghiệp {profile.education.year}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
