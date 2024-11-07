
import { cards } from "../../../../constants/student-area";

export function Cards() {
  return(
    <>
      {cards.map((card, index) => (
        <div key={index} className="w-full px-10 flex justify-content items-center flex-col py-5 max-[840px]:py-0">
          <h2 className="text-[--light-primary] font-semibold text-4xl py-5 text-center">{card.title}</h2>

          <div className="flex">
            <img className="rounded-l-3xl max-w-full h-auto w-80 block max-[840px]:w-52 max-[840px]:h-64" src={card.image} alt="Imagem do conteúdo do card" />

            <div className="bg-white shadow-xl rounded-r-3xl flex justify-between  gap-5 flex-col p-10 max-md:h-64 max-md:justify-center">
              <p className="text-black max-w-[40rem] text-xl max-[840px]:text-sm max-md:h-48">
                {card.cardContent}
              </p>

              <button className="bg-yellow-250 text-blue-925 font-semibold bg-[--light-blue] flex items-center h-9 rounded-sm w-fit px-3 gap-4">
                <card.buttonIcon className="size-6 text-[--third]" />
                <span className="text-[--third] max-md:text-sm">{card.buttonContent}</span>
              </button>
            </div>
          </div>
          <br />
        </div>
      ))}
    </>

  )
}