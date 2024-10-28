import { NavBar } from '../components/Navbar/Navbar'
import { LandingPageHero } from '../components/Hero/Hero'
import { Footer } from '../components/Footer/Footer'
import { CursosSe } from '../components/CursosSe/CursosSe';
export function Home() {
  return (
    <>
      <div className='w-full overflow-hidden'>
      <NavBar />
      <LandingPageHero />
      <CursosSe/>
      <Footer />
      </div>
    </>
  )
}
