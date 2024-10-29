import { NavBar } from '../components/Header/Navbar'
import { LandingPageHero } from '../components/LandingPageHero/LandingPageHero'
import { Footer } from '../components/Footer/Footer'
import { Phrase } from '../components/LandingPageHero/Phrase'

export function Home() {
  return (
    <>
      <NavBar />
      <LandingPageHero />
      <Phrase bg={'var(--light-bg)'} text={'black'}/>
      <Footer />
    </>
  )
}
