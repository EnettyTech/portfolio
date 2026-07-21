import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'
import { useSectionInView } from '../hooks/useSectionInView'

const panelEase = [0.22, 1, 0.36, 1] as const

type SlideContentProps = {
  sectionId: string
  children: ReactNode
  className?: string
}

export function SlideContent({
  sectionId,
  children,
  className = '',
}: SlideContentProps) {
  const inView = useSectionInView(sectionId)
  const reduceMotion = useReducedMotion()
  const [playKey, setPlayKey] = useState(0)

  useEffect(() => {
    if (inView) setPlayKey((key) => key + 1)
  }, [inView])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      key={playKey}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : false}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const slideItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: panelEase },
  },
}
