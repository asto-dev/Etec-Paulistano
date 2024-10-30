import CardCurso from "../CardCurso/CardCurso.tsx"

export function CursosSe() {
  const cursos = [
    {
      name: "Novotec - Desenvolvimento de Sistemas",
      img: "../../../public/cursos-ds.png",
    },
    {
      name: "Novotec - Meio Ambiente",
      img: "../../../public/cursos-ma.png",
    },
    {
      name: "Novotec - Administração",
      img: "../../../public/cursos-adm.png",
    },
    {
      name: "Novotec - Recursos Humanos",
      img: "../../../public/cursos-rh.png",
    },
    {
      name: "Novotec - Quimica",
      img: "../../../public/cursos-qi.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center m-20 justify-center ">
        <div className="text-5xl font-bold text-[#171A4A]"> Nossos Cursos</div>
        <span> Escolha o melhor curso para você!</span>
      </div>

      <div className="w-vhw p-10 bg-[#171A4A] flex justify-around items flex-wrap">
        {cursos.map((curso, index) => (
          <CardCurso curName={curso.name} img={curso.img} key={index}/>
        ))}
      </div>
    </>
  );
}
