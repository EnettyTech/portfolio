import { profile } from '../data/profile'
import { SectionHeader } from './SectionHeader'
import { SectionReveal } from './SectionReveal'
import { ViewportSection } from './ViewportSection'

const links = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
  },
  {
    label: 'Điện thoại',
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone}`,
  },
  {
    label: 'GitHub',
    value: 'github.com/EnettyTech',
    href: profile.contact.github,
  },
  {
    label: 'Địa chỉ',
    value: profile.contact.address,
    href: null as string | null,
  },
]

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <ViewportSection id="contact" className="bg-linear-to-br from-ink via-ink-soft to-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(13,148,136,0.4)_0%,_transparent_52%),radial-gradient(ellipse_at_bottom_right,_rgba(153,246,228,0.14)_0%,_transparent_48%)]"
      />

      <div className="relative">
        <SectionReveal>
          <SectionHeader
            index="05"
            eyebrow="Liên hệ"
            title="Cùng trao đổi về sản phẩm tiếp theo"
            description="Mở với cơ hội fullstack / mobile / Web3 — trả lời nhanh qua email hoặc điện thoại."
            light
          />
        </SectionReveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((item, index) => (
            <SectionReveal key={item.label} delay={index * 0.05}>
              <li
                className={`rounded-2xl border border-paper/10 bg-paper/5 py-5 backdrop-blur-sm transition hover:border-accent-soft/30 hover:bg-paper/10 md:py-6 ${
                  index % 2 === 0 ? 'sm:mr-3 sm:pl-3' : 'sm:ml-3 sm:pl-3'
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-soft uppercase">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group mt-2 inline-flex items-center gap-2 font-display text-xl text-paper transition hover:text-accent-soft md:text-2xl"
                  >
                    {item.value}
                    <span
                      aria-hidden
                      className="text-base opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="mt-2 font-display text-xl text-paper md:text-2xl">
                    {item.value}
                  </p>
                )}
              </li>
            </SectionReveal>
          ))}
        </ul>

        <footer className="mt-8 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg text-paper/90">{profile.name}</p>
          <div className="flex flex-wrap gap-5">
            <a
              href={`mailto:${profile.contact.email}`}
              className="transition hover:text-accent-soft"
            >
              Email
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent-soft"
            >
              GitHub
            </a>
            <p>© {year}</p>
          </div>
        </footer>
      </div>
    </ViewportSection>
  )
}
