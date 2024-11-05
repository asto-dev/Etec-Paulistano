
import { cards } from "../../../../constants/student-area";

export function Cards() {
  return(
    <>
      {cards.map((card, index) => (
        <div key={index} className="w-full px-10 flex justify-content items-center flex-col py-5">
          <h2 className="text-yellow-350 font-semibold text-4xl py-5 text-center">{card.title}</h2>

          <div className="flex">
            <img className="rounded-l-3xl max-w-full h-auto w-80 block" src={card.image} alt="Ícone de Calendário" />

            <div className="bg-blue-925 rounded-r-3xl flex justify-between gap-5 flex-col p-10">
              <p className="text-white max-w-[40rem] text-xl">
                {card.cardContent}
              </p>

              <button className="bg-yellow-250 text-blue-925 font-semibold flex items-center h-9 rounded-sm w-fit px-3 gap-4">
                <card.buttonIcon className="size-6" />
                <span>{card.buttonContent}</span>
              </button>
            </div>
          </div>
          <br />
        </div>
      ))}
      </>

  )
}