import etecLogo from "/etec-logo.png"
import Button from "../Button"

export function NavBar() {
  return ( 
    <header className='bg-bg-blue-1000 opacity-90 w-dvw h-24 flex justify-between items-center px-14 font-semibold shadow-sm shadow-black'>
      <img src={etecLogo} alt="Logo da Etec" />

      <nav>
        <ul className='flex gap-11'>
          <li className='text-yellow-350 flex flex-col items-center gap-1'>
            <a href="#">Início</a>

            <span className='w-12 h-0.5 bg-yellow-350'/>
          </li>

          <li className='text-white'>
            <a href="#">Cursos</a>
          </li>

          <li className='text-white'>
            <a href="#">Institucional</a>
          </li>

          <li className='text-white'>
            <a href="#">Acadêmico</a>
          </li>

          <li className='text-white'>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>

      <Button content="Área do Aluno" />
    </header>
  )
}