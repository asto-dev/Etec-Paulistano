import { Hero } from "../components/pages/StudentArea/Hero"
import { NavBar } from "../components/shared/Navbar/Navbar"
import { Footer } from "../components/shared/Footer"

export function StudentArea() {
  return(
    <div className="w-full h-full overflow-hidden font-primary">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  )
}