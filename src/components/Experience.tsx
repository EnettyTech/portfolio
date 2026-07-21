import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'
import { ViewportSection } from './ViewportSection'

export function Experience() {
  return (
    <ViewportSection id="experience" className="border-b border-line/80">
      <SectionReveal>
        <SectionHeader
          index="03"
          eyebrow="Kinh nghiệm"
          title="Hành trình nghề nghiệp"
          description="Từ thực tập đến kỹ sư nòng cốt và fullstack — luôn gắn với sản phẩm thật."
        />
      </SectionReveal>

      <ol className="mt-8 space-y-0">
        {profile.experience.map((job, index) => {
          const isLast = index === profile.experience.length - 1
          return (
            <li
              key={job.company}
              className={`grid gap-4 lg:grid-cols-[10rem_minmax(0,1fr)] ${
                isLast ? '' : 'mb-4 pb-8'
              }`}
            >
              <SectionReveal>
                <p className="font-display text-base text-accent italic md:text-lg">
                  {job.period}
                </p>
              </SectionReveal>

              <SectionReveal
                delay={0.06}
                className="relative rounded-2xl border border-line/80 border-l-[3px] border-l-accent/40 bg-paper/60 p-5 pl-6 md:pl-8"
              >
                <span
                  aria-hidden
                  className="absolute top-6 -left-[9px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper"
                />
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{job.company}</p>
                  </div>
                  <span className="font-display text-4xl leading-none text-ink/[0.06] italic select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-[0.65em] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent/60 md:text-base"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </li>
          )
        })}
      </ol>
    </ViewportSection>
  )
}
