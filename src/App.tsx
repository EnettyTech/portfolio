import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import {
  ScrollContainerProvider,
  useScrollContainer,
} from './context/ScrollContainerContext'

function Landing() {
  const scrollRef = useScrollContainer()

  return (
    <div className="bg-grain flex h-svh flex-col overflow-hidden bg-paper text-ink">
      <Nav />
      <main
        ref={scrollRef}
        id="landing-scroll"
        className="min-h-0 flex-1 snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ScrollContainerProvider>
      <Landing />
    </ScrollContainerProvider>
  )
}
