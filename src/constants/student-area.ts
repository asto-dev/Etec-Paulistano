import { MdOutlineFileDownload, MdArrowOutward  } from "react-icons/md";
import { IconType } from "react-icons";


type Card = {
  title: string,
  image: string,
  cardContent: string,
  buttonContent: string,
  buttonIcon: IconType,
}



export const cards: Card[] = [
  {
    title: "Calendário Escolar",
    image: "./public/StudentArea/Card-Calendario.webp",
    cardContent: "O arquivo disponível contém informações sobre o calendário escolar, incluindo dias letivos, recessos e exigências pedagógicas conforme a Lei de Diretrizes e Bases da Educação, que determina a carga horária e o número mínimo de dias letivos que as instituições devem cumprir.",
    buttonContent: "Download - Calendário Escolar",
    buttonIcon: MdOutlineFileDownload 
  },
  {
    title: "Manual do Aluno",
    image: "./public/StudentArea/Card-Manual-do-Aluno.webp",
    cardContent: "O manual do aluno foi criado para reunir em um só lugar todas as informações essenciais sobre direitos, deveres, benefícios, serviços, procedimentos pedagógicos e regras gerais estabelecidas pela nossa instituição.",
    buttonContent: "Download - Manual do Aluno",
    buttonIcon: MdOutlineFileDownload
  },
  {
    title: "Regimento Comum",
    image: "./public/StudentArea/Card-Regimento-Comum.webp",
    cardContent: "As Escolas Técnicas Estaduais (Etecs) do CEETEPS seguem um Regimento Escolar Comum, que estabelece as regras para professores, funcionários, alunos e a comunidade escolar. Esse regimento foi aprovado pela deliberação CEETEPS Nº 003 e publicado no DOE em 28/08/2013.",
    buttonContent: "Download - Regimento comum",
    buttonIcon: MdOutlineFileDownload
  },
  {
    title: "NSA Online",
    image: "./public/StudentArea/Card-NSA.webp",
    cardContent: "O NSA (Novo Sistema Acadêmico) é um sistema online usado pelas Etecs em São Paulo. Nele, alunos e responsáveis podem acessar notas, frequência, conteúdo das aulas, planos de trabalho e solicitar rematrículas. Também é o canal oficial de comunicação da escola. Acesse o site https://nsa.cps.sp.gov.br, utilize o código da Etec (229), RM (Registro de Matrícula) e a senha fornecida na matrícula.",
    buttonContent: "Acessar o NSA Online",
    buttonIcon: MdArrowOutward
  },
  {
    title: "E-mail Institucional",
    image: "./public/StudentArea/Card-Email-Institucional.webp",
    cardContent: "O Centro Paula Souza possui um convênio com a Microsoft que proporciona aos estudantes e professores uma conta de e-mail institucional com a extensão @etec.sp.gov.br.O acesso ao E-mail Institucional é realizado no site http://www.etec.sp.gov.br com a conta de e-mail e senha fornecida para o aluno no momento da matrícula.",
    buttonContent: "Acessar o E-mail Institucional",
    buttonIcon: MdArrowOutward
  }
]