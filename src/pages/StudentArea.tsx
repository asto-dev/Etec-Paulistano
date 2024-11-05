import { Hero } from "../components/pages/StudentArea/Hero/Hero"
import { NavBar } from "../components/shared/Navbar/Navbar"
import { Footer } from "../components/shared/Footer"
import { Cards } from "../components/pages/StudentArea/Cards"

export function StudentArea() {
  return(
    <div className="w-full h-full overflow-hidden font-primary bg-blue-1000">
      <NavBar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}