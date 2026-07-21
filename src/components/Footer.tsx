import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-lg font-semibold">{profile.name}</p>
        <p className="text-sm text-paper/70">
          © {year} · Frontend & Mobile Developer
        </p>
      </div>
    </footer>
  )
}
