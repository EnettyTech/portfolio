import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  type RefObject,
} from 'react'

const ScrollContainerContext =
  createContext<RefObject<HTMLElement | null> | null>(null)

export function ScrollContainerProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null)
  return (
    <ScrollContainerContext.Provider value={ref}>
      {children}
    </ScrollContainerContext.Provider>
  )
}

export function useScrollContainer() {
  return useContext(ScrollContainerContext)
}
