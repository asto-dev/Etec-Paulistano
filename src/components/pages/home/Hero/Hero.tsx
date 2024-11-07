import Button from "../../../shared/Button/Button";
export function LandingPageHero() {
  return (
    <div
      className="bg-[url('background-landingpage.webp')] flex items-center w-full h-screen
      bg-center bg-cover bg-no-repeat"
    >
      <main className="flex flex-col w-[53rem] ml-20 mt-28">
        <span className="text-white 
        lg:text-5xl md:text-4xl sm:text-3xl">
          Bem-vindo (a) à Etec Paulistano
        </span>

        <h1 className="text-yellow-350 
        lg:text-7xl md:text-6xl sm:text-5xl">
        Formando profissionais<br />desde 2010
        </h1>

        <p className="text-white break-words my-8 
        lg:text-3xl md:text-2xl sm:text-xl ">
          Onde o conhecimento transforma vidas e o futuro é construído com dedicação. Oferecemos formação de excelência com professores qualificados. Venha transformar sua carreira!</p>

        <Button pathToPage={'https://www.vestibulinhoetec.com.br/home/'} Bordertheme="Dark" content="Vestibulinho"/>
      </main>
    </div>
  );
}
