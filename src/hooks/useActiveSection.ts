import { useEffect, useState, type RefObject } from 'react'

export function useActiveSection(
  ids: string[],
  scrollRootRef?: RefObject<HTMLElement | null> | null,
) {
  const [activeId, setActiveId] = useState(ids[0] ?? 'top')

  useEffect(() => {
    if (ids.length === 0) return

    const root = scrollRootRef?.current ?? null

    const observe = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el))

      if (elements.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

          if (visible[0]?.target.id) {
            setActiveId(visible[0].target.id)
          }
        },
        {
          root,
          rootMargin: '-12% 0px -12% 0px',
          threshold: [0.25, 0.5, 0.75],
        },
      )

      elements.forEach((el) => observer.observe(el))
      return observer
    }

    const observer = observe()
    if (!observer) return

    return () => observer.disconnect()
  }, [ids, scrollRootRef])

  return activeId
}
