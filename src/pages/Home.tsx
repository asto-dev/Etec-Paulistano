import { CoursesSection } from "../components/pages/home/CoursesSection"
import { Phrase } from "../components/pages/home/LandingPageHero"
import { LandingPageHero } from "../components/pages/home/Hero"
import { StudentProjects } from "../components/pages/home/StudentProjects"

import { Footer } from "../components/shared/Footer"
import { NavBar } from "../components/shared/Navbar"

export function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <NavBar />

      <LandingPageHero />

      <CoursesSection />

      <StudentProjects />

      <Phrase bg={'var(--light-bg)'} text={'black'}/>

      <Footer />
    </div>
  )
}
