import { profile } from '../data/profile'
import { SectionReveal } from './SectionReveal'

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
    href: null,
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionReveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Liên hệ
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Cùng trao đổi về sản phẩm tiếp theo
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Bạn có thể liên hệ trực tiếp qua email, điện thoại hoặc GitHub.
          </p>
        </SectionReveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {links.map((item, index) => (
            <SectionReveal key={item.label} delay={index * 0.05}>
              <p className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
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
                  className="mt-2 inline-block font-display text-xl text-ink underline-offset-4 transition hover:text-accent hover:underline md:text-2xl"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-display text-xl text-ink md:text-2xl">
                  {item.value}
                </p>
              )}
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
