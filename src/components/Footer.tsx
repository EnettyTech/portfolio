import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10 lg:px-12">
        <div>
          <p className="font-display text-2xl font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm text-paper/60">{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-paper/60">
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
      </div>
    </footer>
  )
}
