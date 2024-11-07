import { useParams } from "react-router-dom";
import Hero from "../components/pages/Courses/Hero/Hero";
import Study from "../components/pages/Courses/Hero/Study";
import { Footer } from "../components/shared/Footer";
import Gallery from "../components/shared/Gallery/Gallery";
import { Gallery as Photos } from "../constants/Photos";
import { NavBar } from "../components/shared/Navbar/Navbar";
import { detailsCourses } from "../constants/details-courses";

export function Courses() {
  const { cursosId } = useParams()

  const course = detailsCourses.find(item => item.id === Number(cursosId)) as any


  return (
    <>
      <NavBar />
      <Hero
        Name={course.title}
        Coordinators={course?.coordinator}
        Period={course?.period}
        Time={course?.duration}
        HeroImage={"/Courses/DS.png"}
      />

      <Study
        About1={course.description}
        About2="Após a conclusão, estarão preparados para atuar como analistas de
          sistemas,
           programadores, desenvolvedores web e arquitetos de software,
          prontos para enfrentar  desafios e contribuir para a inovação na
          área. Essa formação proporciona uma base sólida  para a carreira
          em tecnologia, alinhando teoria e prática às demandas do setor."
      />

      <Gallery Name="Galeria dos Alunos" Gallery={Photos} />
      <Footer />
    </>
  );
}
