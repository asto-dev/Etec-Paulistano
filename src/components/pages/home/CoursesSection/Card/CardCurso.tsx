import { Link } from "react-router-dom"

type CardCursoProps = {
  courseId: number
  name: string
  imgUrl: string
  path: string
}

export function CardCurso(props: CardCursoProps) {
  return (
    <Link to={`/cursos/${props.courseId}`}>
      <div className="flex flex-col justify-center items-center">
        <img src={props.imgUrl} alt={props.name} className="rounded-3xl hover:scale-95 ease-in-out duration-300 w-64 h-64" />

        <p className="text-white m-3 text-center">{props.name}</p>
      </div>
    </Link>
  )
}
