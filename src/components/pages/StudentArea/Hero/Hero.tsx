export function Hero() {
  return(
    <>
      <div className="bg-[url('./StudentArea/classroom-bottom.webp')]
      bg-center bg-no-repeat bg-cover h-dvh w-screen flex justify-center items-center"
      >
        <div className="bg-blue-925 w-[80%] h-44 flex flex-col justify-center items-center gap-3 bg-opacity-[0.70] mb-16 p-10">
          <span className="text-yellow-350 font-semibold text-5xl text-center">Bem vindo(a) aluno(a)!</span>
          <p className="text-white text-3xl text-center">Aqui você encontrará informações sobre sua vida acadêmica.</p>
        </div>
      </div>
    </>
  )
}