import { studentProjects } from "../../../../constants/students-projects"
import { Title } from "../../../shared/Title/Title"
import { CardProjects } from "./Card/Card"

export function StudentProjects() {
  return (
    <div>
      <div className="flex flex-col items-center m-20 justify-center gap-5">
        <Title title="Projetos de Alunos" />

        <p>Projetos desenvolvidos por nossos alunos</p>
      </div>

      <div className="px-10 pb-10 flex justify-around flex-wrap gap-4">
        {studentProjects.map(item => 
          <CardProjects 
            description={item.description} 
            imgUrl={item.imgUrl} 
            name={item.name} 
          />
        )}
      </div>
    </div>
  )
}