import etecLogo from "/etec-logo.webp"
import Button from "../Button/Button"
import NavbarLink from "./NavbarLink"

export function NavBar() {
  return (
    <header className="bg-blue-1000 opacity-90 w-dvw h-24 font-primary flex justify-between items-center px-14 font-semibold shadow-sm shadow-black fixed z-10 flex-1">
      <img src={etecLogo} alt="Logo da Etec Paulistano" />

      <nav >
        <ul className="flex gap-11">
          <NavbarLink path={"/"} content="Início" />
          <NavbarLink path={"/cursos"} content="Cursos" />
          <NavbarLink path={"#"} content="Institucional" />
          <NavbarLink path={"#"} content="Acadêmico" />
          <NavbarLink path={"#"} content="Contato" />
        </ul>
      </nav>

      <Button pathToPage={'/area-aluno'} Bordertheme="Dark" content="Área do Aluno" />
    </header>
  );
}
