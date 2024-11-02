export default function Study() {
  return (
    <div className=" bg-[var(--light-bg)] font-sans flex flex-col  p-40 items-center">
      <div className="border-b-[2px] border-b-[var(--secound)] w-[525px] flex flex-col items-center pb-4">
        <h1 className=" text-6xl font-bold text-[var(--light-primary)] text-nowrap">
          O que você estudará
        </h1>
      </div>
      <p className="w-[1590px] text-4xl mt-32">
        O curso forma profissionais capacitados para atuar na área de tecnologia
        da informação,<br/> desenvolvendo habilidades em análise, projeto,
        desenvolvimento, teste, manutenção e <br/> gerenciamento de sistemas
        tecnológicos. Durante a formação, os alunos aprenderão a <br/> especificar
        requisitos e implementar soluções.
      </p>

      <p className="w-[1590px] text-4xl mt-10">
        Após a conclusão, estarão preparados para atuar como analistas de
        sistemas,<br/> programadores, desenvolvedores web e arquitetos de software,
        prontos para enfrentar <br/> desafios e contribuir para a inovação na área.
        Essa formação proporciona uma base sólida <br/> para a carreira em tecnologia,
        alinhando teoria e prática às demandas do setor.
      </p>
    </div>
  );
}
