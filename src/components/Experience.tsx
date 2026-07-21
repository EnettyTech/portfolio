import { profile } from '../data/profile'
import { SectionReveal } from './SectionReveal'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Kinh nghiệm
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Hành trình nghề nghiệp
          </h2>
        </SectionReveal>

        <ol className="mt-14">
          {profile.experience.map((job, index) => (
            <li
              key={job.company}
              className={`relative grid gap-4 md:grid-cols-[11rem_1fr] ${
                index === profile.experience.length - 1 ? '' : 'pb-12'
              }`}
            >
              <div className="md:pt-1">
                <p className="text-sm font-semibold tracking-wide text-accent">
                  {job.period}
                </p>
              </div>

              <SectionReveal
                delay={index * 0.06}
                className="relative border-l border-line pl-6 md:pl-10"
              >
                <span
                  aria-hidden
                  className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent"
                />
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-muted">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed text-muted">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
