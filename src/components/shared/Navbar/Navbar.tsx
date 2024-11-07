import { useRef } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import Button from "../Button/Button";
import NavbarLink from "./NavbarLink";
import etecLogo from "/etec-logo.webp";

export function NavBar() {
  const nav = useRef<HTMLElement>(document.querySelector("#nav"));
  const button = useRef<HTMLDivElement>(document.querySelector("#button"));
  return (
    <header className="bg-[var(--primary)] opacity-90 w-dvw h-24 font-primary flex justify-between items-center px-14 font-semibold shadow-sm shadow-black fixed z-10 flex-1 ">
      <img src={etecLogo} alt="Logo da Etec Paulistano" />

      <nav
        id="nav"
        ref={nav}
        className=" right-0 w-full h-[500px] absolute top-[96px] hidden lg:block lg:w-auto lg:h-auto lg:top-0 lg:static"
      >
        <ul className="flex flex-col pt-10 gap-0 items-center h-full  bg-[var(--primary)] justify-around lg:flex lg:flex-row lg:gap-11 lg:pt-0">
          <NavbarLink path={"/"} content="Início" />
          <NavbarLink path={"/cursos"} content="Cursos" />
          <NavbarLink path={"#"} content="Institucional" />
          <NavbarLink path={"#"} content="Acadêmico" />
          <NavbarLink path={"#"} content="Contato" />
          <div className="lg:hidden">
            <Button
              pathToPage={"/area-aluno"}
              Bordertheme="Dark"
              content="Área do Aluno"
            />
          </div>
        </ul>
      </nav>

      <div className=" hidden lg:block">
        <Button
          pathToPage={"/area-aluno"}
          Bordertheme="Dark"
          content="Área do Aluno"
        />
      </div>
      <HiMiniBars3
        onClick={() => {
          if (button.current) {
            button.current.style.display == "none"
              ? (button.current.style.display = "block")
              : (button.current.style.display = "none");
          }
          if (nav.current) {
            nav.current.style.display == "none"
              ? (nav.current.style.display = "block")
              : (nav.current.style.display = "none");
          }
        }}
        className="block text-6xl text-white lg:hidden"
      />
    </header>
  );
}
