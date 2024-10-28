import etecLogo from "/etec-logo.webp"
import Button from "../Button/Button"
import { NavLink } from "react-router-dom"

export function NavBar() {
  return ( 
    <header className='bg-blue-1000 opacity-90 w-dvw h-24 font-primary flex justify-between items-center px-14 font-semibold shadow-sm shadow-black fixed z-10 flex-1'>
      <img src={etecLogo} alt="Logo da Etec" />
      <nav>
        <ul className='flex gap-11'>
          <li className='text-yellow-350 flex flex-col items-center gap-1'>
            <NavLink to={"/"}>Início</NavLink>
            <span className='w-12 h-0.5 bg-yellow-350'/>
          </li>

          <li className='text-white'>
            <NavLink to={"/cursos"}>Cursos</NavLink>
          </li>

          <li className='text-white'>
            <NavLink to={"#"}>Institucional</NavLink>
          </li>

          <li className='text-white'>
            <NavLink to={"#"}>Acadêmico</NavLink>
          </li>

          <li className='text-white'>
            <NavLink to={"#"}>Contato</NavLink>
          </li>
        </ul>
      </nav>

      <Button content="Área do Aluno" />
    </header>
  )
}