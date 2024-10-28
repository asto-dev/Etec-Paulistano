import { NavBar } from '../components/Header/Navbar'
import { LandingPageHero } from '../components/LandingPageHero/LandingPageHero'
import { Footer } from '../components/Footer/Footer'
import { CursosSe } from '../components/CursosSe/CursosSe';
export function Home() {
  return (
    <>
      <NavBar />
      <LandingPageHero />
      <CursosSe/>
      <Footer />
    </>
  )
}
