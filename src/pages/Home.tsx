import { NavBar } from '../components/Header/Navbar'
import { LandingPageHero } from '../components/LandingPageHero/LandingPageHero'
import { Footer } from '../components/Footer/Footer'

export function Home() {
  return (
    <>
      <NavBar />
      <LandingPageHero />
      <Footer />
    </>
  )
}
