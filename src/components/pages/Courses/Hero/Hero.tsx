import Button from "../../../shared/Button/Button";
export default function Hero(props: { Name: string }) {
  return (
    <div>
      <div className="pt-[230px] bg-[url('./Courses/DS.png')] bg-center h-screen bg-no-repeat bg-cover flex flex-col items-center">
        <h1 className="font-sans text-[var(--secound)]  text-5xl font-semibold text-center">
          {props.Name}
        </h1>
        <h3 className=" mt-5 mb-16 font-sans text-slate-50 flex flex-row items-center justify-between text-2xl text-center">
          Ensino Médio com Técnico em Desenvolvimento de <br /> Sistemas
        </h3>
        <div className=" bg-[var(--light-bg)] p-10 pt-5 pb-5 h-[400px] rounded-[40px] font-sans flex flex-row items-center justify-between w-[1000px] ">
          <div className=" w-[50%] flex flex-col items-center h-[300px] justify-around  border-r-2 border-r-[var(--light-primary)] p-10">
            <h1 className=" text-[var(--light-primary)] font-bold text-3xl relative bottom-10 text-center">
              Plano de curso
            </h1>
            <p className=" text-center text-2xl">
              {"Baixe o PDF do plano de cursos"} <br /> {"na área do aluno ;)"}
            </p>
            <div className="relative top-10">
              <Button pathToPage={'/area-aluno'} Bordertheme="Light" content="Área do aluno" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-[50%] h-[200px]">
            <h1 className=" text-xl w-[80%] ">
              <strong className="text-[var(--light-primary)]">
                Coordenador:
              </strong>{" "}
              Manhã: Flavio Mota <br /> Noite ???
            </h1>
            <h1 className=" text-xl w-[80%]">
              <strong className="text-[var(--light-primary)]">Período:</strong>{" "}
              Manhã ou Noite
            </h1>
            <h1 className=" text-xl w-[80%]">
              <strong className="text-[var(--light-primary)]">Duração:</strong>{" "}
              Manhã: 3 Anos <br /> Noite: X Módulos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
