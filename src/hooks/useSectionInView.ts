import { useEffect, useState } from 'react'
import { useScrollContainer } from '../context/ScrollContainerContext'

export function useSectionInView(sectionId: string) {
  const scrollRef = useScrollContainer()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const target = document.getElementById(sectionId)
    if (!target) return

    const getRoot = () =>
      scrollRef?.current ?? document.getElementById('landing-scroll')

    let observer: IntersectionObserver | null = null

    const attach = () => {
      observer?.disconnect()
      const root = getRoot()

      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry) return
          setInView(entry.isIntersecting && entry.intersectionRatio >= 0.4)
        },
        {
          root,
          threshold: [0, 0.2, 0.4, 0.55, 0.7],
        },
      )
      observer.observe(target)
    }

    const onResize = () => attach()

    attach()
    window.addEventListener('resize', onResize)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [sectionId, scrollRef])

  return inView
}
