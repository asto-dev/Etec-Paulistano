import { courses } from "../../../../constants/courses.ts"

import { CardCurso } from "./Card/CardCurso.tsx"

export function CoursesSection() {
  return (
    <>
      <div className="flex flex-col items-center m-20 justify-center">
        <div className="text-5xl font-bold text-[#171A4A]">Nossos Cursos</div>
        <p>Escolha o melhor curso para você!</p>
      </div>

      <div className="p-10 bg-[#171A4A] flex justify-around flex-wrap gap-3">
        {courses.map((curso, index) => (
          <CardCurso name={curso.name} imgUrl={curso.imgUrl} key={index}/>
        ))}
      </div>
    </>
  );
}
