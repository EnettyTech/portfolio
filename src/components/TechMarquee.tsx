const TECH = [
  'React Native',
  'Flutter',
  'Next.js',
  'React',
  'NestJS',
  'Node.js',
  'Firebase',
  'Docker',
  'Web3',
  'Stripe',
  'CI/CD',
]

export function TechMarquee() {
  const row = [...TECH, ...TECH]

  return (
    <div className="marquee-fade overflow-hidden border-y border-line/70 bg-linear-to-r from-warm/90 via-surface/50 to-warm/90 py-4">
      <div className="marquee-track gap-0">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1}
          >
            {row.map((item, i) => (
              <li
                key={`${copy}-${item}-${i}`}
                className="flex items-center gap-6 px-6"
              >
                <span className="font-display text-xl whitespace-nowrap text-ink/75 italic transition-colors hover:text-accent md:text-2xl">
                  {item}
                </span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-accent/70"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
