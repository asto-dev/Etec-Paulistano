import { courses } from "../../../../constants/courses.ts"
import { Title } from "../../../shared/Title/Title.tsx"

import { CardCurso } from "./Card/CardCurso.tsx"

export function CoursesSection() {
  return (
    <>
      <div className="flex flex-col items-center p-20 justify-center bg-[var(--light-bg)]">
        <Title title="Nossos Cursos" />
        <p>Escolha o melhor curso para você!</p>
      </div>

      <div className="p-10 bg-[#171A4A] flex justify-around flex-wrap gap-3">
        {courses.map((curso, index) => (
          <CardCurso courseId={curso.id} name={curso.name} imgUrl={curso.imgUrl} key={index} path=""/>
        ))}
      </div>
    </>
  );
}
