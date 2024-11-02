import Hero from "../components/pages/Courses/Hero/Hero";
import Study from "../components/pages/Courses/Hero/Study";
import { NavBar } from "../components/shared/Navbar/Navbar";

export function Courses() {
  return (
    <>
      <NavBar />
      <Hero Name="Desenvolvimento de sistemas" />
      <Study />
    </>
  );
}
