import Gallery from "../components/pages/Courses/Gallery/Gallery";
import Hero from "../components/pages/Courses/Hero/Hero";
import Study from "../components/pages/Courses/Hero/Study";
import { Footer } from "../components/shared/Footer";
import { NavBar } from "../components/shared/Navbar/Navbar";
export function Courses() {
  {
  }
  return (
    <>
      <NavBar />
      <Hero
        Name="Desenvolvimento de sistemas"
        Coordinators={["Flavio Mota", "???"]}
        Period={["Manhã", "Noite"]}
        Time={["3 Anos", "X Modulos"]}
        HeroImage={"./Courses/DS.png"}
      />
      <Study
        About1="O curso forma profissionais capacitados para atuar na área de
          tecnologia da informação,
           desenvolvendo habilidades em análise, projeto, desenvolvimento,
          teste, manutenção e  gerenciamento de sistemas tecnológicos.
          Durante a formação, os alunos aprenderão a  especificar
          requisitos e implementar soluções."
        About2="Após a conclusão, estarão preparados para atuar como analistas de
          sistemas,
           programadores, desenvolvedores web e arquitetos de software,
          prontos para enfrentar  desafios e contribuir para a inovação na
          área. Essa formação proporciona uma base sólida  para a carreira
          em tecnologia, alinhando teoria e prática às demandas do setor."
      />
      <Gallery Name="Galeria dos Alunos" />
      <Footer />
    </>
  );
}
