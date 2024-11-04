import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
export function Phrase(props: { bg: string; text: string }) {
  return (
    <section
      id="Phrase"
      className=" flex flex-row justify-center items-center p-[150px] gap-[350px]"
      style={{ backgroundColor: props.bg }}
    >
      <div className="flex flex-col items-center">
        <BiSolidQuoteAltLeft className="  text-[var(--secound)] text-[100px]  relative right-[370px] top-[50px]" />
        <h1
          style={{ color: props.text }}
          className=" text-5xl text-center font-sans text-nowrap"
        >
          Se a educação sozinha não <br /> transforma a sociedade, sem <br />
          ela tampouco a sociedade <br /> muda.
        </h1>
        <BiSolidQuoteAltRight className=" text-[var(--secound)] text-[100px]  relative left-[370px] bottom-[50px] " />
      </div>
      <img
        src="./paulo-freire.png"
        className=" w-[300px]  h-[300px] object-fill border-2 rounded-full border-[--secound]"
      />
    </section>
  );
}
