import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { slideItemVariants } from './SlideContent'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: slideItemVariants.hidden,
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
