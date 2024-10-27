import Button from "../Button";
export function LandingPageHero() {
  return (
    <div
      className="bg-[url('background-landingpage.png')] flex items-center w-full h-screen  
     bg-center bg-cover bg-no-repeat  "
    >
      <main className="flex flex-col  w-[53rem] ml-12 mt-20">
        <span className="text-white text-4xl font-secondary">Bem-vindo (a) à Etec Paulistano</span>
        <h1 className="text-yellow-350 text-6xl">Formando profissionais<br />desde 2010</h1>
        <p className="text-white break-words text-3xl font-secondary my-8">Onde o conhecimento transforma vidas e o futuro é construído com dedicação. Oferecemos formação de excelência com professores qualificados. Venha transformar sua carreira!</p>
        <Button content="Vestibulinho"/>
      </main>
    </div>
  );
}
